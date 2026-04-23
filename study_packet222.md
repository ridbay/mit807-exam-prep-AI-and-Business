# AI & Business Applications – Exam Prep Pack

## How this pack is built

This pack combines:

- **Current MIT807 lecture notes** on AI foundations, search, machine learning, NLP, game AI, and business applications. fileciteturn3file4 fileciteturn3file18 fileciteturn3file3 fileciteturn3file1 fileciteturn3file0
- **Past exam questions** showing repeated patterns in search, neural networks, genetic algorithms, knowledge representation, Turing test, expert systems, and AI definitions. fileciteturn3file7

---

# STEP 1: EXAM PATTERN ANALYSIS

## 1.1 Frequently tested topics from the past questions

## Very frequent

- **Search algorithms**
  - DFS, BFS, DLS, IDS
  - Uniform Cost Search
  - Best-first search
  - Hill climbing
  - Alpha-beta pruning / game-tree search
- **Artificial Intelligence basics**
  - Definition of intelligence
  - Definition of AI
  - History / birth of AI
  - Intelligent behavior of a machine
  - Turing test
- **Genetic Algorithms**
  - chromosome
  - fitness function
  - crossover
  - mutation
  - roulette-wheel / fitness proportionate selection
  - generational cycle
- **Knowledge representation**
  - what it is
  - first-order logic representation
  - knowledge base vs database
  - characteristics of good representation
- **Neural networks**
  - artificial neuron
  - single-layer perceptron
  - multilayer perceptron
  - backpropagation
  - Hopfield networks
- **Expert systems**
  - architecture and components

## Medium frequency

- **Decision trees / information gain**
- **Markov chains**
- **Bidirectional search**
- **Business/value framing of AI**
- **Robots in the workplace**

## Lower frequency in the older papers, but important now because of current lectures

- **Machine learning for business**
- **NLP and conversational AI**
- **Ethics, governance, regulation**
- **AI in business use cases by sector**

These newer topics appear strongly in the current lecture sequence, so even if they were not dominant in the old papers, they are still **high-value revision areas** for tomorrow. fileciteturn3file4 fileciteturn3file3 fileciteturn3file1

## 1.2 Question patterns in the past exams

## Pattern A: “List / define / state”

Very common.
Examples:

- define intelligence
- define AI
- define artificial neuron
- define chromosome / mutation / fitness function
- define Turing test
- define knowledge representation

**Exam strategy:** memorize compact 2–4 line definitions.

## Pattern B: “Compare / distinguish”

Repeated.
Examples:

- BFS vs DFS
- Best-first vs hill climbing
- database vs knowledge base
- two kinds of knowledge
- uninformed vs informed search

**Exam strategy:** use a table or short contrast bullets.

## Pattern C: “Trace the algorithm”

Very common.
Examples:

- list visitation order for DFS/BFS/DLS
- show priority queue steps in UCS
- construct roulette-wheel selection table

**Exam strategy:** write neat step-by-step tables.

## Pattern D: “Explain how it works”

Repeated.
Examples:

- explain best-first search
- explain how GAs work
- derive / explain backpropagation
- explain rule-based expert system architecture

**Exam strategy:** use numbered steps.

## Pattern E: “Representation / symbolic reasoning”

Repeated.
Examples:

- first-order logic representation
- knowledge representation
- expert systems
- knowledge base

**Exam strategy:** write formal example plus plain-English explanation.

## Pattern F: “Calculation / worked example”

Appears in:

- roulette wheel selection
- UCS shortest path
- search order tracing

**Exam strategy:** show working clearly; do not jump to the answer.

## 1.3 Repeated concepts across years

Repeated across the uploaded exam pages:

- search remains the **single most repeated family**
- GA terminology and GA selection tables recur
- AI definitions/history/Turing test recur
- knowledge representation and expert systems recur
- neural networks/backprop recur
- logic representation recurs
- game-search ideas like alpha-beta appear in short-answer form

## 1.4 High-probability exam topics for tomorrow

## Top tier: most likely

1. **Uninformed search**
   - DFS, BFS, DLS, IDS, UCS
2. **Informed search**
   - Best-first, A\*, hill climbing
3. **AI definitions/history**
   - intelligence, AI, birth of AI, Turing test
4. **Genetic algorithms**
   - terms + process + roulette wheel
5. **Knowledge representation**
   - first-order logic, KB vs DB, characteristics
6. **Neural networks**
   - artificial neuron, perceptron, backpropagation

## Second tier: very plausible

7. **Expert systems architecture**
8. **Decision trees / information gain**
9. **Alpha-beta pruning / game AI**
10. **Machine learning basics**
11. **AI in business applications**

## Third tier but rising because of current lecture emphasis

12. **NLP**
13. **Conversational AI**
14. **Ethics, governance, regulation**
15. **Bias, privacy, explainability**

## Final prediction

If the lecturer follows both **past pattern** and **current lecture structure**, the safest high-yield areas are:

- **search**
- **AI foundations/history**
- **GA**
- **knowledge representation**
- **neural networks / backprop**
- **ML basics**
- **NLP basics**
- **ethics/governance in business contexts**

---

# STEP 2: MASTER SUMMARY (LECTURE-BY-LECTURE)

# Lecture 1: Introduction to AI

## Key concepts

- AI is the field of building systems that can **perceive, reason, learn, solve problems, and act** intelligently.
- AI can be studied from several viewpoints:
  - acting humanly
  - thinking humanly
  - thinking rationally
  - acting rationally
- The most practical exam-ready framing is:
  - **AI is the science and engineering of making intelligent machines**
  - **A rational agent chooses actions that best achieve goals**

## Key definitions

- **Artificial Intelligence:** the study and design of systems that perform tasks requiring intelligence when done by humans.
- **Intelligence:** the ability to acquire knowledge, reason, learn, solve problems, and adapt to the environment.
- **Intelligent behavior of a machine:** behavior that appears goal-directed, adaptive, informed, and effective.

## Important models / ideas

- **Rational agent**
  - perceives environment
  - chooses best action
  - acts toward a goal
- **Turing test**
  - a machine is judged intelligent if its conversational behavior is indistinguishable from a human's

## Business applications

- customer support chatbots
- fraud detection
- recommendation systems
- predictive demand planning
- intelligent automation

## Real examples

- bank fraud monitoring
- e-commerce product recommendation
- AI assistants for service desks

---

# Lecture 2: History of AI & Uninformed Search

## Key concepts

- AI formally emerged around the **Dartmouth conference (1956)**.
- Early AI focused heavily on symbolic reasoning and search.
- Uninformed search explores without extra domain knowledge.

## Key definitions

- **Uninformed search:** search without a heuristic estimate of closeness to the goal.
- **State space:** the set of all possible states.
- **Node:** a point/state in the search tree.
- **Goal state:** the target state the algorithm wants to reach.

## Important algorithms

- **DFS**
  - goes deep first
  - uses a stack
  - low memory
  - may miss shallow solution
- **BFS**
  - explores level by level
  - uses a queue
  - complete
  - optimal only when path costs are equal
- **DLS**
  - DFS with a depth cutoff
