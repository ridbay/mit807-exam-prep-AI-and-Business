# MIT807 Exam Study Packet

## Sources Covered

- MIT807 Lecture 1 & 2: Foundations of AI, history, uninformed search, business applications
- MIT807 Lecture 3: Informed search
- MIT807 Lecture 4: Introduction to machine learning
- MIT807 NLP
- MIT807 Artificial Intelligence and Games
- MIT807 Genetic Algorithm tutorial
- MIT807 Group Project brief
- Supporting background texts: _Artificial Intelligence: A Systems Approach_ and _Artificial Intelligence: A Modern Approach_

---

# 1) Combined Overview

## Big-picture map of the course

- **Artificial Intelligence (AI)** is the field of building systems that can perceive, reason, learn, decide, and act intelligently.
- The course moves from:
  1. **What AI is**
  2. **How AI searches for solutions**
  3. **How AI learns from data**
  4. **How AI processes language**
  5. **How AI acts in games**
  6. **How AI solves optimization problems using genetic algorithms**
  7. **How AI applies to business**
- A recurring exam theme is the contrast between:
  - **uninformed vs informed search**
  - **classical symbolic AI vs data-driven ML**
  - **traditional NLP vs deep learning NLP**
  - **exact search vs heuristic/local search**
  - **game-tree search vs single-agent search**
  - **optimization by search vs optimization by evolution**

## Most testable ideas across all documents

- Definitions of AI and intelligent agents
- Types/subfields of AI
- Uninformed search: BFS, DFS, DLS, IDS, UCS
- Informed search: best-first, greedy ideas, A\*
- Heuristics and the meaning of `g(n)`, `h(n)`, `f(n)`
- Hill climbing, simulated annealing, tabu search
- Constraint satisfaction problems (CSPs)
- Machine learning types: supervised, unsupervised, reinforcement learning
- Overfitting vs underfitting
- Evaluation concepts and common ML applications
- NLP pipeline: tokenization, stemming, lemmatization, POS tagging, NER, parsing
- Word embeddings, RNNs, Transformers, PLMs
- Game AI: minimax, alpha-beta pruning, pathfinding, FSMs, behavior trees
- Genetic algorithms: population, fitness, selection, crossover, mutation, replacement, termination
- Business applications and AI ethics/governance
- Project requirements: search implementation + business AI software/report

---

# 2) Concise Summary by Topic

## A. Foundations of AI / Lecture 1 & 2

### Core ideas

- AI is about designing systems that show capabilities associated with intelligence:
  - perception
  - reasoning
  - learning
  - problem solving
  - decision making
- AI can be viewed from different perspectives:
  - acting humanly
  - thinking humanly
  - thinking rationally
  - acting rationally
- The **rational agent** view is especially important: an intelligent system chooses actions that best achieve its goals.

### Main subfields

- Search and problem solving
- Knowledge representation and reasoning
- Machine learning
- Natural language processing
- Computer vision
- Robotics
- Expert systems
- Multi-agent systems

### AI in business

- Process automation
- Forecasting and prediction
- Recommendation systems
- Customer support/chatbots
- Fraud detection
- Medical support
- Decision support systems
- Optimization of operations, logistics, pricing, and marketing

### Uninformed search

- Uses no domain knowledge about where the goal is
- Main methods:
  - **DFS**
  - **DLS**
  - **IDS**
  - **BFS**
  - **UCS**
- These algorithms differ mainly by:
  - data structure used
  - completeness
  - optimality
  - time/space cost

### Exam trap

- Do not confuse **BFS** with **UCS**:
  - BFS expands shallowest depth first
  - UCS expands lowest path-cost first

---

## B. Informed Search / Lecture 3

### Core idea

- Informed search uses **heuristics** to estimate which path looks promising.

### Key formula

- `f(n) = g(n) + h(n)`
  - `g(n)` = actual cost so far
  - `h(n)` = estimated cost from current node to goal
  - `f(n)` = estimated total solution cost

### Main algorithms

- Best-first search
- Greedy best-first search
- A\* search
- Hill climbing
- Simulated annealing
- Tabu search
- CSP methods

### Why informed search matters

- It reduces wasted exploration
- It often finds solutions faster than blind search
- Good heuristics can dramatically improve performance

### Exam trap

- A heuristic is an **estimate**, not a guaranteed true remaining cost.
- A\* is only guaranteed optimal under appropriate heuristic conditions.

---

## C. Machine Learning / Lecture 4

### Core definition

- ML is a subset of AI in which systems learn patterns from data and improve performance without being explicitly programmed for every rule.

### ML hierarchy

- AI ⊃ ML ⊃ Deep Learning ⊃ Generative AI

### Main ML types

- **Supervised learning**
  - labeled data
  - tasks: classification and regression
- **Unsupervised learning**
  - unlabeled data
  - tasks: clustering, association, anomaly detection, dimensionality reduction
- **Reinforcement learning**
  - agent learns through interaction, rewards, and penalties

### ML workflow

1. Collect data
2. Clean/preprocess data
3. Split into train/test (and often validation)
4. Choose model
5. Train model
6. Evaluate model
7. Tune/improve
8. Deploy and monitor

### Major challenges

- Data quality/quantity
- Overfitting
- Underfitting
- Bias/fairness
- Interpretability
- Generalization

---

## D. NLP

### Core definition

- NLP is the AI field that enables computers to understand, interpret, and generate human language.

### Why NLP is important

- Most knowledge is in text/speech
- It automates language tasks
- It supports translation, search, summarization, sentiment analysis, chatbots, and assistants

### Why NLP is hard

- Ambiguity:
  - lexical ambiguity
  - syntactic ambiguity
  - semantic ambiguity
  - pragmatic/contextual ambiguity

### Key techniques

- Tokenization
- Stemming
- Lemmatization
- POS tagging
- Named Entity Recognition (NER)
- Parsing

### Representation and modeling

- Bag of Words
- TF-IDF
- Word embeddings
- RNNs
- Transformers
- Pretrained language models (e.g., BERT-style fine-tuning)

### Common applications

- Chatbots
- Translation
- Search
- Sentiment analysis
- Information extraction

### Main challenges

- Bias
- Explainability
- Context
- Data/resource limitations
- Language variation

---

## E. AI in Games

### Main purpose

- Create believable, adaptive, interesting gameplay.

### Key methods

- Pathfinding AI
- Finite State Machines (FSMs)
- Behavior Trees
- Rule-based AI
- Minimax
- Alpha-beta pruning
- Player Experience Modelling
- Procedural generation

### Important idea

- In games, the goal is often **not** to create an unbeatable AI.
- The goal is usually to create:
  - challenge
  - realism
  - fun
  - adaptation to player skill

### Classical game AI

- Chess, Checkers, Othello: often use minimax + evaluation + alpha-beta
- Go historically required different approaches because of huge branching factor

