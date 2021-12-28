import dash_mantine_components as dmc
from dash import Dash, html, dcc

app = Dash()
app.layout = dmc.AppShell([
    dmc.Header("This is a header", height=60, padding="xs", fixed=True),
    html.Div("Hello world"),
    
    # dmc.Navbar("This is a navbar", width=300) #, fixed=True)
], fixed=True)

if __name__ == '__main__':
    app.run_server(debug=True)    