- **IDS**
  - repeated DLS with increasing depth limit
  - combines DFS memory advantage with BFS completeness
- **UCS**
  - chooses the node with the lowest path cost
  - uses a priority queue
  - optimal for positive path costs

## Business applications

- route planning
- workflow traversal
- decision tree navigation
- service process design
- search in logistics networks

## Real examples

- delivery route exploration
- network troubleshooting path search
- warehouse robot path discovery

---

# Lecture 3: Informed Search

## Key concepts

- Informed search uses **heuristics** to guide exploration.
- It reduces wasted search compared with blind search.

## Key definitions

- **Heuristic function h(n):** estimated cost from node n to the goal.
- **Path cost g(n):** actual cost from start to node n.
- **Evaluation function f(n):** total estimated cost.

## Important algorithms / models

- **Best-first search**
  - selects the most promising node first
- **A\***
  - uses `f(n) = g(n) + h(n)`
  - balances actual cost and estimated future cost
- **Hill climbing**
  - move to a better neighbor only
  - can get stuck in local maxima / plateaus / ridges
- **Simulated annealing**
  - sometimes accepts worse moves to escape local traps
- **Tabu search**
  - uses memory (tabu list) to avoid revisiting recent states
- **Constraint satisfaction**
  - variables + domains + constraints

## Business applications

- delivery optimization
- scheduling
- staffing allocation
- portfolio search
- supply chain routing

## Real examples

- warehouse route optimization
- nurse scheduling
- vehicle routing
- production scheduling

---

# Lecture 4: AI in Business

## Key concepts

- AI creates business value through:
  - automation
  - prediction
  - personalization
  - optimization
  - decision support
- Business AI is not just technical; it must also be:
  - useful
  - ethical
  - explainable enough
  - aligned with business goals

## Key definitions

- **Predictive analytics:** using historical data to forecast future outcomes.
- **Recommendation system:** a system that suggests items relevant to a user.
- **Decision support system:** a system that assists managers with informed choices.

## Important models / ideas

- rule-based systems
- ML models
- recommender systems
- NLP-based support agents
- optimization/search systems

## Business applications

- **Marketing:** personalization, customer segmentation, churn prediction
- **Finance:** fraud detection, credit scoring, risk modeling
- **Operations:** inventory optimization, predictive maintenance, routing
- **Customer service:** chatbots, ticket routing, sentiment analysis

## Real examples

- Netflix/Amazon-style recommendations
- fraud alerts in banks
- predictive maintenance in factories
- AI call-center assistants

---

# Lectures 5–7: Machine Learning

## Key concepts

- ML is a subset of AI that learns patterns from data.
- Current lecture notes place ML inside a hierarchy:
  - AI
  - Machine Learning
  - Deep Learning
  - Generative AI. fileciteturn3file3

## Key definitions

- **Machine Learning:** algorithms that learn from data and improve performance without being explicitly programmed for every rule.
- **Supervised learning:** learns from labeled examples.
- **Unsupervised learning:** learns structure from unlabeled data.
- **Reinforcement learning:** learns by interacting with an environment using rewards/penalties.
- **Overfitting:** model fits training data too closely and generalizes poorly.
- **Underfitting:** model is too simple and misses the pattern.

## Important algorithms / models

- **Classification**
  - predict class label
  - e.g. spam / not spam
- **Regression**
  - predict a numeric value
  - e.g. sales forecast
- **Clustering**
  - group similar items
- **Decision trees**
  - split data using informative features
- **Nearest neighbor**
  - predict based on similar stored cases
- **Neural networks**
  - layers of interconnected artificial neurons
- **Backpropagation**
  - updates weights by propagating error backward

## Business applications

- customer segmentation
- sales forecasting
- fraud detection
- churn prediction
- predictive maintenance
- medical screening

## Real examples

- loan default prediction
- customer churn models for telecom
- disease screening from images
- stock or demand forecasting

---

# Lecture 8: NLP

## Key concepts

- NLP helps computers understand, interpret, and generate human language.
- Language is difficult because it is ambiguous and context-dependent. fileciteturn3file1

## Key definitions

- **NLP:** AI field for processing human language.
- **Tokenization:** splitting text into units such as words or subwords.
- **Stemming:** chopping words into crude roots.
- **Lemmatization:** reducing words to dictionary base forms.
- **POS tagging:** assigning grammatical category.
- **NER:** finding entities such as people, places, organizations.
- **Parsing:** analyzing sentence structure.

## Important algorithms / models

- bag of words
- TF-IDF
- word embeddings
- RNNs
- Transformers
- pretrained language models

## Business applications

- sentiment analysis
- search
- document classification
- translation
- information extraction
- customer feedback mining

## Real examples

- classifying support emails
- analyzing product reviews
- extracting names/dates from documents
- search ranking for enterprise knowledge bases

---

# Lecture 9: NLP & Conversational AI

## Key concepts

- Conversational AI combines NLP with dialogue management.
- A strong conversational system must:
  - understand intent
  - extract entities
  - manage context
  - produce helpful responses
- Past exams like short definitions; a modern exam may ask how chatbots/business assistants work.

## Key definitions

- **Conversational AI:** systems that interact through natural language in dialogue form.
- **Intent detection:** identifying what the user wants.
- **Entity extraction:** identifying key slots such as date, product, location.
- **Dialogue management:** deciding the next system action.
- **Response generation:** producing the reply.

## Important models / ideas

- retrieval-based chatbots
- rule-based bots
- generative chatbots
- large language models
- context tracking
- safety and escalation rules

## Business applications

- FAQ bots
- appointment booking bots
- banking assistants
- HR assistants
- e-commerce assistants

## Real examples

- telecom support chatbot
- order-tracking assistant
- loan eligibility assistant
- internal HR policy assistant

---

# Lecture 10: Ethics, Governance & Regulation

## Key concepts

- AI systems can harm people if they are biased, opaque, unsafe, or poorly governed.
- Ethical AI requires:
  - fairness
  - accountability
  - transparency
  - privacy
  - security
  - human oversight

## Key definitions

- **Bias:** systematic unfairness in outputs or decisions.
- **Privacy:** protecting personal data from misuse.
- **Explainability:** ability to understand why the model produced an output.
- **Governance:** policies, controls, accountability, and oversight for AI use.
- **Regulation:** formal rules or laws guiding AI deployment.

## Important frameworks / ideas

- human-in-the-loop review
- model audit
- documentation and monitoring
- risk categorization
- policy compliance
- data governance

## Business applications

- audit of credit scoring models
- healthcare AI review processes
- internal governance for generative AI tools
- privacy protection in customer analytics

## Real examples

- bias checks in hiring systems
- privacy-preserving data handling in hospitals
- content moderation and misinformation controls in chat systems

---

# STEP 3: EXAM-OPTIMIZED STUDY GUIDE

# 3.1 Uninformed vs Informed Search

## Uninformed search

- no heuristic
- explores based on structural rule only
- examples:
  - DFS
  - BFS
  - DLS
  - IDS
  - UCS

## Informed search

- uses heuristic/domain knowledge
- examples:
  - Best-first
  - A\*
  - Hill climbing
  - Tabu search
  - Simulated annealing