---

## F. Genetic Algorithms

### Core idea

- A GA is a population-based optimization technique inspired by biological evolution.

### Key pieces

- Population
- Chromosome/solution representation
- Fitness function
- Selection
- Crossover
- Mutation
- Replacement strategy
- Termination criterion

### Intuition

- Better solutions are more likely to reproduce.
- Recombination and mutation explore the search space.
- Over generations, the population tends to improve.

### Important theory words

- Schema
- Schema theorem
- Building block hypothesis
- Premature convergence
- Diversity

### Applications

- Scheduling
- Routing
- Robotics
- Forecasting
- Pattern recognition
- Resource allocation
- Game playing
- Design optimization

---

## G. Group Project Brief

### Required software components

- Build AI GUI software in Python
- Include implementation of **two uninformed search algorithms**
  - one from DFS / DLS / IDS
  - one from BFS / UCS
- Add visualization showing traversal of an N-node graph/tree
- Also solve a real-life business problem with an approved AI method

### Possible approved methods for business project

- A\*
- Branch and Bound
- Hill Climbing
- Tabu Search
- Simulated Annealing
- Minimax with alpha-beta pruning
- Genetic algorithms and other evolution methods
- Neural networks
- Deep learning
- Decision trees / random forest / linear regression
- Reinforcement learning

---

# 3) Exam-Focused Study Guide

## Topic 1: What is AI really?

### Simple explanation

AI is the attempt to build systems that can do tasks that normally require intelligence. That can include reasoning, learning, understanding language, planning, recognizing patterns, or making decisions.

### What examiners like to ask

- Define AI
- Give examples of AI subfields
- Explain the rational-agent idea
- Distinguish AI, ML, DL, and Generative AI

### Common trap

- Saying ML = AI.
- Better:
  - AI is the broader field
  - ML is one subfield of AI
  - DL is one subfield of ML

---

## Topic 2: Uninformed Search

### The big picture

Uninformed search explores without knowing which direction is better.

### BFS

- Expands shallowest node first
- Uses a queue
- Complete (with finite branching)
- Optimal for equal step costs
- Memory-heavy

### DFS

- Expands deepest node first
- Uses a stack or recursion
- Low memory
- Can get stuck deep
- Not optimal
- Not complete in infinite-depth spaces

### DLS

- DFS with depth limit
- Prevents going too deep
- Can miss solution if limit too small

### IDS

- Repeats DLS with increasing depth
- Combines DFS memory advantage with BFS completeness
- Good when solution depth is unknown

### UCS

- Expands node with lowest path cost
- Uses priority queue
- Complete for positive step costs
- Optimal for variable path costs

### Step-by-step comparison method for exam answers

When asked to compare algorithms:

1. State node-selection rule
2. State data structure
3. State completeness
4. State optimality
5. State major strength
6. State major weakness

### Common traps

- BFS is not always cheapest if costs differ
- UCS is not based on depth
- IDS repeats work, but still often useful
- DFS uses less memory, but may be poor for shortest-path problems

---

## Topic 3: Heuristics and Informed Search

### What is a heuristic?

A heuristic is a rule of thumb that estimates how close a state is to the goal.

### Why heuristics matter

Without a heuristic, search can waste time on irrelevant branches.
With a good heuristic, search focuses on promising paths.

### A\*

- One of the most testable algorithms
- Uses:
  - `g(n)` actual path cost so far
  - `h(n)` estimated remaining cost
  - `f(n) = g(n) + h(n)`
- Choose node with lowest `f(n)`

### Why A\* works well

It balances:

- cost already paid
- estimated cost still remaining

### Greedy best-first vs A\*

- Greedy best-first mainly chases small `h(n)`
- A\* uses both `g(n)` and `h(n)`
- Therefore A\* is usually more reliable for optimal solutions

### Common traps

- A\* does **not** use only `h(n)`
- A heuristic that is too optimistic/poorly designed can change behavior
- In exams, remember the interpretation of each term in the formula

---

## Topic 4: Hill Climbing, Simulated Annealing, Tabu Search

### Hill climbing

- Start with a current solution
- Move to a better neighboring solution
- Repeat until no improvement

#### Strength

- Simple and fast

#### Weakness

- Gets stuck in:
  - local maxima
  - ridges
  - plateaus

### Simulated annealing

- Similar to hill climbing, but sometimes accepts worse moves
- This helps escape local optima
- Early in search: more willing to take bad moves
- Later in search: becomes more conservative

### Tabu search

- Uses memory
- Keeps a tabu list of recently visited moves/states
- Prevents cycling and encourages exploration

### Typical exam comparison

- Hill climbing: greedy, no memory
- Simulated annealing: probabilistic escape from local optima
- Tabu search: memory-based escape from cycles/local traps

---

## Topic 5: Constraint Satisfaction Problems (CSPs)

### Core idea

A CSP asks for values for variables such that all constraints are satisfied.

### Components

- Variables
- Domains
- Constraints

### Examples

- Scheduling
- Map coloring
- Sudoku
- N-Queens

### Solution methods

- Backtracking
- Constraint propagation / forward checking
- Heuristics
- Min-conflicts

### Common trap

Do not describe a CSP as ordinary path search.
CSPs are mainly about assignment consistency, not necessarily path finding.

---

## Topic 6: Machine Learning Types

### Supervised learning

- Data has input-output pairs
- Learns mapping from inputs to known outputs

#### Classification

Predict category/class

- spam vs not spam
- fraud vs non-fraud

#### Regression

Predict numeric value

- sales
- price
- demand

### Unsupervised learning

- No labels
- Find hidden structure
- Examples:
  - clustering
  - PCA
  - anomaly detection
  - association rules

### Reinforcement learning

- Agent interacts with environment
- Receives rewards or penalties
- Learns policy that maximizes long-term reward

### Common trap

- PCA is unsupervised
- Classification is supervised
- RL is not the same as supervised learning

---

## Topic 7: Overfitting and Underfitting

### Overfitting

- Model learns training data too specifically
- Poor performance on new data
- High variance idea

### Underfitting

- Model is too simple
- Fails even on training data
- High bias idea

### How to reduce overfitting

- More data
- Simpler model
- Regularization
- Validation
- Early stopping
- Better feature selection

### Exam trap

Do not say “high training accuracy means the model is good.”
A model can fit training data well and still generalize badly.

---

## Topic 8: NLP Pipeline

### Typical flow

1. Raw text input
2. Tokenization
3. Cleaning/normalization
4. Stemming or lemmatization
5. POS tagging
6. NER / parsing / feature extraction
7. Modeling/classification/generation

### Distinctions to know

- **Tokenization**: split text into units
- **Stemming**: crude chopping to root-like form
- **Lemmatization**: convert to dictionary base form using linguistic knowledge
- **POS tagging**: assign grammatical categories
- **NER**: identify names of people, places, organizations, dates, etc.
- **Parsing**: analyze grammatical structure

