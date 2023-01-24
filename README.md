### Hexlet tests and linter status:
[![Actions Status](https://github.com/BuianovschiAlex/frontend-project-46/workflows/hexlet-check/badge.svg)](https://github.com/BuianovschiAlex/frontend-project-46/actions)

[![Maintainability](https://api.codeclimate.com/v1/badges/84572fac80b17a216d52/maintainability)](https://codeclimate.com/github/BuianovschiAlex/frontend-project-46/maintainability)

[![Test Coverage](https://api.codeclimate.com/v1/badges/84572fac80b17a216d52/test_coverage)](https://codeclimate.com/github/BuianovschiAlex/frontend-project-46/test_coverage)

[![.github/workflows/nodejs.yml](https://github.com/BuianovschiAlex/frontend-project-46/actions/workflows/nodejs.yml/badge.svg)](https://github.com/BuianovschiAlex/frontend-project-46/actions/workflows/nodejs.yml)

## Description

<p><b>Difference generator</b> - a program which determines differences between two data structures, generates a report and format an output in different ways. It takes a JSON/YAML files as input and outputs as stylish/plain/json format.</p>


## Installation

#### Clone the repository (via SSH or HTTPS or GitHub CLI):

  ```bash
$ git clone <your link>
```

#### Change the working directory:

  ```bash
$ cd frontend-project-46
```

#### Install dependencies:

  ```bash
$ make install
```

#### If you want to install package globally in your system you should run:

  ```bash
$ make link
```

### Tests and linters:

  ```bash
$ make lint
$ make test
$ make test-coverage
```

### The help information

#### Outputs usage information The default help option is -h,--help.

  ```bash
gendiff -h
```

#### Will print out:

  ```bash
Usage: gendiff [options] <filepath1> <filepath2>

Compares two configuration files and shows a difference

Options:
  -V, --version        output the version number
  -f, --format [type]  output format (default: 'stylish')
  -h, --help           output usage information
```

## Examples

### Run Gendiff Example(JSON):
[![asciicast](https://asciinema.org/a/551395.svg)](https://asciinema.org/a/551395)

### Run Gendiff Example(Difference between 2 flat JSON or YAML files):
[![asciicast](https://asciinema.org/a/552520.svg)](https://asciinema.org/a/552520)

### Run Gendiff Example(Difference between 2 nested JSON or YAML files in a stylish format):
[![asciicast](https://asciinema.org/a/553608.svg)](https://asciinema.org/a/553608)

### Run Gendiff Example(Difference between 2 nested JSON or YAML files in a plain format):
[![asciicast](https://asciinema.org/a/553904.svg)](https://asciinema.org/a/553904)

### Run Gendiff Example(Difference between 2 nested JSON or YAML files in a JSON format):
[![asciicast](https://asciinema.org/a/553959.svg)](https://asciinema.org/a/553959)
