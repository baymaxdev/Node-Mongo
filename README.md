# Arturo API


## Some development notes

### JavaScript Style
- There is a precommit hook via _husky_ that will lint and test your code every time you commit
- The style rules are based on airbnb's style guide: (https://github.com/airbnb/javascript)
- Some notable features of the ruleset:
  - No semicolons
  - ES6 scoping and arrow functions are required
- Try to use functional programming when possible
- Use dependency injection when possible to make testing easier

### Testing
- Jest is the test runner that we are using
- Add a test for every new
- Integration tests are in `/tests` and should be named by what they test followed by `.test.js`
- Unit tests should be placed in a `__test__` folder at the same level as the file the test references and they should be named the same as the target file, appended with `test.js`
- Mocks for models should be in a `__mock__` folder with the same name as the model
  - Jest will automatically use the mocks in the `__mock__` folder