### Common trap

- Lemmatization is usually more linguistically accurate than stemming
- NER is not the same as POS tagging

---

## Topic 9: Embeddings, RNNs, Transformers, PLMs

### Word embeddings

Represent words as dense vectors so that similar words have similar positions in vector space.

### RNNs

Process sequence data step by step.
Useful historically for language, but can struggle with long-range dependencies.

### Transformers

Use attention mechanisms.
Handle long-range relationships better and support massive parallel training.

### PLMs

Pretrained language models learn from large unlabeled corpora, then get fine-tuned for specific tasks.

### Common trap

- Transformers are not the same as simple bag-of-words models
- Pretraining ≠ final task performance; fine-tuning is usually needed

---

## Topic 10: Game AI

### Minimax

Used in two-player zero-sum games.
Assumes opponent plays optimally.

### Basic idea

- MAX tries to maximize utility
- MIN tries to minimize utility
- Search the game tree
- Choose action with best worst-case outcome

### Alpha-beta pruning

Avoids exploring branches that cannot affect final decision.

### Why it matters

- Same result as minimax
- Less search work
- Allows deeper game-tree exploration

### Other game AI techniques

- Pathfinding for movement/navigation
- FSMs for discrete NPC behaviors
- Behavior trees for modular decision logic
- Player modeling for adaptation and personalization

### Common trap

Alpha-beta pruning speeds up minimax, but does not change the correct minimax decision.

---

## Topic 11: Genetic Algorithms

### Step-by-step process

1. Initialize population
2. Evaluate fitness
3. Select parents
4. Apply crossover
5. Apply mutation
6. Form next generation
7. Repeat until stopping condition

### Selection methods

- Roulette wheel / fitness proportional
- Elitist selection

### Genetic operators

- Crossover: combine parent material
- Mutation: random change
- Inversion: reverse a segment (depending on representation/model)

### Replacement strategies

- Generational
- Steady-state

### Termination criteria

- enough generations
- good enough solution
- no further improvement

### Common traps

- Mutation is usually low probability, not the main operator
- Fitness is problem-specific
- Premature convergence happens when diversity collapses too early

---

## Topic 12: AI Ethics, Governance, and Business Use

### Key concerns

- Bias and fairness
- Transparency
- Explainability
- Privacy
- Accountability
- Misuse
- Safety

### Business angle

A technically strong AI model is not enough.
It must also be:

- useful
- lawful
- fair
- reliable
- interpretable enough for decisions
- aligned with stakeholder goals

### Common trap

Do not present AI in business as purely technical.
Examiners often want both:

- technical mechanism
- practical/ethical implication

---

# 4) Flashcards (75)

## Foundations

1. **Q:** What is Artificial Intelligence?  
   **A:** The field of building systems that can perceive, reason, learn, solve problems, and act intelligently.

2. **Q:** What is a rational agent?  
   **A:** An entity that chooses actions that best achieve its goals based on what it knows.

3. **Q:** Name four broad perspectives on AI.  
   **A:** Acting humanly, thinking humanly, thinking rationally, acting rationally.

4. **Q:** Give three AI subfields.  
   **A:** Search, machine learning, natural language processing.

5. **Q:** How is ML related to AI?  
   **A:** ML is a subset of AI.

6. **Q:** How is deep learning related to ML?  
   **A:** Deep learning is a subset of machine learning.

7. **Q:** What does Generative AI mainly do?  
   **A:** It generates new content such as text, images, audio, or code.

8. **Q:** Why is AI valuable in business?  
   **A:** It supports automation, prediction, optimization, and decision-making.

9. **Q:** Give one business use of AI in customer service.  
   **A:** Chatbots or automated support assistants.

10. **Q:** Give one business use of AI in finance.  
    **A:** Fraud detection.

## Uninformed Search

11. **Q:** What is uninformed search?  
    **A:** Search that uses no domain-specific heuristic information.

12. **Q:** Which data structure does BFS use?  
    **A:** A queue.

13. **Q:** Which data structure does DFS use?  
    **A:** A stack or recursion.

14. **Q:** Which algorithm expands the shallowest node first?  
    **A:** BFS.

15. **Q:** Which algorithm expands the deepest node first?  
    **A:** DFS.

16. **Q:** Which algorithm adds a depth cutoff to DFS?  
    **A:** DLS.

17. **Q:** Which algorithm repeatedly performs DLS with increasing limits?  
    **A:** IDS.

18. **Q:** Which uninformed search expands the lowest path-cost node?  
    **A:** UCS.

19. **Q:** When is BFS optimal?  
    **A:** When all step costs are equal.

20. **Q:** Is DFS optimal?  
    **A:** No.

21. **Q:** What is a major weakness of BFS?  
    **A:** High memory usage.

22. **Q:** What is a major weakness of DFS?  
    **A:** It can go deep into poor branches and miss shallow solutions.

23. **Q:** Why is IDS attractive?  
    **A:** It combines low memory use with completeness.

24. **Q:** What does UCS optimize?  
    **A:** Total path cost.

25. **Q:** Why is BFS not the same as UCS?  
    **A:** BFS uses depth, while UCS uses cumulative path cost.

## Informed Search

26. **Q:** What is a heuristic?  
    **A:** An estimate or rule of thumb that guides search toward promising states.

27. **Q:** What does `g(n)` mean in A\*?  
    **A:** Actual cost from the start node to node `n`.

28. **Q:** What does `h(n)` mean in A\*?  
    **A:** Estimated cost from node `n` to a goal.

29. **Q:** What does `f(n)` mean in A\*?  
    **A:** Estimated total cost of a solution path through `n`.

30. **Q:** Write the A\* evaluation formula.  
    **A:** `f(n) = g(n) + h(n)`.

31. **Q:** What is the main benefit of informed search?  
    **A:** Greater efficiency than blind search.

32. **Q:** What does hill climbing do?  
    **A:** It repeatedly moves to a better neighboring state.

33. **Q:** Name one problem with hill climbing.  
    **A:** Local maxima.

34. **Q:** Why does simulated annealing sometimes accept worse moves?  
    **A:** To escape local optima.

35. **Q:** What is the role of the tabu list in tabu search?  
    **A:** It stores recently visited states/moves to prevent cycling.

36. **Q:** What is a CSP?  
    **A:** A problem of assigning values to variables while satisfying constraints.

37. **Q:** Name the three main CSP components.  
    **A:** Variables, domains, constraints.

38. **Q:** Give one CSP example.  
    **A:** Scheduling or map coloring.

39. **Q:** What is backtracking in CSPs?  
    **A:** Systematically trying assignments and undoing invalid ones.

40. **Q:** What is forward checking?  
    **A:** A CSP technique that removes inconsistent future values early.

