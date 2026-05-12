# Security Policy

## Supported Version

Security fixes are only maintained on the current `main` branch.

| Version | Supported |
| ------- | --------- |
| `main`  | Yes       |
| older branches | No |

## Reporting a Vulnerability

Do not open a public issue for a security problem.

If you find a vulnerability in this repository, use GitHub Private Vulnerability Reporting through the repository Security tab. If that is unavailable, contact the repository owner privately through GitHub.

Please include:

- a short description of the issue
- steps to reproduce it
- the possible impact
- any suggested fix, if you have one

## Scope

This repository is a static Jekyll website. Relevant security issues may include:

- vulnerable Ruby or Jekyll dependencies
- unsafe GitHub Pages or workflow configuration
- accidental exposure of personal or sensitive information in site content
- client-side issues such as script injection or unsafe third-party assets

Custom deployments, forks, and downstream modifications are outside the scope of this policy.

## Response

The maintainer will review reports as availability allows and will aim to:

1. acknowledge valid reports promptly
2. assess severity and impact
3. prepare and test a fix
4. publish the fix through the `main` branch

## Disclosure

Please allow reasonable time for investigation and remediation before public disclosure.
