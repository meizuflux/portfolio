---
title: "Secure Password Hashing in Python"
layout: "../../layouts/Post.astro"
created: "2022 April 03 14:00:25"
modified: "2022 April 03 14:00:25"
description: "Learn how to securely hash passwords in Python"
---
The password hashing function to use is `argon2id`

Skip to the end to view the full code.

To get started in Python, create a virtual environment.
```bash
$ python -m venv venv
```
Activate the virtual environment in the current shell
```bash
# linux:
$ source ./venv/bin/activate
# windows
$ ./venv/scripts/activate
```
Install [`PyNaCl`](https://pynacl.readthedocs.io/en/latest/) which is a Python library that binds to `libsodium`
```bash
$ pip install pynacl
```
## The code
Import the `argon2id` class
```py
from nacl.pwhash import argon2id
```
Create the hash of the password
```py
password = "extremelysecretpassword".encode("utf-8") # password must be bytes, cannot be a string
hashed_password = argon2id.str(password) # returns bytes, good idea to store it in a bytes column in a database
```
Next, we take the hashed password and we verify it.
```py
is_valid = argon2id.verify(hashed_password, password)
```
Calling `verify` with improper credentials will raise `nacl.exceptions.InvalidkeyError`. You can use a `try/except` block to capture this and send an error back to your user.
Finally, we can then print the result.
```py
print(hashed_password)
print(is_valid)
```

## Full Code
```py
# main.py
from nacl.pwhash import argon2id

password = "extremelysecretpassword".encode("utf-8")
hashed_password = argon2id.str(password)

is_valid = argon2id.verify(hashed_password, password)

print(hashed_password)
print(is_valid)
```
Output:
```bash
$ python main.py
b'$argon2id$v=19$m=65536,t=2,p=1$ZO95lrqT5s2O5RsBbjxQ5Q$7HnKtHJF1PmfKQpp2eBk8gSW0krdhmA976aka73mU5k'
True
```
## Links
PyNaCl argon2id documentation: https://pynacl.readthedocs.io/en/latest/api/pwhash/#module-nacl.pwhash.argon2id