## Machine Learning

41. **Q:** What is supervised learning?  
    **A:** Learning from labeled examples.

42. **Q:** What is classification?  
    **A:** Predicting a category label.

43. **Q:** What is regression?  
    **A:** Predicting a numeric value.

44. **Q:** What is unsupervised learning?  
    **A:** Learning patterns from unlabeled data.

45. **Q:** What is clustering?  
    **A:** Grouping similar data points.

46. **Q:** What is anomaly detection?  
    **A:** Finding unusual or rare patterns.

47. **Q:** What is dimensionality reduction?  
    **A:** Reducing the number of variables while retaining useful structure.

48. **Q:** What is PCA used for?  
    **A:** Dimensionality reduction and pattern visualization.

49. **Q:** What is reinforcement learning?  
    **A:** Learning via actions, rewards, and penalties.

50. **Q:** What is overfitting?  
    **A:** Learning the training data too specifically, harming generalization.

51. **Q:** What is underfitting?  
    **A:** A model being too simple to learn the pattern well.

52. **Q:** Why is model interpretability important?  
    **A:** It helps explain and trust decisions.

53. **Q:** Why is data quality important in ML?  
    **A:** Poor data leads to poor models.

54. **Q:** Give one challenge of ML and DL.  
    **A:** Bias, overfitting, poor interpretability, or insufficient data.

55. **Q:** What is predictive analytics?  
    **A:** Using historical data to forecast future outcomes.

## NLP

56. **Q:** What is NLP?  
    **A:** AI for understanding, interpreting, and generating human language.

57. **Q:** Why is NLP hard?  
    **A:** Human language is ambiguous and context-dependent.

58. **Q:** What is tokenization?  
    **A:** Splitting text into units such as words or subwords.

59. **Q:** What is stemming?  
    **A:** Reducing words to crude root-like forms.

60. **Q:** What is lemmatization?  
    **A:** Converting words to proper dictionary base forms.

61. **Q:** What is POS tagging?  
    **A:** Assigning grammatical categories like noun or verb.

62. **Q:** What is NER?  
    **A:** Identifying entities like names, places, or organizations.

63. **Q:** What is parsing?  
    **A:** Analyzing grammatical structure.

64. **Q:** What are word embeddings?  
    **A:** Dense vector representations of words.

65. **Q:** What is a Transformer?  
    **A:** A deep learning architecture based heavily on attention mechanisms.

66. **Q:** What is a PLM?  
    **A:** A pretrained language model.

67. **Q:** What is fine-tuning?  
    **A:** Adapting a pretrained model to a specific task.

68. **Q:** Give one NLP application.  
    **A:** Chatbots, translation, search, or sentiment analysis.

## Games and GA

69. **Q:** What is minimax used for?  
    **A:** Choosing moves in adversarial two-player games.

70. **Q:** What does alpha-beta pruning do?  
    **A:** Prunes branches that cannot affect the final minimax decision.

71. **Q:** What is an FSM in games?  
    **A:** A finite state machine controlling NPC behavior by states and transitions.

72. **Q:** What is a behavior tree?  
    **A:** A structured decision model for complex NPC behavior.

73. **Q:** What is pathfinding AI?  
    **A:** AI that finds routes through an environment while avoiding obstacles.

74. **Q:** What is the fitness function in GA?  
    **A:** A function that measures solution quality.

75. **Q:** Name four GA components.  
    **A:** Population, selection, crossover, mutation.

---

# 5) Practice Quiz

## A. 100 Multiple-Choice Questions

1. **Which best defines AI?**  
   A. Only robotics  
   B. Building systems that perform intelligent tasks  
   C. Only machine learning  
   D. Only expert systems  
   **Answer:** B  
   **Explanation:** AI is broader than robotics, ML, or expert systems.

2. **Which is a subset of AI?**  
   A. Machine learning  
   B. Operating systems  
   C. Networking  
   D. Compilers  
   **Answer:** A  
   **Explanation:** ML is one major subfield of AI.

3. **A rational agent chooses actions that:**  
   A. Look human  
   B. Are random  
   C. Best achieve its goals  
   D. Are always emotional  
   **Answer:** C  
   **Explanation:** Rationality is about selecting the best action given goals and knowledge.

4. **Which search method uses a queue?**  
   A. DFS  
   B. BFS  
   C. DLS  
   D. Hill climbing  
   **Answer:** B  
   **Explanation:** BFS uses FIFO ordering.

5. **Which search method uses a stack?**  
   A. DFS  
   B. BFS  
   C. UCS  
   D. A\*  
   **Answer:** A  
   **Explanation:** DFS uses LIFO behavior.

6. **Which search expands the node with lowest path cost?**  
   A. BFS  
   B. DFS  
   C. UCS  
   D. DLS  
   **Answer:** C  
   **Explanation:** UCS is cost-based.

7. **Which algorithm repeatedly increases the depth limit?**  
   A. BFS  
   B. UCS  
   C. IDS  
   D. A\*  
   **Answer:** C  
   **Explanation:** IDS performs iterative deepening.

8. **Which search is generally memory intensive?**  
   A. DFS  
   B. BFS  
   C. DLS  
   D. Hill climbing  
   **Answer:** B  
   **Explanation:** BFS stores many frontier nodes.

9. **Which is NOT an uninformed search?**  
   A. BFS  
   B. DFS  
   C. A*  
   D. UCS  
   **Answer:** C  
   **Explanation:** A* is informed search.

10. **In A\*, `h(n)` represents:**  
    A. Exact cost so far  
    B. Estimated cost to goal  
    C. Number of children  
    D. Depth of node  
    **Answer:** B  
    **Explanation:** `h(n)` is the heuristic estimate.

11. **In A\*, `g(n)` represents:**  
    A. Heuristic estimate  
    B. Path cost so far  
    C. Number of goals  
    D. Branching factor  
    **Answer:** B  
    **Explanation:** `g(n)` is accumulated cost from start.

12. **The A\* formula is:**  
    A. `f(n)=h(n)-g(n)`  
    B. `f(n)=g(n)+h(n)`  
    C. `f(n)=g(n)*h(n)`  
    D. `f(n)=g(n)/h(n)`  
    **Answer:** B  
    **Explanation:** This is the standard evaluation function.

13. **A heuristic is best described as:**  
    A. A proof  
    B. A rule of thumb  
    C. A database  
    D. An exact algorithm  
    **Answer:** B  
    **Explanation:** Heuristics guide search using estimates.

14. **Hill climbing is vulnerable to:**  
    A. Local maxima  
    B. Lexical ambiguity  
    C. Supervised labels  
    D. Parsing errors  
    **Answer:** A  
    **Explanation:** It can get stuck at local optima.