## Fast contrast table

| Topic          | Uninformed Search    | Informed Search                       |
| -------------- | -------------------- | ------------------------------------- |
| Knowledge used | No heuristic         | Uses heuristic/domain knowledge       |
| Direction      | Blind exploration    | Guided exploration                    |
| Efficiency     | Often slower         | Often faster                          |
| Example        | BFS, DFS             | A\*, Best-first                       |
| Goal           | Find a path/solution | Find a path/solution more efficiently |

## Example

- Searching for a route in a city:
  - **uninformed:** explore roads without knowing which direction is closer
  - **informed:** use straight-line distance or traffic estimate to guide search

## Common exam traps

- BFS is **not** the same as UCS.
- A\* is **not** the same as greedy best-first.
- Hill climbing is **not complete** and can get stuck.
- DLS can fail simply because the depth limit is too small.

## “If this appears, write this”

### If asked: “Define uninformed search”

Write:

> Uninformed search is a class of search methods that explores the state space without using problem-specific heuristic knowledge about how close a node is to the goal.

### If asked: “Compare BFS and DFS”

Write:

- BFS explores level by level using a queue; it is complete and optimal for equal path costs but uses much memory.
- DFS explores the deepest branch first using a stack; it uses less memory but is not generally optimal and can miss shallow solutions.

### If asked: “Explain A\*”

Write:

> A\* is an informed search algorithm that selects the node with the smallest estimated total cost `f(n)=g(n)+h(n)`, where `g(n)` is the actual cost from the start to node `n` and `h(n)` is the heuristic estimate from `n` to the goal.

---

# 3.2 Machine Learning concepts

## High-yield points

- supervised = labeled data
- unsupervised = unlabeled data
- reinforcement learning = reward-based interaction
- classification = predict class
- regression = predict number
- clustering = group similar items
- overfitting = poor generalization due to memorization
- underfitting = model too simple

## Common exam traps

- Do not say ML and AI are identical.
- Do not say clustering is supervised.
- Do not say high training accuracy automatically means good model.
- Overfitting is about **generalization failure**, not just “too many parameters.”

## “If this appears, write this”

### If asked: “What is supervised learning?”

> Supervised learning is a machine learning approach in which the model learns from labeled training examples consisting of input-output pairs.

### If asked: “Differentiate classification and regression”

> Classification predicts discrete categories, while regression predicts continuous numerical values.

### If asked: “What is overfitting?”

> Overfitting occurs when a model learns the training data too specifically, including noise, so that it performs poorly on new unseen data.

---

# 3.3 NLP & Conversational AI

## High-yield points

- NLP = understanding/generating human language
- tokenization, stemming, lemmatization, POS tagging, NER, parsing
- chatbots depend on intent + entities + dialogue state
- LLMs improve flexibility but raise risk issues

## Common exam traps

- stemming and lemmatization are not the same
- POS tagging and NER are not the same
- a chatbot is not just “a machine that replies”; it needs input understanding and response logic

## “If this appears, write this”

### If asked: “What is NLP?”

> Natural Language Processing is a branch of AI that enables computers to understand, analyze, and generate human language in text or speech form.

### If asked: “Explain conversational AI”

> Conversational AI combines NLP, intent recognition, entity extraction, dialogue management, and response generation to allow machines to communicate with users in natural language.

---

# 3.4 AI in Business

## Most likely business sectors to mention

- marketing
- finance
- operations
- customer service

## Strong exam structure

If asked “Discuss AI in business,” use:

1. define AI in business
2. explain value creation
3. give sector-by-sector examples
4. mention risks/ethics

## Sector examples

- **Marketing**
  - segmentation
  - recommendation
  - ad targeting
  - churn prediction
- **Finance**
  - fraud detection
  - credit scoring
  - risk modeling
  - algorithmic monitoring
- **Operations**
  - demand forecasting
  - routing
  - scheduling
  - predictive maintenance
- **Customer Service**
  - chatbots
  - ticket classification
  - sentiment analysis
  - voice assistants

## Common exam trap

Do not answer only with “AI automates tasks.”
Mention:

- prediction
- personalization
- optimization
- support for decision-making

---

# 3.5 Ethics, Governance, Privacy, Bias

## High-yield points

- bias
- privacy
- fairness
- accountability
- transparency
- explainability
- human oversight
- data governance

## Common exam traps

- Ethics is not just “do not harm.”
- Governance is not just “government law.”
- Explainability is especially important in finance, healthcare, hiring, insurance.

## “If this appears, write this”

### If asked: “What are ethical concerns in AI?”

> Ethical concerns in AI include bias and discrimination, privacy invasion, lack of transparency, weak accountability, unsafe deployment, and misuse of generated content.

### If asked: “What is AI governance?”

> AI governance is the set of policies, controls, oversight mechanisms, and accountability structures used to ensure that AI systems are developed and used responsibly, safely, and legally.

---

# 3.6 Compare & contrast section

## BFS vs DFS

- BFS: shallowest first, queue, high memory, complete
- DFS: deepest first, stack, low memory, not always complete

## UCS vs BFS

- BFS: lowest depth first
- UCS: lowest cumulative cost first

## Best-first vs Hill climbing

- Best-first keeps an OPEN list of alternatives
- Hill climbing moves only to the current best neighbor and does not backtrack

## Stemming vs Lemmatization

- Stemming: rough word chopping
- Lemmatization: linguistically correct base form

## Database vs Knowledge base

- Database: stores facts/data
- Knowledge base: stores facts plus rules/relations for inference

## Rule-based system vs ML system

- Rule-based: human-crafted knowledge and IF-THEN rules
- ML: learns patterns from data

## Generative AI vs traditional chatbot

- Traditional chatbot: often rule-based or retrieval-based
- Generative AI: creates new responses dynamically using a learned language model

---

# STEP 4: FLASHCARDS (70)

Q: What is Artificial Intelligence?  
A: The science and engineering of making intelligent machines that can reason, learn, solve problems, and act toward goals.

Q: What is intelligence?  
A: The ability to acquire knowledge, reason, learn from experience, solve problems, and adapt.

Q: What is an intelligent agent?  
A: An entity that perceives its environment and acts to maximize its chances of achieving goals.

Q: When was AI formally born?  
A: Around 1956, commonly linked to the Dartmouth conference.

Q: What is the Turing test?  
A: A test of machine intelligence in which a machine is considered intelligent if its responses are indistinguishable from a human's in conversation.

Q: What is uninformed search?  
A: Search that uses no heuristic information about closeness to the goal.

Q: What is informed search?  
A: Search that uses heuristic knowledge to guide exploration.

Q: What data structure does BFS use?  
A: A queue.

Q: What data structure does DFS use?  
A: A stack or recursion.

Q: What is the main weakness of BFS?  
A: High memory usage.

Q: What is the main weakness of DFS?  
A: It can get trapped deep in bad branches and is not generally optimal.

Q: What is DLS?  
A: Depth-first search with a fixed depth limit.

Q: What is IDS?  
A: Iterative deepening search, which repeats DLS with increasing depth limits.

