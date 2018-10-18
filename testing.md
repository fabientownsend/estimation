# The Art of Testing

- Why testing, what to expect from them?
- What kind of test do you konw, which one are you familiar with?
- What are their cost and value?


## The Cost of Testing

5 way to estimate the cost of a test

- Scope
- Complexity
- Speed
- Cycle
- Usefuleness


### The scope

The scope of your test determines how much of your system is convered. Does it
involve only a small function, some classes or a different system and database.
The most popular tests related to their scope are the:

- Unit Tests
- Integration Tests
- End to End tests, also called e2e
- Observability


### Complexity / Type

The complexity of a test can be caused by its scope, for example writing
and maintaining a unit test is way easier than a e2e test. The complexity  can 
also be determined by the type of test: a manual test is easier to execute than
an e2e test. The domain can also have an impact on the complexity. For example,
IoT could be more tricky than a web application.


### Speed

How fast are your tests running? Manual vs automated tests: it's where you can feel
the difference between the time you spend to manually test a function or running
an e2e test. Between your unit test, integration test, QA test, etc. How long does
it take you to feel ready to deploy and release in production? How long does
it take you to realise that your feature doesn't work, either locally or in
production?


### Cycle

How often do you need to run your tests? Having automated tests that run at the
speed of light is awesome when it's something that requires to be tested
everytime that you commit your code. But, does it need to be automated if you
only need it once? Do you need to run these tests that often if they aren't that
useful? Is it worth the time?


### Usefuleness

How useful is the test? Based on the Parito Principle, we could say that 20% of 
the users use 80% of the product. Based on that, testing your software the same
way everywhere may not make sense nor does putting the same amount of effort 
into all your tests.


```
Scope <> Complexity <> Speed
Cycle <> Scope <> Speed
Usefulness <> Cycle <> Scope
```
