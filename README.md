# OvermindDL1 Github Pages Site Generator

Currently using [Nikola](https://getnikola.com/) as the generator, thus it will be required to update this.

Installation and documentation at https://getnikola.com/

Configuration file for the site is ``conf.py``.

To build the site:
```
nikola build
```

To see it:
```
nikola serve -b
```

To check all available commands:
```
nikola help
```

To deploy the current site to github then run:
```
nikola github_deploy
```


## Install Nikola via:

```bash
pip install 'Nikola[extras,tests]'
```


## Upgrade Nikola via:

```bash
pip install --upgrade 'Nikola[extras,tests]'
```


## Other nikola dependencies install by:

```bash
pip3 install jinja2 webassets watchdog ghp-import2
```
