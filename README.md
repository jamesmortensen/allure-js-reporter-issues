There are two bug reports in this reporduceable example:

### Failing tests run in mocha parallel mode are reported in "yellow" instead of "red"

Steps:

First, run the tests in sequential mode:

1. Run `npx mocha test-without-hooks.js`

2. Run `npm run open-reports` or `npx allure-generate clean && npx allure open`

Observe the following _correct_ results in the report:
- One test passes (in green)
- One test is broken (in yellow) due to a thrown Error.
- One test is failed (in red) due to an AssertionError thrown by Chai expect.

![](https://github.com/jamesmortensen/allure-js-reporter-issues/blob/master/screenshots/sequential-mode-report.png)

Next, run the same test in parallel mode:

1. Run `npx mocha -p test-without-hooks.js`

2. Run `npm run open-reports` or `npx allure-generate clean && npx allure open`

Observe the following results in the report:
- One test passes (in green)
- One test is broken (in yellow) due to a thrown Error.
- One test is failed, due to an AssertionError thrown by Chai expect. _However, it appears incorrectly_ **in yellow**.

![](https://github.com/jamesmortensen/allure-js-reporter-issues/blob/master/screenshots/parallel-mode-report.png)

### When run in parallel mode with hooks, hook.error() is not a function

Steps:

1. Run `npx mocha -p test-with-hooks.js`

2. Run `npm run open-reports` or `npx allure-generate clean && npx allure open`

There is a failure reported outside the test suite:

```
1) Uncaught error outside test suite:
     Uncaught TypeError: hook.error is not a function
      at MochaAllureReporter.onHookEnd (node_modules/allure-mocha/dist/MochaAllureReporter.js:72:40)
      at ParallelBufferedRunner.emit (node:events:539:35)
      at processTicksAndRejections (node:internal/process/task_queues:96:5)
```