Q: What is UCS?  
A: Uniform Cost Search, which expands the node with the smallest path cost.

Q: What does `g(n)` mean in A\*?  
A: Actual cost from the start node to node `n`.

Q: What does `h(n)` mean in A\*?  
A: Estimated cost from node `n` to the goal.

Q: What does `f(n)` mean in A\*?  
A: Estimated total path cost through `n`, computed as `g(n)+h(n)`.

Q: What is a heuristic?  
A: A rule-of-thumb estimate that helps guide search.

Q: What is best-first search?  
A: A search strategy that expands the most promising node first according to an evaluation function.

Q: What is hill climbing?  
A: An iterative improvement algorithm that moves to a better neighboring state.

Q: Name one problem with hill climbing.  
A: Local maxima, plateau, or ridge.

Q: What is tabu search?  
A: A search method that uses memory to avoid revisiting recently explored states.

Q: What is simulated annealing?  
A: A local search method that sometimes accepts worse moves to escape local optima.

Q: What is a CSP?  
A: A constraint satisfaction problem involving variables, domains, and constraints.

Q: What is machine learning?  
A: A subset of AI that learns patterns from data to improve performance on tasks.

Q: What is supervised learning?  
A: Learning from labeled input-output examples.

Q: What is unsupervised learning?  
A: Learning structure or patterns from unlabeled data.

Q: What is reinforcement learning?  
A: Learning by interaction through rewards and penalties.

Q: What is classification?  
A: Predicting a category.

Q: What is regression?  
A: Predicting a continuous numerical value.

Q: What is clustering?  
A: Grouping similar unlabeled data points.

Q: What is overfitting?  
A: When a model learns the training data too specifically and performs poorly on new data.

Q: What is underfitting?  
A: When a model is too simple to capture the underlying pattern.

Q: What is an artificial neuron?  
A: A mathematical abstraction of a biological neuron that combines weighted inputs and produces an output.

Q: What is a perceptron?  
A: A simple single-layer neural model used for classification.

Q: What is a multilayer perceptron?  
A: A feedforward neural network with one or more hidden layers.

Q: What is a hidden layer?  
A: A layer between input and output that learns intermediate representations/features.

Q: What is backpropagation?  
A: A learning algorithm that propagates output error backward through a neural network to update weights.

Q: What is a Hopfield network?  
A: A recurrent neural network often used for associative memory.

Q: What is knowledge representation?  
A: The theory and practice of representing knowledge in a form a computer can use for reasoning.

Q: What is a knowledge base?  
A: A store of facts plus rules/relationships for inference.

Q: How is a database different from a knowledge base?  
A: A database stores facts; a knowledge base stores facts and inference rules/relations.

Q: Give a first-order logic form for “Raymond rides a bicycle.”  
A: Rides(Raymond, bicycle) or Rides(Raymond, car) depending on the object specified in the question.

Q: Give a first-order logic form for “There exists x that is a person.”  
A: ∃x Person(x)

Q: What is an expert system?  
A: A rule-based AI system that uses domain knowledge to solve expert-level problems.

Q: Name the main parts of a rule-based expert system.  
A: Knowledge base, inference engine, working memory, user interface, explanation facility, knowledge acquisition module.

Q: What is NLP?  
A: Natural Language Processing, the AI field for understanding and generating human language.

Q: What is tokenization?  
A: Splitting text into smaller units such as words or subwords.

Q: What is stemming?  
A: Reducing words to rough root-like forms.

Q: What is lemmatization?  
A: Reducing words to their proper base dictionary forms.

Q: What is POS tagging?  
A: Assigning grammatical categories such as noun or verb.

Q: What is NER?  
A: Named Entity Recognition, identifying names, places, organizations, dates, etc.

Q: What is parsing?  
A: Analyzing grammatical structure.

Q: What is conversational AI?  
A: AI that interacts with users through natural language dialogue.

Q: What is intent recognition?  
A: Determining what the user wants to do.

Q: What is entity extraction?  
A: Pulling key values such as date, name, product, or amount from user input.

Q: What is AI governance?  
A: The framework of policies and controls for responsible AI development and use.

Q: What is bias in AI?  
A: Systematic unfairness in model behavior or outputs.

Q: What is explainability?  
A: The degree to which humans can understand how a model reached a result.

Q: What is privacy in AI?  
A: Protection of personal or sensitive data used by AI systems.

Q: What is a chromosome in GA?  
A: An encoded candidate solution.

Q: What is a fitness function?  
A: A function that measures how good a candidate solution is.

Q: What is crossover in GA?  
A: Combining portions of parent chromosomes to create offspring.

Q: What is mutation in GA?  
A: Randomly altering part of a chromosome to introduce variation.

Q: What is roulette-wheel selection?  
A: Fitness-proportionate parent selection.

Q: Why is diversity important in GA?  
A: It helps prevent premature convergence and supports broader search.

Q: What is alpha-beta pruning?  
A: A method that reduces game-tree search in minimax by pruning branches that cannot affect the final decision.

Q: What is information gain?  
A: A measure used in decision trees to choose the feature that most reduces uncertainty.

Q: What is one AI use in marketing?  
A: Personalized recommendation or churn prediction.

Q: What is one AI use in finance?  
A: Fraud detection.

Q: What is one AI use in operations?  
A: Predictive maintenance or route optimization.

Q: What is one AI use in customer service?  
A: A chatbot or ticket classifier.

---

# STEP 5: LARGE PRACTICE QUESTION BANK

# Part A: 80 Multiple Choice Questions

## Easy–Medium

1. Which of the following best defines AI?  
   A. Computer networking  
   B. Building systems that perform intelligent tasks  
   C. Database administration  
   D. Image storage  
   **Answer:** B  
   **Explanation:** AI focuses on intelligent behavior such as reasoning, learning, and decision-making.

2. AI was formally born around:  
   A. 1940  
   B. 1956  
   C. 1969  
   D. 1985  
   **Answer:** B  
   **Explanation:** 1956 is associated with the Dartmouth conference.

3. Which search uses a queue?  
   A. DFS  
   B. BFS  
   C. DLS  
   D. Hill climbing  
   **Answer:** B  
   **Explanation:** BFS explores level by level using FIFO order.

4. Which search uses a stack?  
   A. DFS  
   B. BFS  
   C. UCS  
   D. A\*  
   **Answer:** A  
   **Explanation:** DFS follows LIFO behavior.

5. Which algorithm expands the node with the lowest path cost?  
   A. BFS  
   B. DFS  
   C. UCS  
   D. IDS  
   **Answer:** C  
   **Explanation:** UCS is cost-based.

6. Which algorithm repeats depth-limited search with increasing limits?  
   A. DLS  
   B. IDS  
   C. BFS  
   D. A\*  
   **Answer:** B  
   **Explanation:** IDS incrementally deepens the limit.

7. A heuristic is:  
   A. an exact proof  
   B. a rule-of-thumb estimate  
   C. a database  
   D. a compiler  
   **Answer:** B  
   **Explanation:** Heuristics guide search using estimates.

