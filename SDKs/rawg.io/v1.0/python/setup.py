import setuptools

with open("README.md", "r") as fh:
    long_description = fh.read()

setuptools.setup(
    name="openapi",
    version="0.0.1",
    author="speakeasy-client-sdk-generator",
    description="Client SDK for rawg.io",
    long_description=long_description,
    long_description_content_type="text/markdown",
    packages=setuptools.find_packages(where="src"),
    install_requires=[
        "certifi==2022.6.15",
        "charset-normalizer==2.1.1",
        "dataclasses-json==0.5.7",
        "idna==3.3",
        "marshmallow==3.17.1",
        "marshmallow-enum==1.5.1",
        "mypy-extensions==0.4.3",
        "packaging==21.3",
        "pyparsing==3.0.9",
        "python-dateutil==2.8.2",
        "requests==2.28.1",
        "six==1.16.0",
        "typing-inspect==0.8.0",
        "typing_extensions==4.3.0",
        "urllib3==1.26.12",
    ],
    package_dir={'': 'src'},
    python_requires='>=3.10'
)