15. **Simulated annealing helps by:**  
    A. Eliminating all bad moves  
    B. Always picking the best neighbor  
    C. Sometimes accepting worse moves  
    D. Replacing heuristics  
    **Answer:** C  
    **Explanation:** This allows escape from local optima.

16. **Tabu search uses memory in the form of a:**  
    A. Grammar  
    B. Tabu list  
    C. Parse tree  
    D. Weight vector  
    **Answer:** B  
    **Explanation:** The tabu list prevents cycling.

17. **A CSP is defined by variables, domains, and:**  
    A. Rewards  
    B. Constraints  
    C. Images  
    D. Tokens  
    **Answer:** B  
    **Explanation:** Those are the essential components.

18. **Which is a CSP example?**  
    A. Sorting a list  
    B. Map coloring  
    C. Video encoding  
    D. Matrix multiplication  
    **Answer:** B  
    **Explanation:** Map coloring is a classic CSP.

19. **Machine learning is a subset of:**  
    A. Networking  
    B. Databases  
    C. AI  
    D. Graphics  
    **Answer:** C  
    **Explanation:** ML is inside AI.

20. **Supervised learning requires:**  
    A. Unlabeled data  
    B. Labeled data  
    C. No data  
    D. Only rewards  
    **Answer:** B  
    **Explanation:** Supervised learning learns from input-output pairs.

21. **Classification predicts:**  
    A. A category  
    B. A sentence structure  
    C. A chromosome  
    D. A queue size  
    **Answer:** A  
    **Explanation:** Classification outputs classes.

22. **Regression predicts:**  
    A. A part of speech  
    B. A numeric value  
    C. A game state only  
    D. A grammar rule only  
    **Answer:** B  
    **Explanation:** Regression outputs continuous/numeric values.

23. **Clustering is an example of:**  
    A. Supervised learning  
    B. Unsupervised learning  
    C. Reinforcement learning  
    D. Search pruning  
    **Answer:** B  
    **Explanation:** Clustering finds structure without labels.

24. **PCA is mainly used for:**  
    A. Pathfinding  
    B. Parsing  
    C. Dimensionality reduction  
    D. Alpha-beta pruning  
    **Answer:** C  
    **Explanation:** PCA reduces features while preserving variance.

25. **Reinforcement learning uses:**  
    A. Labels only  
    B. Rewards and penalties  
    C. Only parse trees  
    D. No interaction  
    **Answer:** B  
    **Explanation:** RL learns from feedback during interaction.

26. **Overfitting means:**  
    A. Model too simple  
    B. Model generalizes perfectly  
    C. Model memorizes training data too much  
    D. Model uses no data  
    **Answer:** C  
    **Explanation:** Overfitting hurts test/generalization performance.

27. **Underfitting means:**  
    A. Model too simple to learn pattern well  
    B. Model too complex  
    C. Model has too much data  
    D. Model uses cross-validation  
    **Answer:** A  
    **Explanation:** It performs poorly even on training data.

28. **Which is a challenge in ML?**  
    A. Data quality  
    B. Overfitting  
    C. Interpretability  
    D. All of the above  
    **Answer:** D  
    **Explanation:** All are common ML challenges.

29. **NLP stands for:**  
    A. Neural Logic Programming  
    B. Natural Language Processing  
    C. Numeric Language Parsing  
    D. Nested Learning Process  
    **Answer:** B  
    **Explanation:** NLP is AI for human language.

30. **Tokenization is:**  
    A. Splitting text into units  
    B. Assigning entity labels  
    C. Choosing a game move  
    D. Replacing training data  
    **Answer:** A  
    **Explanation:** It breaks text into tokens.

31. **Stemming is best described as:**  
    A. Grammar parsing  
    B. Crude root-word reduction  
    C. Entity recognition  
    D. Search pruning  
    **Answer:** B  
    **Explanation:** It often chops words to root-like forms.

32. **Lemmatization usually produces:**  
    A. Random tokens  
    B. Dictionary base forms  
    C. Game states  
    D. Reward values  
    **Answer:** B  
    **Explanation:** Lemmatization uses linguistic knowledge.

33. **POS tagging assigns:**  
    A. Fitness scores  
    B. Parts of speech  
    C. Rewards  
    D. Heuristic values  
    **Answer:** B  
    **Explanation:** It labels grammatical categories.

34. **NER identifies:**  
    A. Unknown tokens only  
    B. Named entities such as people and places  
    C. Depth limits  
    D. Crossover points  
    **Answer:** B  
    **Explanation:** NER extracts real-world entities.

35. **Parsing analyzes:**  
    A. Grammatical structure  
    B. Population diversity  
    C. Reward curves  
    D. Cluster centers only  
    **Answer:** A  
    **Explanation:** Parsing studies sentence structure.

36. **Which is a major source of NLP difficulty?**  
    A. Ambiguity  
    B. Perfect regularity  
    C. Determinism only  
    D. Lack of words  
    **Answer:** A  
    **Explanation:** Ambiguity appears at many levels.

37. **Word embeddings represent words as:**  
    A. Queues  
    B. Trees only  
    C. Dense vectors  
    D. Game boards only  
    **Answer:** C  
    **Explanation:** Embeddings are vector-based representations.

38. **RNNs are especially associated with:**  
    A. Sequence modeling  
    B. Graph coloring only  
    C. Static sort operations  
    D. Queue management  
    **Answer:** A  
    **Explanation:** RNNs process sequences step by step.

39. **Transformers rely heavily on:**  
    A. Mutation  
    B. Attention mechanisms  
    C. Depth limits  
    D. Stack-only search  
    **Answer:** B  
    **Explanation:** Attention is central to transformers.

40. **A pretrained language model is usually:**  
    A. Trained on large generic text first  
    B. Trained only on one tiny dataset  
    C. A search tree  
    D. A CSP solver  
    **Answer:** A  
    **Explanation:** Pretraining learns general language representations.

41. **Fine-tuning means:**  
    A. Deleting a model  
    B. Adapting a pretrained model to a specific task  
    C. Replacing text with numbers only  
    D. Turning search into sorting  
    **Answer:** B  
    **Explanation:** Fine-tuning specializes the model.

42. **Which is an NLP application?**  
    A. Sentiment analysis  
    B. Machine translation  
    C. Chatbots  
    D. All of the above  
    **Answer:** D  
    **Explanation:** All are standard NLP applications.

43. **Game AI often aims to maximize:**  
    A. Only mathematical elegance  
    B. Player entertainment and challenge  
    C. Only hardware cost  
    D. Only randomness  
    **Answer:** B  
    **Explanation:** Game AI is designed for good player experience.

44. **Minimax is used mainly in:**  
    A. Unsupervised clustering  
    B. Two-player adversarial games  
    C. Dimensionality reduction  
    D. Tokenization  
    **Answer:** B  
    **Explanation:** Minimax is for adversarial decision making.