8. In A\*, `h(n)` refers to:  
   A. exact path cost so far  
   B. estimated cost to the goal  
   C. number of child nodes  
   D. branching factor  
   **Answer:** B  
   **Explanation:** `h(n)` is the heuristic estimate.

9. In A\*, `g(n)` refers to:  
   A. estimated cost to the goal  
   B. exact cost so far  
   C. total depth  
   D. node label  
   **Answer:** B  
   **Explanation:** `g(n)` is the actual accumulated path cost.

10. Hill climbing is most likely to suffer from:  
    A. lexical ambiguity  
    B. local maxima  
    C. queue overflow only  
    D. tokenization error  
    **Answer:** B  
    **Explanation:** It can get trapped in local optima.

11. Tabu search avoids cycling by using:  
    A. a grammar  
    B. a tabu list  
    C. an output neuron  
    D. a parse tree  
    **Answer:** B  
    **Explanation:** The tabu list stores recently explored moves/states.

12. Machine learning is a subset of:  
    A. Networking  
    B. AI  
    C. Operating systems  
    D. Graphics  
    **Answer:** B  
    **Explanation:** ML is one subfield of AI.

13. Supervised learning uses:  
    A. unlabeled data only  
    B. labeled data  
    C. no data  
    D. only random data  
    **Answer:** B  
    **Explanation:** Inputs are paired with target outputs.

14. Clustering belongs to:  
    A. supervised learning  
    B. unsupervised learning  
    C. reinforcement learning  
    D. game theory  
    **Answer:** B  
    **Explanation:** Clustering groups unlabeled data.

15. Regression predicts:  
    A. a class  
    B. a number  
    C. a grammar rule  
    D. a search tree  
    **Answer:** B  
    **Explanation:** Regression outputs continuous values.

16. Overfitting means:  
    A. model too simple  
    B. model learns noise and generalizes poorly  
    C. data is unlabeled  
    D. training is impossible  
    **Answer:** B  
    **Explanation:** Overfit models do badly on unseen data.

17. An artificial neuron is a:  
    A. physical brain cell  
    B. mathematical abstraction of a neuron  
    C. search tree  
    D. logic gate only  
    **Answer:** B  
    **Explanation:** It models weighted inputs and an activation/output.

18. Backpropagation is used to:  
    A. tokenize text  
    B. update neural network weights using error  
    C. traverse a graph  
    D. sort a dataset  
    **Answer:** B  
    **Explanation:** Error is propagated backward to adjust weights.

19. Knowledge representation is mainly concerned with:  
    A. storing music files  
    B. representing knowledge for computer reasoning  
    C. encrypting networks  
    D. drawing graphs  
    **Answer:** B  
    **Explanation:** It provides usable structures for inference.

20. A knowledge base differs from a database because it contains:  
    A. only numbers  
    B. only images  
    C. facts plus rules/relations  
    D. less information  
    **Answer:** C  
    **Explanation:** Knowledge bases support reasoning.

21. The Turing test tests:  
    A. memory size  
    B. machine intelligence in conversation  
    C. database speed  
    D. compiler performance  
    **Answer:** B  
    **Explanation:** It evaluates whether a machine appears human in dialogue.

22. NLP stands for:  
    A. Neural Logic Programming  
    B. Natural Language Processing  
    C. Numerical Language Parsing  
    D. New Learning Protocol  
    **Answer:** B  
    **Explanation:** NLP handles human language.

23. Tokenization means:  
    A. translating text  
    B. splitting text into units  
    C. removing all nouns  
    D. pruning branches  
    **Answer:** B  
    **Explanation:** Tokens may be words, subwords, or characters.

24. Stemming is:  
    A. assigning POS tags  
    B. rough root-word reduction  
    C. full logical reasoning  
    D. exact semantic parsing  
    **Answer:** B  
    **Explanation:** It often produces crude stems.

25. Lemmatization differs from stemming because it:  
    A. is always random  
    B. uses linguistic knowledge to produce base forms  
    C. creates vectors only  
    D. is a search algorithm  
    **Answer:** B  
    **Explanation:** Lemmas are typically dictionary-valid forms.

26. NER identifies:  
    A. search levels  
    B. entities like names and places  
    C. path costs  
    D. crossover points  
    **Answer:** B  
    **Explanation:** It extracts structured entities from text.

27. Conversational AI depends heavily on:  
    A. intent recognition  
    B. entity extraction  
    C. dialogue management  
    D. all of the above  
    **Answer:** D  
    **Explanation:** All are central pieces.

28. AI bias refers to:  
    A. better speed  
    B. systematic unfairness  
    C. more memory  
    D. legal compliance  
    **Answer:** B  
    **Explanation:** Bias produces skewed or discriminatory outcomes.

29. Explainability is especially important in:  
    A. critical decision systems  
    B. cartoon generation only  
    C. image storage only  
    D. gaming only  
    **Answer:** A  
    **Explanation:** Especially in finance, health, hiring, and law.

30. A chromosome in GA is:  
    A. a candidate solution encoding  
    B. a search queue  
    C. a logic formula  
    D. a hidden neuron  
    **Answer:** A  
    **Explanation:** It represents a possible solution.

31. The fitness function in GA measures:  
    A. memory usage  
    B. solution quality  
    C. text length  
    D. grammar depth  
    **Answer:** B  
    **Explanation:** It evaluates how good a candidate is.

32. Crossover in GA:  
    A. combines parent solutions  
    B. deletes parents  
    C. computes entropy  
    D. performs tokenization  
    **Answer:** A  
    **Explanation:** It recombines solution parts.

33. Mutation in GA:  
    A. keeps exact copies only  
    B. introduces random change  
    C. stops evolution  
    D. guarantees the best answer  
    **Answer:** B  
    **Explanation:** Mutation preserves diversity and exploration.

34. Roulette-wheel selection is:  
    A. cost-based search  
    B. fitness-proportionate parent selection  
    C. rule matching  
    D. a pruning strategy  
    **Answer:** B  
    **Explanation:** More fit chromosomes get higher probability.

35. Alpha-beta pruning is used with:  
    A. decision trees  
    B. minimax  
    C. k-means  
    D. PCA  
    **Answer:** B  
    **Explanation:** It speeds up adversarial search.

36. Information gain is used in:  
    A. decision trees  
    B. DFS  
    C. backprop only  
    D. UCS  
    **Answer:** A  
    **Explanation:** It chooses splitting attributes.

37. Which is an example of AI in finance?  
    A. fraud detection  
    B. stemming  
    C. POS tagging  
    D. image compression  
    **Answer:** A  
    **Explanation:** Fraud detection is a standard finance AI use case.

38. Which is an example of AI in operations?  
    A. predictive maintenance  
    B. lemmatization  
    C. Turing testing  
    D. parsing  
    **Answer:** A  
    **Explanation:** Operations often use forecasting and maintenance models.

39. Which is an example of AI in marketing?  
    A. recommendation systems  
    B. alpha-beta pruning  
    C. UCS  
    D. compiler optimization  
    **Answer:** A  
    **Explanation:** Personalization and recommendation are core marketing uses.

40. Which is an example of AI in customer service?  
    A. chatbot  
    B. PCA  
    C. UCS  
    D. decision stump  
    **Answer:** A  
    **Explanation:** Chatbots automate customer interaction.

