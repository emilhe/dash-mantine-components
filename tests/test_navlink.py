import dash
from dash import Dash, html, Output, Input, _dash_renderer, ALL, State
import dash_mantine_components as dmc

_dash_renderer._set_react_version("18.2.0")


def navlink_app(active):
    app = Dash(__name__, use_pages=True, pages_folder='')

    app.layout = dmc.MantineProvider([
        html.Div(
            [
                dmc.NavLink(label=f"link-{x}", id=f"link-{x}", href=f"/link-{x}", active=active,
                            w=300)
                for x in range(30)
            ]
        ),
        dash.page_container
    ])
    return app

def self_check_navlink(active, dash_duo, app):
    dash_duo.start_server(app)

    # Wait for the app to load
    dash_duo.wait_for_element("#link-0")
    els = dash_duo.find_elements('a[data-active]')
    if isinstance(active, bool):
        if active:
            assert len(els) == 30
            assert len(dash_duo.find_elements('a:not([data-active])')) == 0
        else:
            assert len(els) == 0
            assert len(dash_duo.find_elements('a:not([data-active])')) == 30
        return
    else:
        assert len(els) == 0
    for t in [1, 5, 10, 12, 13, 20, 22]:
        dash_duo.find_element(f'#link-{t}').click()
        els = dash_duo.find_elements('a[data-active]')
        if active == 'exact':
            assert len(els) == 1
        else:
            if len(str(t)) > 1:
                assert len(els) == 2
            else:
                assert len(els) == 1
            for el in els:
                assert el.get_attribute('id') in f"link-{t}"


def test_001nl_navlink(dash_duo):
    app = navlink_app(True)
    self_check_navlink(True, dash_duo, app)

def test_002nl_navlink(dash_duo):
    app = navlink_app(False)
    self_check_navlink(False, dash_duo, app)

def test_003nl_navlink(dash_duo):
    app = navlink_app('exact')
    self_check_navlink('exact', dash_duo, app)

def test_004nl_navlink(dash_duo):
    app = navlink_app('partial')
    self_check_navlink('partial', dash_duo, app)