45. **In minimax, MAX tries to:**  
    A. Minimize utility  
    B. Maximize utility  
    C. Remove tokens  
    D. Cluster points  
    **Answer:** B  
    **Explanation:** MAX selects the best achievable outcome.

46. **Alpha-beta pruning:**  
    A. Changes the minimax decision  
    B. Prunes irrelevant branches  
    C. Is used only in NLP  
    D. Requires no utility function  
    **Answer:** B  
    **Explanation:** It reduces search without changing the final minimax result.

47. **A finite state machine in games models:**  
    A. Population genetics  
    B. NPC state transitions  
    C. PCA projections  
    D. Token frequencies  
    **Answer:** B  
    **Explanation:** FSMs switch among states like patrol/chase/attack.

48. **Behavior trees are useful for:**  
    A. Structuring complex NPC behaviors  
    B. Replacing all search algorithms  
    C. Removing all heuristics  
    D. Tokenization  
    **Answer:** A  
    **Explanation:** They organize decision logic modularly.

49. **Pathfinding AI helps NPCs:**  
    A. Detect fraud  
    B. Navigate environments  
    C. Translate text  
    D. Label entities  
    **Answer:** B  
    **Explanation:** Pathfinding finds viable routes.

50. **A genetic algorithm is inspired by:**  
    A. Thermodynamics only  
    B. Biological evolution  
    C. Syntax trees only  
    D. Queues and stacks only  
    **Answer:** B  
    **Explanation:** GAs model selection and variation.

51. **A chromosome in GA represents:**  
    A. A potential solution  
    B. A grammar rule  
    C. A search tree depth  
    D. A training label only  
    **Answer:** A  
    **Explanation:** Candidate solutions are encoded as chromosomes.

52. **The fitness function measures:**  
    A. Search depth  
    B. Solution quality  
    C. Number of tokens  
    D. Queue size  
    **Answer:** B  
    **Explanation:** Fitness scores quality.

53. **Selection in GA decides:**  
    A. Which parents reproduce  
    B. Which tokens are nouns  
    C. Which edges exist  
    D. Which search is blind  
    **Answer:** A  
    **Explanation:** Selection chooses individuals to pass on genes.

54. **Roulette wheel selection is:**  
    A. Deterministic only  
    B. Fitness-proportional  
    C. Grammar-based  
    D. Search-based  
    **Answer:** B  
    **Explanation:** More fit individuals have higher probability.

55. **Elitist selection favors:**  
    A. Lowest-fitness members  
    B. Highest-fitness members  
    C. Random members only  
    D. Only mutated members  
    **Answer:** B  
    **Explanation:** The best individuals are preserved/selected.

56. **Crossover in GA does what?**  
    A. Deletes all parents  
    B. Combines parent genetic material  
    C. Calculates entropy  
    D. Parses sentences  
    **Answer:** B  
    **Explanation:** It recombines parents.

57. **Mutation in GA does what?**  
    A. Randomly changes part of a chromosome  
    B. Forces exact copying  
    C. Computes A\*  
    D. Labels data  
    **Answer:** A  
    **Explanation:** Mutation introduces variation.

58. **Premature convergence means:**  
    A. The population loses diversity too early  
    B. The algorithm always finds global optimum  
    C. Mutation is too high  
    D. The heuristic becomes exact  
    **Answer:** A  
    **Explanation:** The search gets trapped too early.

59. **A steady-state GA replaces:**  
    A. The whole population at once  
    B. One or a few individuals at a time  
    C. No individuals  
    D. Only the best parent  
    **Answer:** B  
    **Explanation:** Replacement is continuous or partial.

60. **A generational GA replaces:**  
    A. Only one child  
    B. The entire parent population with offspring  
    C. No members  
    D. Only the weakest chromosome  
    **Answer:** B  
    **Explanation:** Full generation replacement occurs.

61. **One termination criterion for GA is:**  
    A. Goal solution found  
    B. Time/generation limit reached  
    C. No further improvement  
    D. All of the above  
    **Answer:** D  
    **Explanation:** All are common stopping criteria.

62. **Which is a GA application?**  
    A. Scheduling  
    B. Routing  
    C. Forecasting  
    D. All of the above  
    **Answer:** D  
    **Explanation:** GAs are widely used in optimization.

63. **Which is an example of supervised learning?**  
    A. K-means clustering  
    B. Spam classification  
    C. PCA  
    D. Association rules  
    **Answer:** B  
    **Explanation:** Spam detection uses labeled examples.

64. **Which is an example of unsupervised learning?**  
    A. House-price prediction  
    B. Email spam detection  
    C. Customer clustering  
    D. Sentiment classification with labels  
    **Answer:** C  
    **Explanation:** Clustering uses unlabeled data.

65. **Which is an example of regression?**  
    A. Price prediction  
    B. POS tagging  
    C. NER  
    D. Minimax  
    **Answer:** A  
    **Explanation:** Regression predicts continuous values.

66. **Which is NOT a common NLP preprocessing step?**  
    A. Tokenization  
    B. Lemmatization  
    C. POS tagging  
    D. Alpha-beta pruning  
    **Answer:** D  
    **Explanation:** Alpha-beta is a game-tree search optimization.

67. **Which best distinguishes stemming from lemmatization?**  
    A. Stemming is more linguistically accurate  
    B. Lemmatization is more linguistically informed  
    C. They are identical  
    D. Neither changes words  
    **Answer:** B  
    **Explanation:** Lemmatization usually returns valid base forms.

68. **Which method is specifically designed for adversarial games?**  
    A. PCA  
    B. Minimax  
    C. Tokenization  
    D. K-means  
    **Answer:** B  
    **Explanation:** Minimax models opponent choices.

69. **Which search uses no heuristic knowledge?**  
    A. A\*  
    B. Greedy best-first  
    C. BFS  
    D. Tabu search  
    **Answer:** C  
    **Explanation:** BFS is uninformed.

70. **Which search algorithm uses a priority queue ordered by cost estimate?**  
    A. BFS  
    B. DFS  
    C. A*  
    D. DLS  
    **Answer:** C  
    **Explanation:** A* prioritizes lowest `f(n)`.

71. **Which search is more likely to find a shortest path under varying step costs?**  
    A. DFS  
    B. UCS  
    C. DLS  
    D. Hill climbing  
    **Answer:** B  
    **Explanation:** UCS is path-cost optimal under standard conditions.

72. **Which statement about alpha-beta pruning is correct?**  
    A. It makes minimax unnecessary  
    B. It gives a different answer from minimax  
    C. It reduces nodes explored  
    D. It only works in one-player games  
    **Answer:** C  
    **Explanation:** It keeps the decision but speeds search.

73. **Which is a common local-search problem in hill climbing?**  
    A. Parse ambiguity  
    B. Local maxima  
    C. Label noise only  
    D. Queue overflow only  
    **Answer:** B  
    **Explanation:** Hill climbing can get stuck there.