## Medium

41. Which search is complete and optimal for equal step costs?  
    A. DFS  
    B. BFS  
    C. Hill climbing  
    D. DLS  
    **Answer:** B  
    **Explanation:** BFS returns shallowest solution under equal costs.

42. Which search is optimal for positive path costs?  
    A. UCS  
    B. DFS  
    C. IDS only  
    D. Hill climbing  
    **Answer:** A  
    **Explanation:** UCS expands lowest cumulative cost first.

43. Which search maintains an OPEN list of candidate nodes ordered by promise?  
    A. Best-first search  
    B. DLS  
    C. Plain DFS  
    D. Brute-force enumeration only  
    **Answer:** A  
    **Explanation:** Best-first uses an ordered OPEN list.

44. Which statement is correct?  
    A. Hill climbing keeps all alternatives  
    B. Best-first keeps an OPEN list of alternatives  
    C. DFS uses a queue  
    D. UCS ignores path cost  
    **Answer:** B  
    **Explanation:** This is the key difference.

45. The formula for A* is:  
    A. `f(n)=g(n)-h(n)`  
    B. `f(n)=g(n)+h(n)`  
    C. `f(n)=h(n)/g(n)`  
    D. `f(n)=g(n)*h(n)`  
    **Answer:** B  
    **Explanation:** A\* combines actual and heuristic cost.

46. Which problem is common in hill climbing but less severe with tabu search?  
    A. lexical ambiguity  
    B. cycling/local trap  
    C. token splitting  
    D. label shortage  
    **Answer:** B  
    **Explanation:** Tabu search uses memory to reduce this.

47. Which learning setup uses rewards and penalties?  
    A. supervised  
    B. unsupervised  
    C. reinforcement learning  
    D. nearest-neighbor search  
    **Answer:** C  
    **Explanation:** RL is reward-driven.

48. Which of the following is NOT supervised?  
    A. classification  
    B. regression  
    C. clustering  
    D. spam detection  
    **Answer:** C  
    **Explanation:** Clustering is unsupervised.

49. Underfitting occurs when:  
    A. the model is too simple  
    B. the model memorizes noise  
    C. data are too many  
    D. search is heuristic  
    **Answer:** A  
    **Explanation:** It fails to capture the pattern.

50. Hidden layers in neural networks mainly help to:  
    A. remove data  
    B. learn intermediate representations  
    C. avoid all errors  
    D. store search trees  
    **Answer:** B  
    **Explanation:** They learn features between input and output.

51. Hopfield networks are associated with:  
    A. associative memory  
    B. route planning only  
    C. parsing  
    D. BFS  
    **Answer:** A  
    **Explanation:** They are recurrent networks used for pattern memory.

52. In first-order logic, “There exists x such that x is a person” is:  
    A. Person(x)  
    B. ∀x Person(x)  
    C. ∃x Person(x)  
    D. Person(∃x)  
    **Answer:** C  
    **Explanation:** Existence uses the existential quantifier.

53. Which best describes an expert system?  
    A. a rule-based AI using expert knowledge  
    B. a search queue  
    C. a graphics engine  
    D. a clustering tool only  
    **Answer:** A  
    **Explanation:** It encodes domain rules and facts.

54. Which component of an expert system performs reasoning?  
    A. user interface  
    B. inference engine  
    C. keyboard  
    D. sensor module only  
    **Answer:** B  
    **Explanation:** The inference engine applies rules.

55. POS tagging assigns:  
    A. named entities  
    B. parts of speech  
    C. node costs  
    D. genetic operators  
    **Answer:** B  
    **Explanation:** It labels noun, verb, adjective, etc.

56. Parsing mainly analyzes:  
    A. sentence structure  
    B. fitness proportions  
    C. path costs  
    D. weights only  
    **Answer:** A  
    **Explanation:** Parsing studies grammatical structure.

57. One key challenge in NLP is:  
    A. ambiguity  
    B. no vocabulary  
    C. no data structures  
    D. no algorithms  
    **Answer:** A  
    **Explanation:** Human language is highly ambiguous.

58. Privacy in AI mainly concerns:  
    A. artistic design  
    B. protection of personal and sensitive data  
    C. search optimality  
    D. grammar correctness  
    **Answer:** B  
    **Explanation:** Privacy is a core governance issue.

59. Governance in AI refers to:  
    A. only government agencies  
    B. policies, controls, and oversight for AI use  
    C. only hardware selection  
    D. website design  
    **Answer:** B  
    **Explanation:** Governance is broader than regulation alone.

60. Which is a likely reason a model becomes biased?  
    A. biased data  
    B. search depth  
    C. queue ordering  
    D. stemming  
    **Answer:** A  
    **Explanation:** Data bias often leads to model bias.

## Harder / exam-style variations

61. Which pair is the strongest repeated combination in the past papers?  
    A. NLP and computer vision  
    B. Search and genetic algorithms  
    C. Robotics and speech recognition  
    D. Edge computing and databases  
    **Answer:** B  
    **Explanation:** Search and GA recur heavily.

62. Which answer best distinguishes database from knowledge base?  
    A. both are the same  
    B. database stores facts; knowledge base stores facts plus rules  
    C. knowledge base stores only numbers  
    D. database stores only images  
    **Answer:** B  
    **Explanation:** This is the expected exam contrast.

63. Which of the following is most exam-worthy as a short definition?  
    A. intelligence  
    B. AI  
    C. Turing test  
    D. all of the above  
    **Answer:** D  
    **Explanation:** These recur repeatedly in past papers.

64. Which search method is most likely to be asked with a visitation-order tree question?  
    A. DFS/BFS/DLS  
    B. k-means  
    C. transformer  
    D. NER  
    **Answer:** A  
    **Explanation:** This exact pattern recurs.

65. A likely GA calculation question involves:  
    A. tokenization  
    B. roulette-wheel selection  
    C. parse trees  
    D. POS tags  
    **Answer:** B  
    **Explanation:** The past exam includes selection tables.

66. Which topic appears in old papers but also connects strongly to current game AI material?  
    A. alpha-beta pruning  
    B. stemming  
    C. privacy law  
    D. OCR  
    **Answer:** A  
    **Explanation:** Alpha-beta links old search/game questions to current content.

67. A modern exam update of old papers is most likely to replace some symbolic-only focus with:  
    A. NLP and ethics questions  
    B. thermodynamics  
    C. compiler syntax  
    D. spreadsheet macros  
    **Answer:** A  
    **Explanation:** Current lecture structure emphasizes these.

68. Which phrase is best for a 2-mark answer on “What is intelligence?”  
    A. anything a computer does  
    B. ability to learn, reason, solve problems, and adapt  
    C. memory storage only  
    D. typing fast  
    **Answer:** B  
    **Explanation:** This is concise and exam-ready.

69. Which is the best opening sentence for “AI in business”?  
    A. AI is only for robots.  
    B. AI in business refers to the use of intelligent systems to automate, predict, optimize, and support decision-making.  
    C. Business is different from AI.  
    D. AI is a database.  
    **Answer:** B  
    **Explanation:** It is broad, correct, and exam-ready.

