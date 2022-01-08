from dash import Dash, html
from dash_mantine_components import TestComponent

import dash.development.base_component

app = dash.Dash()
app.layout = html.Div([
    TestComponent(),
    TestComponent(item=None),
    TestComponent(item=[]),
    TestComponent(item=""),
    TestComponent(item="Raw text (no list)"),
    TestComponent(item=["Raw text (list)"]),
    TestComponent(item=html.Div("Single item (no list)")),
    TestComponent(item=[html.Div("Single item (list)")]),
    TestComponent(item=html.Div(html.Div("Single item (nested)"))),
    TestComponent(item=html.Div(html.Div(html.Div("Single item (double nested)")))),
    TestComponent(item=TestComponent(item="Nested non-children")) 
])

if __name__ == '__main__':
    app.run_server(port=7777, debug=True)  