74. **In RL, the learner is usually called the:**  
    A. Corpus  
    B. Agent  
    C. Token  
    D. Parser  
    **Answer:** B  
    **Explanation:** The agent acts in an environment.

75. **Anomaly detection is useful for finding:**  
    A. Average trends only  
    B. Outliers  
    C. Grammar trees only  
    D. Search depth  
    **Answer:** B  
    **Explanation:** It finds unusual points or events.

76. **Bias in AI refers to:**  
    A. Guaranteed optimal search  
    B. Unfair or systematic skew in outcomes  
    C. A type of data structure  
    D. A tokenization strategy  
    **Answer:** B  
    **Explanation:** Bias is an ethical and technical concern.

77. **Interpretability means:**  
    A. A model can speak English  
    B. Humans can understand how/why the model decides  
    C. The model uses vectors  
    D. The model is always shallow  
    **Answer:** B  
    **Explanation:** It concerns explainability.

78. **A project in MIT807 requires implementation of:**  
    A. Only machine learning  
    B. Only NLP  
    C. Two uninformed search algorithms and a business AI solution  
    D. Only minimax  
    **Answer:** C  
    **Explanation:** The project brief explicitly requires both.

79. **Which pair is most directly associated with A\*?**  
    A. population and mutation  
    B. g(n) and h(n)  
    C. reward and policy  
    D. state and action only  
    **Answer:** B  
    **Explanation:** These form the A\* evaluation function.

80. **Which is not primarily an NLP application?**  
    A. Machine translation  
    B. Sentiment analysis  
    C. Pathfinding  
    D. Chatbots  
    **Answer:** C  
    **Explanation:** Pathfinding is more related to search/navigation.

81. **Which is a key reason games are good AI testbeds?**  
    A. They are always easy  
    B. They allow controlled evaluation of AI methods  
    C. They eliminate uncertainty  
    D. They remove the need for heuristics  
    **Answer:** B  
    **Explanation:** Games provide structured, testable environments.

82. **In GA, diversity matters because it:**  
    A. Prevents all evaluation  
    B. Helps explore more of the search space  
    C. Makes mutation unnecessary  
    D. Forces exact solutions  
    **Answer:** B  
    **Explanation:** Diversity resists premature convergence.

83. **Which statement about PLMs is correct?**  
    A. They are never fine-tuned  
    B. They learn from large unlabeled corpora first  
    C. They cannot do sentiment analysis  
    D. They replace tokenization entirely  
    **Answer:** B  
    **Explanation:** That is the pretraining idea.

84. **Which one is most associated with named entity recognition?**  
    A. Detecting people and places in text  
    B. Reducing dimensions  
    C. Finding shortest paths  
    D. Choosing game moves  
    **Answer:** A  
    **Explanation:** NER extracts named entities.

85. **Which one is most associated with PCA?**  
    A. Lowering feature dimensionality  
    B. Playing chess  
    C. Translating text  
    D. Crossover  
    **Answer:** A  
    **Explanation:** PCA finds principal components.

86. **What is the main role of a fitness function?**  
    A. To store training text  
    B. To rank solution quality in GA  
    C. To parse grammar  
    D. To compute BFS levels  
    **Answer:** B  
    **Explanation:** Fitness guides selection.

87. **Which can be used to control NPC behavior states?**  
    A. FSM  
    B. PCA  
    C. TF-IDF  
    D. DLS  
    **Answer:** A  
    **Explanation:** FSMs model discrete behavioral states.

88. **Which algorithm is most naturally tied to opponent modeling in zero-sum games?**  
    A. Minimax  
    B. K-means  
    C. Tokenization  
    D. PCA  
    **Answer:** A  
    **Explanation:** It assumes adversarial play.

89. **Which one is a traditional text representation approach?**  
    A. Bag of Words  
    B. Alpha-beta  
    C. Roulette wheel selection  
    D. Simulated annealing  
    **Answer:** A  
    **Explanation:** Bag of Words is a classical NLP representation.

90. **Which statement is true about stemming?**  
    A. It always returns dictionary words  
    B. It is often cruder than lemmatization  
    C. It uses rewards  
    D. It is a game algorithm  
    **Answer:** B  
    **Explanation:** Stemming may produce non-dictionary stems.

91. **Which ML type would best fit customer segmentation without labels?**  
    A. Supervised learning  
    B. Unsupervised learning  
    C. Reinforcement learning  
    D. Adversarial search  
    **Answer:** B  
    **Explanation:** Segmentation is typically clustering.

92. **What is the main purpose of mutation in GA?**  
    A. Preserve exact copies only  
    B. Add randomness and variation  
    C. Eliminate fitness evaluation  
    D. Perform parsing  
    **Answer:** B  
    **Explanation:** Mutation explores new possibilities.

93. **Which algorithm most clearly uses both actual and estimated future cost?**  
    A. DFS  
    B. BFS  
    C. A*  
    D. DLS  
    **Answer:** C  
    **Explanation:** A* uses `g(n)` and `h(n)`.

94. **Which issue is especially important in business AI deployment?**  
    A. Fairness and accountability  
    B. Only speed  
    C. Only memory  
    D. Only syntactic accuracy  
    **Answer:** A  
    **Explanation:** Real deployment requires governance and ethics.

95. **Which search strategy is greedy local improvement without explicit memory?**  
    A. Hill climbing  
    B. Tabu search  
    C. UCS  
    D. BFS  
    **Answer:** A  
    **Explanation:** Hill climbing fits that description.

96. **Which one best describes alpha-beta pruning?**  
    A. A way to prune branches that cannot affect choice  
    B. A way to generate embeddings  
    C. A way to reduce dimensions  
    D. A way to tokenize text  
    **Answer:** A  
    **Explanation:** It improves minimax efficiency.

97. **Which is most associated with transfer learning in NLP?**  
    A. Fine-tuning PLMs  
    B. BFS  
    C. DFS  
    D. DLS  
    **Answer:** A  
    **Explanation:** Fine-tuning pretrained models is transfer learning.

98. **What is one reason overfitting is dangerous?**  
    A. It guarantees fairness  
    B. It reduces training accuracy  
    C. It harms generalization to new data  
    D. It removes all complexity  
    **Answer:** C  
    **Explanation:** Generalization is the key problem.

99. **Which is a likely exam comparison question?**  
    A. BFS vs DFS  
    B. Stemming vs lemmatization  
    C. Minimax vs alpha-beta  
    D. All of the above  
    **Answer:** D  
    **Explanation:** All are classic compare/contrast topics.

100. **Which overall theme best connects the course?**  
     A. AI solves tasks using search, learning, language, optimization, and decision methods  
     B. AI is only about robots  
     C. AI is only about deep learning  
     D. AI is only about games  
     **Answer:** A  
     **Explanation:** The course spans multiple complementary AI paradigms.