70. Which term best fits “the output of one layer becomes input to the next”?  
    A. layered neural processing  
    B. queue expansion  
    C. state pruning  
    D. genetic mutation  
    **Answer:** A  
    **Explanation:** This describes neural network layering.

71. Which is most appropriate for a first-order logic example?  
    A. Rides(Raymond, bicycle)  
    B. queue(raymond)  
    C. cost=raymond  
    D. BFS(raymond)  
    **Answer:** A  
    **Explanation:** Predicate form is correct.

72. Which component would allow an expert system to explain why it reached a conclusion?  
    A. explanation facility  
    B. mutation operator  
    C. parser  
    D. router  
    **Answer:** A  
    **Explanation:** That is its role.

73. The biggest likely trap in a search comparison answer is:  
    A. forgetting to contrast cost vs depth  
    B. using too many examples  
    C. writing in bullets  
    D. defining AI first  
    **Answer:** A  
    **Explanation:** BFS/UCS/A\* are often confused on this basis.

74. Which is most likely to be a new ethics-style question?  
    A. discuss fairness, bias, privacy, and accountability in AI systems  
    B. define floppy disk  
    C. explain CRT monitor behavior  
    D. compare printer drivers  
    **Answer:** A  
    **Explanation:** It matches current lecture emphasis.

75. Which is the most likely NLP business application examiners would accept?  
    A. sentiment analysis of customer reviews  
    B. compiling C code  
    C. memory defragmentation  
    D. transistor counting  
    **Answer:** A  
    **Explanation:** It is a clear business NLP example.

76. Which phrase best describes conversational AI?  
    A. rule-only search  
    B. machine dialogue using NLP and context management  
    C. image-only classification  
    D. storage optimization  
    **Answer:** B  
    **Explanation:** It captures the main idea.

77. Which of the following most clearly shows overfitting?  
    A. low training accuracy and low test accuracy  
    B. high training accuracy and poor test accuracy  
    C. equal train and test accuracy with good performance  
    D. no training done  
    **Answer:** B  
    **Explanation:** This is the classic pattern.

78. Which GA term refers to preserving variation in the population?  
    A. diversity  
    B. parsing  
    C. ontology  
    D. queueing  
    **Answer:** A  
    **Explanation:** Diversity helps avoid premature convergence.

79. Which topic is both old-school exam favorite and still central in modern AI?  
    A. knowledge representation  
    B. printer repair  
    C. cable crimping  
    D. cache cleaning  
    **Answer:** A  
    **Explanation:** Knowledge representation remains foundational.

80. Which final revision strategy is best given the evidence?  
    A. study everything equally  
    B. prioritize search, GA, AI definitions, knowledge representation, neural nets, then add ML/NLP/ethics  
    C. ignore old papers  
    D. memorize only examples  
    **Answer:** B  
    **Explanation:** It balances recurring past patterns with current lecture emphasis.

---

# Part B: 40 Short Answer Questions

1. Define Artificial Intelligence.
2. Define intelligence.
3. What is meant by intelligent behavior of a machine?
4. When was AI formally born?
5. What is the Turing test and what was it intended to accomplish?
6. Define uninformed search.
7. Define informed search.
8. Differentiate BFS and DFS.
9. What is depth-limited search?
10. What is iterative deepening search?
11. What is Uniform Cost Search?
12. Explain the meaning of `g(n)` and `h(n)` in best-first/A\* search.
13. What is a heuristic function?
14. Explain how best-first search works.
15. State two differences between best-first search and hill climbing.
16. What is hill climbing?
17. State two problems associated with hill climbing.
18. What is tabu search?
19. What is simulated annealing?
20. Define machine learning.
21. Distinguish supervised and unsupervised learning.
22. Distinguish classification and regression.
23. What is overfitting?
24. What is underfitting?
25. Define an artificial neuron.
26. Define a single-layer perceptron.
27. Define backpropagation.
28. What is a hidden layer and what does it hide?
29. What is a Hopfield network?
30. Define knowledge representation.
31. Distinguish a database from a knowledge base.
32. Write a first-order logic representation for “Raymond rides a bicycle.”
33. Write a first-order logic representation for “There exists x that is a person.”
34. Define NLP.
35. Differentiate stemming and lemmatization.
36. What is conversational AI?
37. What is bias in AI?
38. What is explainability in AI?
39. Define chromosome, fitness function, crossover, and mutation.
40. What is roulette-wheel selection?

---

# Part C: 30 Essay / Long-form Questions

1. Discuss the concept of Artificial Intelligence and explain the characteristics of intelligent behavior in machines.
2. Explain the history of AI and discuss why 1956 is important.
3. Compare uninformed and informed search with suitable examples.
4. Explain DFS, BFS, DLS, IDS, and UCS, highlighting their time/space trade-offs.
5. For a given tree, show the visitation order for DFS, BFS, and DLS.
6. Using Uniform Cost Search, find the least-cost path in a weighted graph and show the OPEN list after each step.
7. Explain best-first search and the role of heuristics in search.
8. Explain the A\* search algorithm using `f(n)=g(n)+h(n)`.
9. Compare best-first search and hill climbing.
10. Explain hill climbing, simulated annealing, and tabu search as optimization methods.
11. Discuss constraint satisfaction problems and give business examples.
12. Define machine learning and explain the differences among supervised, unsupervised, and reinforcement learning.
13. Explain classification, regression, and clustering with business examples.
14. Discuss overfitting and underfitting and explain how to reduce each.
15. Define an artificial neuron and explain how a multilayer perceptron works.
16. Construct and explain a multilayer perceptron with six input neurons, four hidden neurons, and two output neurons.
17. Derive or explain the backpropagation training algorithm step by step.
18. Explain Hopfield neural networks and their major use.
19. Explain knowledge representation and discuss its most important characteristics.
20. Distinguish between a database and a knowledge base with examples.
21. Write first-order logic representations for simple English statements and explain the notation.
22. Explain the architecture of a rule-based expert system and discuss each component.
23. Define the Turing test and discuss its strengths and limitations.
24. Explain genetic algorithms and describe a full generational cycle.
25. Define chromosome, fitness function, crossover, and mutation with examples.
26. Using roulette-wheel selection, construct the probability and expected-count table for a given fitness set.
27. Discuss AI applications in marketing, finance, operations, and customer service.
28. Explain NLP, its major preprocessing steps, and its business applications.
29. Explain conversational AI and discuss how chatbots work in business environments.
30. Discuss the ethical, governance, and regulatory issues involved in deploying AI in organizations.

---

# STEP 6: HIGH-PROBABILITY QUESTIONS

## Top 25 most likely questions