---

## B. 5 Short-Answer Questions

1. **Explain the differences between BFS, DFS, IDS, and UCS.**  
   **Guide:** Compare node-expansion order, data structure, completeness, optimality, and memory use.

2. **What is a heuristic, and how does A\* use it?**  
   **Guide:** Define heuristic; explain `g(n)`, `h(n)`, `f(n)` and why informed search is efficient.

3. **Distinguish supervised, unsupervised, and reinforcement learning with one example each.**  
   **Guide:** Use labels/no labels/reward interaction.

4. **Describe the NLP pipeline from raw text to model output.**  
   **Guide:** Include tokenization, normalization, stemming/lemmatization, POS/NER/parsing, representation/modeling.

5. **Outline the steps of a genetic algorithm and explain premature convergence.**  
   **Guide:** Initialization, fitness, selection, crossover, mutation, replacement, stopping; then define loss of diversity.

---

# 6) Key Formulas / Concepts Sheet

## Search

- **A\***: `f(n) = g(n) + h(n)`  
  Use when combining known path cost and heuristic estimate.

## Heuristic Concepts

- `g(n)` = exact path cost so far
- `h(n)` = estimated remaining cost
- `f(n)` = estimated total solution cost

## Genetic Algorithm Concepts

- **Fitness proportional selection**: probability of choosing a parent is proportional to fitness.
- **Crossover probability (`p_c`)**: likelihood recombination occurs.
- **Mutation probability (`p_m`)**: likelihood random gene change occurs.
- **Schema idea**: pattern/template over chromosomes.
- **Premature convergence**: population loses diversity too early.

## ML Concepts

- **Classification**: predict discrete class
- **Regression**: predict continuous value
- **Clustering**: group similar unlabeled data
- **PCA**: reduce dimensions while preserving variance

## NLP Concepts

- **Tokenization**: split text
- **Stemming**: crude root reduction
- **Lemmatization**: dictionary-form reduction
- **POS tagging**: grammatical labeling
- **NER**: entity extraction
- **Parsing**: grammatical structure analysis

## Game AI Concepts

- **Minimax**: maximize own utility assuming minimizing opponent
- **Alpha-beta pruning**: prune branches irrelevant to final minimax choice

---

# 7) Ultra-Condensed Last-Minute Revision Sheet

## AI

- AI = systems that perceive, reason, learn, and act.
- ML ⊂ AI; DL ⊂ ML; Generative AI ⊂ DL/modern ML ecosystem.
- Rational agent = chooses best action for goals.

## Uninformed Search

- BFS = queue, shallowest first, complete, optimal for equal costs, high memory.
- DFS = stack, deepest first, low memory, not optimal, may get stuck.
- DLS = DFS with cutoff.
- IDS = repeated DLS; low memory + complete.
- UCS = lowest path cost first; optimal for positive costs.

## Informed Search

- Heuristic = estimate of distance/cost to goal.
- A\*: `f(n)=g(n)+h(n)`.
- Hill climbing gets stuck in local maxima.
- Simulated annealing accepts some bad moves early.
- Tabu search uses memory to avoid cycles.
- CSP = variables + domains + constraints.

## Machine Learning

- Supervised = labeled data → classification/regression.
- Unsupervised = unlabeled data → clustering/PCA/anomaly detection.
- RL = reward-driven learning by interaction.
- Overfitting = memorizes training data.
- Underfitting = too simple.
- Big issues: data quality, interpretability, fairness.

## NLP

- NLP = machine understanding/generation of language.
- Key steps: tokenization → normalization → stemming/lemmatization → POS → NER → parsing → modeling.
- Embeddings = dense word vectors.
- RNNs = sequence models.
- Transformers = attention-based, strong on long context.
- PLMs = pretrained on huge text, then fine-tuned.

## Games

- Minimax = best move against optimal opponent.
- Alpha-beta pruning = same minimax answer, fewer branches.
- FSMs and behavior trees control NPCs.
- Pathfinding handles movement/navigation.
- Goal in games = challenge + realism + fun, not just unbeatable AI.

## Genetic Algorithms

- Population of candidate solutions
- Evaluate fitness
- Select parents
- Crossover
- Mutation
- Replace population
- Repeat
- Watch for premature convergence (loss of diversity)

## Business + Ethics

- AI in business: automation, prediction, personalization, optimization, support.
- Always mention fairness, bias, transparency, and accountability.

---

# 8) Fast Comparison Table

## BFS vs DFS vs UCS vs A\*

- **BFS**: shallowest, queue, good for shortest path only when step costs equal
- **DFS**: deepest, stack, memory-light, risky
- **UCS**: cheapest accumulated path cost
- **A\***: cheapest estimated total cost using heuristic

## Stemming vs Lemmatization

- **Stemming**: faster, rougher
- **Lemmatization**: smarter, more accurate linguistically

## Hill Climbing vs Simulated Annealing vs Tabu Search

- **Hill climbing**: greedy neighbor improvement
- **Simulated annealing**: accepts some bad moves
- **Tabu search**: remembers recent states/moves

## Supervised vs Unsupervised vs Reinforcement Learning

- **Supervised**: labeled
- **Unsupervised**: unlabeled
- **RL**: reward-based interaction

---

# 9) What I Would Memorize First Tonight

1. Definitions: AI, ML, NLP, rational agent, heuristic, CSP, GA
2. Search comparisons: BFS, DFS, IDS, UCS, A\*
3. A\* formula and meanings of `g`, `h`, `f`
4. Hill climbing vs simulated annealing vs tabu search
5. Supervised vs unsupervised vs reinforcement learning
6. Overfitting vs underfitting
7. Tokenization vs stemming vs lemmatization vs POS vs NER vs parsing
8. Minimax and alpha-beta pruning
9. GA cycle: population → fitness → selection → crossover → mutation → replacement
10. Business applications + ethics points

---

# 10) Final 20 “Likely Exam” One-Liners

1. AI is broader than ML.
2. ML learns patterns from data.
3. BFS uses a queue.
4. DFS uses a stack.
5. UCS expands lowest path-cost first.
6. IDS repeats DLS with increasing depth.
7. Informed search uses heuristics.
8. A\* uses `f(n)=g(n)+h(n)`.
9. Hill climbing can get stuck in local maxima.
10. Simulated annealing escapes local optima by probabilistic bad moves.
11. Tabu search uses memory.
12. CSPs involve variables, domains, and constraints.
13. Supervised learning uses labeled data.
14. Unsupervised learning uses unlabeled data.
15. Reinforcement learning learns from rewards.
16. Overfitting hurts generalization.
17. Lemmatization is usually more accurate than stemming.
18. Minimax is for adversarial games.
19. Alpha-beta pruning reduces search while preserving the minimax choice.
20. Genetic algorithms optimize by evolution-inspired search.