1. Define Artificial Intelligence.
2. Define intelligence and intelligent behavior of a machine.
3. When was AI born, and why is 1956 important?
4. What is the Turing test?
5. Distinguish uninformed and informed search.
6. Compare BFS and DFS.
7. Explain DLS and IDS.
8. Use a tree to list the order of visitation for DFS, BFS, and DLS.
9. Explain Uniform Cost Search with a worked graph example.
10. Explain best-first search.
11. Define `g(n)` and `h(n)` and explain `f(n)=g(n)+h(n)`.
12. Compare best-first search and hill climbing.
13. Define artificial neuron, perceptron, and backpropagation.
14. Explain what a hidden layer is.
15. What is a Hopfield network?
16. Define chromosome, fitness function, crossover, and mutation.
17. Explain how genetic algorithms work.
18. Solve a roulette-wheel selection problem.
19. Define knowledge representation.
20. Distinguish a database from a knowledge base.
21. Explain the architecture of a rule-based expert system.
22. Write simple first-order logic representations.
23. Define machine learning and distinguish supervised, unsupervised, and reinforcement learning.
24. Explain NLP and its basic techniques.
25. Discuss ethical concerns in AI: bias, privacy, explainability, governance.

## Strong “surprise but plausible” questions

26. Discuss AI applications in business by sector.
27. Explain conversational AI and chatbot architecture.
28. Discuss overfitting and underfitting.
29. Explain alpha-beta pruning.
30. Define information gain and its role in decision trees.

---

# STEP 7: BUSINESS APPLICATION CHEAT SHEET

# Marketing

## Use cases

- customer segmentation
- personalized recommendation
- campaign optimization
- churn prediction
- sentiment analysis

## Real-style examples

- an e-commerce firm recommends products based on browsing history
- a telecom company predicts which customers are likely to leave
- a brand analyzes social-media comments to measure campaign sentiment

# Finance

## Use cases

- fraud detection
- credit scoring
- risk modeling
- anti-money-laundering alerts
- customer service assistants

## Real-style examples

- a bank flags unusual credit-card transactions in real time
- a lender predicts loan default risk from application history
- a compliance team uses anomaly detection to identify suspicious behavior

# Operations

## Use cases

- demand forecasting
- route optimization
- scheduling
- predictive maintenance
- quality inspection

## Real-style examples

- a logistics company uses AI to optimize delivery routes
- a factory predicts machine failure before breakdown
- a warehouse uses AI for inventory restocking decisions

# Customer Service

## Use cases

- chatbots
- ticket routing
- email classification
- sentiment analysis
- voice bots

## Real-style examples

- a chatbot answers FAQs and escalates difficult issues to humans
- customer complaints are auto-categorized by topic and urgency
- voice support calls are transcribed and analyzed for satisfaction

# Best exam sentence to memorize

> AI creates business value through automation, prediction, personalization, optimization, and decision support across marketing, finance, operations, and customer service.

---

# STEP 8: LAST-MINUTE REVISION SHEET

## Definitions to memorize

- AI = building intelligent machines
- intelligence = ability to learn, reason, solve problems, adapt
- Turing test = conversational test of machine intelligence
- uninformed search = search without heuristics
- informed search = search with heuristics
- heuristic = estimate that guides search
- ML = learning from data
- NLP = processing human language
- knowledge representation = representing knowledge for computer reasoning
- chromosome = encoded candidate solution
- fitness function = measure of solution quality
- backpropagation = weight update by backward error propagation

## Search differences

- BFS = queue, shallowest first
- DFS = stack, deepest first
- DLS = DFS + limit
- IDS = repeated DLS
- UCS = lowest path cost first
- Best-first = most promising node first
- A\* = `f(n)=g(n)+h(n)`
- Hill climbing = move to best neighbor only
- Tabu search = memory-based local search

## Neural nets

- artificial neuron = weighted sum + activation
- perceptron = simple classifier
- multilayer perceptron = network with hidden layers
- hidden layer = learns intermediate patterns
- backpropagation = updates weights using output error

## GA

- population → fitness → selection → crossover → mutation → replacement
- roulette wheel = fitness proportionate selection
- crossover combines parents
- mutation adds variation

## Knowledge representation

- KB stores facts + rules
- DB stores facts/data only
- first-order logic examples:
  - `Rides(Raymond, bicycle)`
  - `∃x Person(x)`

## ML

- supervised = labeled
- unsupervised = unlabeled
- reinforcement learning = reward-based
- classification = category
- regression = number
- clustering = grouping
- overfitting = memorizes noise
- underfitting = too simple

## NLP

- tokenization
- stemming
- lemmatization
- POS tagging
- NER
- parsing
- conversational AI = intent + entities + dialogue management + response

## Ethics

- bias
- fairness
- privacy
- accountability
- explainability
- human oversight
- governance

## What to memorize first tonight

1. DFS/BFS/DLS/IDS/UCS
2. Best-first / A\* / hill climbing
3. AI definition + intelligence + Turing test
4. chromosome / fitness / crossover / mutation
5. knowledge representation + KB vs DB + FOL examples
6. neuron / perceptron / hidden layer / backprop
7. supervised vs unsupervised vs RL
8. NLP basics
9. AI use cases in business
10. bias/privacy/explainability/governance

---

# BONUS: “IF THIS APPEARS, WRITE THIS”

## If asked “What is AI?”

> Artificial Intelligence is the science and engineering of making machines that can perform tasks requiring intelligence, such as reasoning, learning, problem solving, and decision making.

## If asked “What is the intelligent behavior of a machine?”

> Intelligent behavior of a machine refers to goal-directed, adaptive, and context-aware behavior in which the machine uses available information to make effective decisions and solve problems.

## If asked “Compare BFS and DFS”

> Breadth-First Search explores nodes level by level using a queue, making it complete and optimal for equal path costs, but memory intensive. Depth-First Search explores the deepest node first using a stack, which uses less memory but is not generally optimal and can get trapped in deep branches.

## If asked “What is knowledge representation?”

> Knowledge representation is the theory and practice of encoding knowledge in a form that allows a computer system to store, interpret, reason with, and apply that knowledge effectively.

## If asked “What is backpropagation?”

> Backpropagation is a supervised learning algorithm for multilayer neural networks in which the output error is propagated backward through the network to update the connection weights and reduce future error.

## If asked “How do genetic algorithms work?”

> Genetic algorithms begin with a population of encoded candidate solutions, evaluate their fitness, select promising parents, generate offspring through crossover and mutation, and repeat this evolutionary cycle until a satisfactory solution is found.

## If asked “What are ethical issues in AI?”

> The major ethical issues in AI include bias and discrimination, privacy violations, lack of transparency and explainability, weak accountability, security risks, and the harmful misuse of AI-generated outputs.

---

# FINAL PRIORITY PLAN FOR TONIGHT

## Tier 1: Must know

- search algorithms
- AI definitions/history/Turing test
- GA terms and roulette wheel
- knowledge representation
- neural networks/backprop

## Tier 2: Strongly likely

- ML basics
- expert systems
- first-order logic
- best-first / hill climbing / A\*

## Tier 3: High modern relevance

- NLP
- conversational AI
- ethics/governance
- AI in business applications

## Smart exam strategy

- For **2–3 mark questions**, give a precise definition plus one example.
- For **comparison questions**, use a table or paired bullets.
- For **algorithm questions**, write numbered steps.
- For **worked examples**, show every stage neatly.
- For **essay questions**, use:
  - definition
  - explanation
  - example
  - business relevance
  - short concluding line
