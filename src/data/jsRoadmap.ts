import { Phase } from "./html5Roadmap";

export const JS_ROADMAP: Phase[] = [
  {
    id: "js-phase-1",
    phaseNumber: 1,
    title: "JavaScript Core Fundamentals & Basics",
    badge: "PHASE 1",
    topics: [
      {
        id: "js-topic-1",
        topicNumber: 1,
        title: "Environment Setup & Language Fundamentals",
        description: "V8 JavaScript engine runtime, execution lifecycle, variable declarations, primitive/reference types, and operators.",
        subtopics: [
          {
            id: "js-sub-1-1",
            subtopicNumber: "1.1",
            title: "JS Execution & Inclusion Mechanics",
            tagBadges: ["V8 Engine", "JIT Compilation", "<script>", "async vs defer", "console.log/table"],
            codeSnippet: `<div style="background: #0f172a; padding: 12px; border-radius: 8px; border: 1px solid #1e293b;">
  <p style="margin: 0 0 8px 0; font-size: 12px; color: #94a3b8;">
    Click the buttons below to trigger real-time V8 console logging methods:
  </p>
  <div style="display: flex; gap: 8px; flex-wrap: wrap;">
    <button onclick="runConsoleLog()" style="background: #38bdf8; color: #020617; font-weight: bold;">console.log()</button>
    <button onclick="runConsoleWarn()" style="background: #f59e0b; color: #020617; font-weight: bold;">console.warn()</button>
    <button onclick="runConsoleTable()" style="background: #10b981; color: #020617; font-weight: bold;">console.table()</button>
  </div>
</div>

<script>
  function runConsoleLog() {
    console.log("V8 JIT Engine:", "Compiled and executed in microseconds!");
  }
  function runConsoleWarn() {
    console.warn("Notice:", "defer preserves DOM execution order; async runs as soon as downloaded.");
  }
  function runConsoleTable() {
    console.table([
      { feature: "async", pausesHTML: false, executionOrder: "as-ready" },
      { feature: "defer", pausesHTML: false, executionOrder: "guaranteed" }
    ]);
  }
  // Auto-run once on load
  console.log("JavaScript Engine initialized. Ready to execute!");
</script>`,
            interactiveNote: "`defer` downloads script in parallel and executes after DOM parsing; `async` executes immediately once downloaded."
          },
          {
            id: "js-sub-1-2",
            subtopicNumber: "1.2",
            title: "Variables & Data Types",
            tagBadges: ["var vs let vs const", "Scope (Block/Function)", "Primitives", "Reference Types", "typeof", "Type Coercion"],
            codeSnippet: `<div style="background: #0f172a; padding: 12px; border-radius: 8px;">
  <button onclick="testVariables()" style="background: #eab308; color: #0f172a; font-weight: bold;">
    &#9654; Inspect Variables &amp; Types
  </button>
</div>

<script>
  function testVariables() {
    // 1. Primitive data types
    const text = "ES6 JavaScript";       // String
    const count = 42;                     // Number
    const isActive = true;                // Boolean
    const emptyVal = null;                // Null
    let unassigned;                       // Undefined
    const bigNum = 9007199254740991n;     // BigInt
    const uniqueId = Symbol("id");        // Symbol

    console.log("typeof text:", typeof text);
    console.log("typeof count:", typeof count);
    console.log("typeof isActive:", typeof isActive);
    console.log("typeof emptyVal (historical quirk):", typeof emptyVal);
    console.log("typeof unassigned:", typeof unassigned);
    console.log("typeof bigNum:", typeof bigNum);

    // 2. Type coercion vs conversion
    console.log("'5' + 2 (Coercion to string):", '5' + 2);
    console.log("'5' - 2 (Coercion to number):", '5' - 2);
    console.log("Number('42') === 42:", Number('42') === 42);
  }
</script>`,
            interactiveNote: "`const` prevents reassignment of variable identifier; `let` provides block scope; avoid legacy `var`."
          },
          {
            id: "js-sub-1-3",
            subtopicNumber: "1.3",
            title: "Operators & Expressions",
            tagBadges: ["Arithmetic", "Strict Equality (===)", "Ternary Operator", "Nullish (??)", "Logical Assignment"],
            codeSnippet: `<div style="background: #0f172a; padding: 12px; border-radius: 8px;">
  <button onclick="testOperators()" style="background: #6366f1; color: white; font-weight: bold;">
    &#9654; Run Modern Operators Demo
  </button>
</div>

<script>
  function testOperators() {
    // 1. Strict equality (===) vs Loose equality (==)
    console.log("0 == false (Loose equality):", 0 == false);
    console.log("0 === false (Strict type check):", 0 === false);

    // 2. Ternary Operator
    const score = 85;
    const grade = score >= 80 ? "Pass (A)" : "Try Again";
    console.log("Ternary output:", grade);

    // 3. Nullish Coalescing (??): checks specifically for null or undefined
    const userInput = 0; // 0 is falsy, but valid numeric value!
    const withOr = userInput || 100; // || replaces 0 with 100
    const withNullish = userInput ?? 100; // ?? preserves 0!
    console.log("0 || 100:", withOr, "(Overwrote 0)");
    console.log("0 ?? 100:", withNullish, "(Correctly kept 0)");
  }
</script>`,
            interactiveNote: "The `??` operator only falls back on `null` or `undefined`, unlike `||` which falls back on any falsy value (0, '', false)."
          }
        ]
      },
      {
        id: "js-topic-2",
        topicNumber: 2,
        title: "Control Flow & Loops",
        description: "Conditional logic branches (if/else, switch), truthy/falsy evaluation, and modern collection iteration (for...of, for...in).",
        subtopics: [
          {
            id: "js-sub-2-1",
            subtopicNumber: "2.1",
            title: "Conditional Statements",
            tagBadges: ["if...else", "switch...case", "Truthy & Falsy", "Guard Clauses"],
            codeSnippet: `<div style="background: #0f172a; padding: 12px; border-radius: 8px;">
  <button onclick="checkConditions()" style="background: #ec4899; color: white; font-weight: bold;">
    &#9654; Test Switch &amp; Truthy Logic
  </button>
</div>

<script>
  function checkConditions() {
    // 1. Truthy & Falsy check
    // Falsy values: false, 0, "", null, undefined, NaN
    const values = ["hello", "", 0, 42, null, [], {}];
    values.forEach(val => {
      console.log(JSON.stringify(val), Boolean(val) ? "is Truthy" : "is Falsy");
    });

    // 2. Switch statement
    const role = "admin";
    switch(role) {
      case "admin":
        console.log("Switch Result: Full Administrator Permissions Granted");
        break;
      case "editor":
        console.log("Switch Result: Edit Permissions");
        break;
      default:
        console.log("Switch Result: Read-only Access");
    }
  }
</script>`,
            interactiveNote: "Empty arrays `[]` and empty objects `{}` are truthy in JavaScript!"
          },
          {
            id: "js-sub-2-2",
            subtopicNumber: "2.2",
            title: "Looping & Iteration",
            tagBadges: ["for", "while", "do...while", "for...in (Objects)", "for...of (Iterables)", "break/continue"],
            codeSnippet: `<div style="background: #0f172a; padding: 12px; border-radius: 8px;">
  <button onclick="runLoopDemos()" style="background: #14b8a6; color: white; font-weight: bold;">
    &#9654; Compare for...of vs for...in
  </button>
</div>

<script>
  function runLoopDemos() {
    const techStack = ["HTML5", "CSS3", "JavaScript"];
    console.log("--- 1. for...of Loop (Iterates Array Values) ---");
    for (const tech of techStack) {
      console.log("Tech item:", tech);
    }

    const devProfile = { name: "Alex", role: "Frontend Dev", level: "Senior" };
    console.log("--- 2. for...in Loop (Iterates Object Keys) ---");
    for (const key in devProfile) {
      console.log(key + ":", devProfile[key]);
    }
  }
</script>`,
            interactiveNote: "Rule of thumb: Use `for...of` for Arrays/Maps/Sets (values); use `for...in` for Object property keys."
          }
        ]
      },
      {
        id: "js-topic-3",
        topicNumber: 3,
        title: "Functions & Scope Mechanics",
        description: "Function declarations, expressions, modern ES6 arrow functions, lexical this, closures, and higher-order functions.",
        subtopics: [
          {
            id: "js-sub-3-1",
            subtopicNumber: "3.1",
            title: "Function Fundamentals",
            tagBadges: ["Declarations vs Expressions", "Default Parameters", "Rest Parameters (...args)", "Return statement"],
            codeSnippet: `<div style="background: #0f172a; padding: 12px; border-radius: 8px;">
  <button onclick="demoFunctions()" style="background: #8b5cf6; color: white; font-weight: bold;">
    &#9654; Test Rest Params &amp; Defaults
  </button>
</div>

<script>
  // Function declaration with default parameter
  function greet(name = "Developer") {
    return "Hello, " + name + "!";
  }

  // Function with Rest parameters (...args gathers arbitrary arguments)
  function sumAll(...numbers) {
    return numbers.reduce((total, n) => total + n, 0);
  }

  function demoFunctions() {
    console.log(greet());
    console.log(greet("Antigravity"));
    console.log("sumAll(10, 20, 30, 40):", sumAll(10, 20, 30, 40));
  }
</script>`,
            interactiveNote: "Rest parameters `(...args)` bundle multiple parameters into a real Array instance."
          },
          {
            id: "js-sub-3-2",
            subtopicNumber: "3.2",
            title: "Modern Arrow Functions",
            tagBadges: ["() => {}", "Implicit Return", "Lexical 'this' Binding", "Concise Syntax"],
            codeSnippet: `<div style="background: #0f172a; padding: 12px; border-radius: 8px;">
  <button onclick="demoArrowFunctions()" style="background: #f97316; color: white; font-weight: bold;">
    &#9654; Run Arrow Function Demo
  </button>
</div>

<script>
  // One-line implicit return
  const multiply = (a, b) => a * b;
  const square = x => x * x;

  // Lexical 'this' binding inside an object timer
  const counterObj = {
    count: 0,
    startTimer() {
      // Arrow function does NOT create its own 'this', it captures parent scope 'this'!
      setTimeout(() => {
        this.count += 5;
        console.log("Lexical this counter updated:", this.count);
      }, 300);
    }
  };

  function demoArrowFunctions() {
    console.log("multiply(6, 7):", multiply(6, 7));
    console.log("square(9):", square(9));
    counterObj.startTimer();
  }
</script>`,
            interactiveNote: "Arrow functions do not bind their own `this`, `arguments`, or `super`, inheriting them lexically from outer scope."
          },
          {
            id: "js-sub-3-3",
            subtopicNumber: "3.3",
            title: "Advanced Function Concepts",
            tagBadges: ["IIFE", "Hoisting", "Closures & Lexical Scope", "Higher-Order Functions"],
            codeSnippet: `<div style="background: #0f172a; padding: 12px; border-radius: 8px;">
  <button onclick="demoClosures()" style="background: #0284c7; color: white; font-weight: bold;">
    &#9654; Execute Closure Counter
  </button>
</div>

<script>
  // Closure Factory: creates private enclosed state
  function createCounter(initialValue = 0) {
    let count = initialValue; // Private variable trapped inside closure!
    return {
      increment() { count++; return count; },
      decrement() { count--; return count; },
      get() { return count; }
    };
  }

  const counterA = createCounter(10);

  function demoClosures() {
    console.log("Initial count:", counterA.get());
    console.log("After increment:", counterA.increment());
    console.log("After increment again:", counterA.increment());
  }
</script>`,
            interactiveNote: "A closure is the combination of a function bundled together with references to its surrounding lexical state."
          }
        ]
      }
    ]
  },
  {
    id: "js-phase-2",
    phaseNumber: 2,
    title: "Data Structures & Modern Object-Oriented JS",
    badge: "PHASE 2",
    topics: [
      {
        id: "js-topic-4",
        topicNumber: 4,
        title: "Arrays & Modern Array Methods",
        description: "Array data structures, mutating vs immutable operations, and functional iterators (map, filter, reduce, find).",
        subtopics: [
          {
            id: "js-sub-4-1",
            subtopicNumber: "4.1",
            title: "Array Manipulation Basics",
            tagBadges: ["push / pop", "shift / unshift", "splice", "slice (Immutable)", "includes / indexOf"],
            codeSnippet: `<div style="background: #0f172a; padding: 12px; border-radius: 8px;">
  <button onclick="runArrayBasics()" style="background: #10b981; color: white; font-weight: bold;">
    &#9654; Run Array Methods Demo
  </button>
</div>

<script>
  function runArrayBasics() {
    const fruits = ["Apple", "Banana", "Orange"];
    
    // Mutating methods
    fruits.push("Mango"); // Add to end
    fruits.unshift("Strawberry"); // Add to start
    console.log("Mutated array (push/unshift):", fruits);

    // Non-mutating slice (returns clean copy)
    const topTwo = fruits.slice(0, 2);
    console.log("Non-mutating slice(0, 2):", topTwo);

    // Searching
    console.log("Includes 'Banana'?:", fruits.includes("Banana"));
    console.log("IndexOf 'Mango':", fruits.indexOf("Mango"));
  }
</script>`,
            interactiveNote: "`slice()` returns a shallow copy without modifying original; `splice()` mutates the source array."
          },
          {
            id: "js-sub-4-2",
            subtopicNumber: "4.2",
            title: "Functional Array Iteration (ES6+)",
            tagBadges: ["map()", "filter()", "reduce()", "find()", "findIndex()", "some() & every()"],
            codeSnippet: `<div style="background: #0f172a; padding: 12px; border-radius: 8px;">
  <button onclick="runFunctionalArray()" style="background: #6366f1; color: white; font-weight: bold;">
    &#9654; Run map / filter / reduce Pipeline
  </button>
</div>

<script>
  function runFunctionalArray() {
    const products = [
      { name: "Laptop", price: 1000, inStock: true },
      { name: "Keyboard", price: 80, inStock: true },
      { name: "Monitor", price: 300, inStock: false },
      { name: "Mouse", price: 40, inStock: true }
    ];

    // 1. Filter: select in-stock products
    const inStockItems = products.filter(p => p.inStock);
    console.log("filter(inStock):", inStockItems.map(p => p.name));

    // 2. Map: transform to price with 10% tax
    const pricesWithTax = products.map(p => ({ item: p.name, total: p.price * 1.1 }));
    console.log("map(prices with 10% tax):", pricesWithTax);

    // 3. Reduce: compute inventory sum
    const grandTotal = inStockItems.reduce((acc, curr) => acc + curr.price, 0);
    console.log("reduce(grand total of in-stock items): $" + grandTotal);
  }
</script>`,
            interactiveNote: "Array chaining: `arr.filter().map().reduce()` forms the backbone of modern functional JavaScript."
          }
        ]
      },
      {
        id: "js-topic-5",
        topicNumber: 5,
        title: "Objects & ES6 Data Structures",
        description: "Object literals, dot/bracket notation, Object static utilities, spread operators, Sets, and Maps.",
        subtopics: [
          {
            id: "js-sub-5-1",
            subtopicNumber: "5.1",
            title: "Object Fundamentals",
            tagBadges: ["Object Literals", "Spread (...) operator", "Object.keys()", "Object.values()", "Object.entries()", "Object.freeze()"],
            codeSnippet: `<div style="background: #0f172a; padding: 12px; border-radius: 8px;">
  <button onclick="runObjectDemo()" style="background: #f59e0b; color: #020617; font-weight: bold;">
    &#9654; Test Object Manipulation
  </button>
</div>

<script>
  function runObjectDemo() {
    const user = { id: 101, username: "dev_coder", role: "Engineer" };
    
    // Spread merge
    const userWithPreferences = { ...user, theme: "dark", notifications: true };
    console.log("Spread Merged Object:", userWithPreferences);

    // Static Utilities
    console.log("Object.keys():", Object.keys(user));
    console.log("Object.values():", Object.values(user));
    console.log("Object.entries():", Object.entries(user));

    // Object.freeze makes an object immutable
    const frozen = Object.freeze({ config: "locked" });
    try { frozen.config = "changed"; } catch(e) {}
    console.log("Frozen object remains:", frozen.config);
  }
</script>`,
            interactiveNote: "Object.entries() turns `{ a: 1, b: 2 }` into `[['a', 1], ['b', 2]]` for easy looping."
          },
          {
            id: "js-sub-5-2",
            subtopicNumber: "5.2",
            title: "ES6+ Collections & Destructuring",
            tagBadges: ["Destructuring", "Optional Chaining (?.)", "Set (Unique Values)", "Map (Key-Value Pairs)"],
            codeSnippet: `<div style="background: #0f172a; padding: 12px; border-radius: 8px;">
  <button onclick="runCollectionsDemo()" style="background: #ec4899; color: white; font-weight: bold;">
    &#9654; Test Destructuring, Set &amp; Map
  </button>
</div>

<script>
  function runCollectionsDemo() {
    // 1. Destructuring with renaming and fallback defaults
    const config = { port: 3000, env: "production" };
    const { port, env, host = "localhost" } = config;
    console.log("Destructured values:", { port, env, host });

    // 2. Optional Chaining (?.) protects against runtime null errors
    const nestedData = { user: { profile: null } };
    console.log("nestedData.user?.profile?.avatar:", nestedData.user?.profile?.avatar);

    // 3. Set: guarantees unique values
    const duplicateList = [1, 2, 2, 3, 4, 4, 5];
    const uniqueSet = [...new Set(duplicateList)];
    console.log("Deduplicated via Set:", uniqueSet);

    // 4. Map: keys can be any object or function
    const map = new Map();
    const keyObj = { id: 1 };
    map.set(keyObj, "Assigned to an Object Key!");
    console.log("Map value via object reference:", map.get(keyObj));
  }
</script>`,
            interactiveNote: "`?.` halts evaluation and returns `undefined` instead of throwing `TypeError: Cannot read properties of undefined`."
          }
        ]
      },
      {
        id: "js-topic-6",
        topicNumber: 6,
        title: "OOP & Prototype Mechanics",
        description: "Constructor functions, prototype chains, ES6 classes, class inheritance (extends, super), and private fields (#).",
        subtopics: [
          {
            id: "js-sub-6-1",
            subtopicNumber: "6.1",
            title: "Object-Oriented JavaScript",
            tagBadges: ["Constructor Functions", "'new' Keyword", "prototype chain", "class syntax"],
            codeSnippet: `<div style="background: #0f172a; padding: 12px; border-radius: 8px;">
  <button onclick="runOOPBasics()" style="background: #a855f7; color: white; font-weight: bold;">
    &#9654; Instantiate ES6 Class
  </button>
</div>

<script>
  class Vehicle {
    constructor(make, model) {
      this.make = make;
      this.model = model;
    }

    startEngine() {
      return this.make + " " + this.model + " engine started! 🏎️";
    }
  }

  function runOOPBasics() {
    const car = new Vehicle("Tesla", "Model 3");
    console.log(car.startEngine());
    console.log("car instanceof Vehicle:", car instanceof Vehicle);
  }
</script>`,
            interactiveNote: "ES6 `class` syntax is syntactical sugar built on top of JavaScript's prototypal inheritance model."
          },
          {
            id: "js-sub-6-2",
            subtopicNumber: "6.2",
            title: "Class Features & Inheritance",
            tagBadges: ["extends", "super()", "static methods", "Private Fields (#field)"],
            codeSnippet: `<div style="background: #0f172a; padding: 12px; border-radius: 8px;">
  <button onclick="runInheritanceDemo()" style="background: #06b6d4; color: #020617; font-weight: bold;">
    &#9654; Run Subclass &amp; Private Field
  </button>
</div>

<script>
  class BankAccount {
    #balance = 0; // Private field, cannot be accessed outside the class!

    constructor(owner, initialDeposit) {
      this.owner = owner;
      this.#balance = initialDeposit;
    }

    deposit(amount) {
      this.#balance += amount;
      return "Deposited: $" + amount + ". New Balance: $" + this.#balance;
    }

    getBalance() {
      return this.#balance;
    }

    static getBankInfo() {
      return "Global Bank Inc. &bull; FDIC Insured";
    }
  }

  function runInheritanceDemo() {
    const acc = new BankAccount("Sarah", 500);
    console.log(BankAccount.getBankInfo());
    console.log(acc.deposit(250));
    console.log("Checking balance via getter:", "$" + acc.getBalance());
  }
</script>`,
            interactiveNote: "Private fields `#field` provide true language-level encapsulation inaccessible outside the class body."
          }
        ]
      }
    ]
  },
  {
    id: "js-phase-3",
    phaseNumber: 3,
    title: "Browser DOM, Events & Asynchronous JavaScript",
    badge: "PHASE 3",
    topics: [
      {
        id: "js-topic-7",
        topicNumber: 7,
        title: "DOM Manipulation & Web Browser Events",
        description: "Selecting elements, DOM traversal, updating innerHTML/classList, event listeners, and event bubbling.",
        subtopics: [
          {
            id: "js-sub-7-1",
            subtopicNumber: "7.1",
            title: "Selecting & Traversing DOM",
            tagBadges: ["getElementById", "querySelector", "querySelectorAll", "parentNode", "children", "nextElementSibling"],
            codeSnippet: `<div style="background: #0f172a; padding: 12px; border-radius: 8px;">
  <ul id="parent-menu" style="margin: 0 0 10px 0; padding-left: 18px; color: #cbd5e1; font-size: 12px;">
    <li class="menu-item active">Home Item</li>
    <li class="menu-item">Dashboard</li>
    <li class="menu-item">Settings</li>
  </ul>
  <button onclick="traverseDOM()" style="background: #3b82f6; color: white; font-weight: bold;">
    &#9654; Query &amp; Traverse Elements
  </button>
</div>

<script>
  function traverseDOM() {
    const activeItem = document.querySelector(".menu-item.active");
    console.log("querySelector active text:", activeItem.textContent);

    const nextSibling = activeItem.nextElementSibling;
    console.log("nextElementSibling text:", nextSibling.textContent);

    const allItems = document.querySelectorAll(".menu-item");
    console.log("querySelectorAll count:", allItems.length);
  }
</script>`,
            interactiveNote: "`querySelector` returns the first matching element; `querySelectorAll` returns a static NodeList."
          },
          {
            id: "js-sub-7-2",
            subtopicNumber: "7.2",
            title: "Modifying DOM Elements",
            tagBadges: ["innerHTML / textContent", "setAttribute", "classList.toggle", "createElement", "appendChild"],
            codeSnippet: `<div id="dom-target-box" style="background: #0f172a; padding: 12px; border-radius: 8px; border: 1px solid #1e293b;">
  <span id="label-text" style="color: #94a3b8; font-size: 12px;">Original DOM Content</span>
  <div id="dynamic-list" style="margin-top: 8px; display: flex; gap: 6px; flex-wrap: wrap;"></div>
  
  <div style="margin-top: 10px; display: flex; gap: 6px;">
    <button onclick="addBadgeItem()" style="background: #10b981; color: white; font-weight: bold;">+ Append Element</button>
    <button onclick="toggleCardTheme()" style="background: #6366f1; color: white; font-weight: bold;">Toggle Theme</button>
  </div>
</div>

<script>
  let badgeCount = 1;
  function addBadgeItem() {
    const container = document.getElementById("dynamic-list");
    const badge = document.createElement("span");
    badge.textContent = "Badge #" + badgeCount++;
    badge.style.cssText = "background: rgba(16,185,129,0.2); border: 1px solid #10b981; color: #6ee7b7; padding: 2px 8px; border-radius: 12px; font-size: 11px;";
    container.appendChild(badge);
    console.log("Created & appended DOM element:", badge.textContent);
  }

  function toggleCardTheme() {
    const box = document.getElementById("dom-target-box");
    const isDark = box.style.background === "rgb(30, 27, 75)";
    box.style.background = isDark ? "#0f172a" : "#1e1b4b";
    box.style.borderColor = isDark ? "#1e293b" : "#6366f1";
    console.log("Card theme toggled dynamically.");
  }
</script>`,
            interactiveNote: "`createElement` + `appendChild` ensures safe node insertion without parsing overhead from `innerHTML`."
          },
          {
            id: "js-sub-7-3",
            subtopicNumber: "7.3",
            title: "Event Handling",
            tagBadges: ["addEventListener", "click / keydown / input", "e.target", "e.preventDefault()", "Event Bubbling", "stopPropagation"],
            codeSnippet: `<div id="parent-bubbler" style="background: #1e1b4b; padding: 12px; border-radius: 8px; border: 1px solid #6366f1;">
  <p style="margin: 0 0 8px 0; font-size: 11px; color: #a5b4fc;">Parent Container (Listens for bubbled events)</p>
  <button id="child-trigger-btn" style="background: #ec4899; color: white; font-weight: bold;">
    Trigger Button (Child)
  </button>
</div>

<script>
  const parent = document.getElementById("parent-bubbler");
  const child = document.getElementById("child-trigger-btn");

  parent.addEventListener("click", (e) => {
    console.log("Parent listener caught event! Target was:", e.target.tagName);
  });

  child.addEventListener("click", (e) => {
    console.log("Child button clicked directly!");
    // Uncommenting below stops propagation up to parent:
    // e.stopPropagation();
  });
</script>`,
            interactiveNote: "Events trigger on the innermost element first, then bubble upwards through all ancestor elements."
          }
        ]
      },
      {
        id: "js-topic-8",
        topicNumber: 8,
        title: "Asynchronous JavaScript & Network Requests",
        description: "Event loop call stack, callback queue, microtasks, Promise chaining, async/await, and Fetch API.",
        subtopics: [
          {
            id: "js-sub-8-1",
            subtopicNumber: "8.1",
            title: "Asynchronous Basics",
            tagBadges: ["Event Loop", "Call Stack", "Task Queue", "Microtask Queue", "setTimeout / setInterval"],
            codeSnippet: `<div style="background: #0f172a; padding: 12px; border-radius: 8px;">
  <button onclick="testEventLoop()" style="background: #eab308; color: #020617; font-weight: bold;">
    &#9654; Test Event Loop Order
  </button>
</div>

<script>
  function testEventLoop() {
    console.log("1. Synchronous Code");

    setTimeout(() => {
      console.log("4. setTimeout Callback (Task Queue / MacroTask)");
    }, 0);

    Promise.resolve().then(() => {
      console.log("3. Promise .then (Microtask Queue: Runs before setTimeout!)");
    });

    console.log("2. Synchronous Code Done");
  }
</script>`,
            interactiveNote: "Order of execution: Call Stack -> Microtask Queue (Promises) -> Task/Callback Queue (setTimeout)."
          },
          {
            id: "js-sub-8-2",
            subtopicNumber: "8.2",
            title: "Promises & Async/Await",
            tagBadges: ["new Promise", "resolve / reject", ".then() / .catch()", "async / await", "try...catch", "Promise.all"],
            codeSnippet: `<div style="background: #0f172a; padding: 12px; border-radius: 8px;">
  <button onclick="runAsyncAwaitDemo()" style="background: #8b5cf6; color: white; font-weight: bold;">
    &#9654; Run async / await with try...catch
  </button>
</div>

<script>
  // Fake asynchronous network delay simulation
  function simulateServerRequest(id) {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve({ data: "Server Payload #" + id, timestamp: new Date().toLocaleTimeString() });
      }, 400);
    });
  }

  async function runAsyncAwaitDemo() {
    console.log("Initiating asynchronous request...");
    try {
      const response = await simulateServerRequest(101);
      console.log("Promise Resolved:", response);
      
      // Parallel requests via Promise.all
      console.log("Executing Promise.all parallel batch...");
      const results = await Promise.all([
        simulateServerRequest(201),
        simulateServerRequest(202)
      ]);
      console.log("Promise.all Finished Batch:", results.map(r => r.data));
    } catch(err) {
      console.error("Caught error in async task:", err);
    }
  }
</script>`,
            interactiveNote: "`async/await` allows writing asynchronous non-blocking code that reads sequentially like synchronous code."
          },
          {
            id: "js-sub-8-3",
            subtopicNumber: "8.3",
            title: "Fetch API & AJAX",
            tagBadges: ["fetch()", "GET Request", "POST Request", "JSON.stringify()", "JSON.parse()", "Headers"],
            codeSnippet: `<div style="background: #0f172a; padding: 12px; border-radius: 8px;">
  <button onclick="runFetchDemo()" style="background: #06b6d4; color: #020617; font-weight: bold;">
    &#9654; Fetch Real API Data
  </button>
</div>

<script>
  async function runFetchDemo() {
    console.log("Sending GET request to JSONPlaceholder API...");
    try {
      const response = await fetch("https://jsonplaceholder.typicode.com/todos/1");
      if (!response.ok) throw new Error("HTTP Status: " + response.status);
      
      const todo = await response.json();
      console.log("Fetched API JSON Response:", todo);
      console.log("Todo Title:", todo.title);
      console.log("Completed status:", todo.completed);
    } catch(error) {
      console.error("Fetch failed:", error.message);
    }
  }
</script>`,
            interactiveNote: "`fetch()` returns a Promise that resolves with a Response object; use `await response.json()` to parse payload."
          }
        ]
      },
      {
        id: "js-topic-9",
        topicNumber: 9,
        title: "Web APIs & Client Storage",
        description: "Client-side persistence (localStorage, sessionStorage, cookies) and browser hardware APIs (Geolocation, Drag & Drop).",
        subtopics: [
          {
            id: "js-sub-9-1",
            subtopicNumber: "9.1",
            title: "Browser Storage APIs",
            tagBadges: ["localStorage", "sessionStorage", "setItem / getItem", "removeItem", "JSON Persistence"],
            codeSnippet: `<div style="background: #0f172a; padding: 12px; border-radius: 8px;">
  <div style="display: flex; gap: 6px; margin-bottom: 8px;">
    <button onclick="saveStorageData()" style="background: #10b981; color: white; font-weight: bold;">Save to localStorage</button>
    <button onclick="readStorageData()" style="background: #6366f1; color: white; font-weight: bold;">Read localStorage</button>
    <button onclick="clearStorageData()" style="background: #ef4444; color: white; font-weight: bold;">Clear</button>
  </div>
</div>

<script>
  function saveStorageData() {
    const profile = { user: "Developer", theme: "Dark Glass", timestamp: Date.now() };
    localStorage.setItem("webdev_profile", JSON.stringify(profile));
    console.log("Saved serialized JSON to localStorage!");
  }

  function readStorageData() {
    const raw = localStorage.getItem("webdev_profile");
    if (raw) {
      console.log("Retrieved from localStorage:", JSON.parse(raw));
    } else {
      console.warn("No item found in localStorage. Click 'Save' first!");
    }
  }

  function clearStorageData() {
    localStorage.removeItem("webdev_profile");
    console.log("localStorage item cleared.");
  }
</script>`,
            interactiveNote: "localStorage persists permanently across browser restarts; sessionStorage only survives while the tab remains open."
          },
          {
            id: "js-sub-9-2",
            subtopicNumber: "9.2",
            title: "Modern Native Browser APIs",
            tagBadges: ["Geolocation API", "navigator.clipboard", "Drag & Drop", "ES6 Modules (import/export)"],
            codeSnippet: `<div style="background: #0f172a; padding: 12px; border-radius: 8px;">
  <div style="display: flex; gap: 8px; flex-wrap: wrap;">
    <button onclick="copyToClipboard()" style="background: #38bdf8; color: #020617; font-weight: bold;">
      &#128203; Test Clipboard API
    </button>
    <button onclick="queryGeolocation()" style="background: #a855f7; color: white; font-weight: bold;">
      &#127757; Query Geolocation API
    </button>
  </div>
</div>

<script>
  async function copyToClipboard() {
    try {
      await navigator.clipboard.writeText("WebDev Hub - Master JavaScript ES6+");
      console.log("Text copied to system clipboard via navigator.clipboard!");
    } catch(err) {
      console.error("Clipboard permission required:", err);
    }
  }

  function queryGeolocation() {
    if (!navigator.geolocation) {
      console.warn("Geolocation not supported by this browser.");
      return;
    }
    console.log("Querying navigator.geolocation...");
    navigator.geolocation.getCurrentPosition(
      (pos) => {
        console.log("Coordinates acquired:", {
          latitude: pos.coords.latitude.toFixed(4),
          longitude: pos.coords.longitude.toFixed(4)
        });
      },
      (err) => {
        console.warn("Geolocation prompt was dismissed or permission denied:", err.message);
      }
    );
  }
</script>`,
            interactiveNote: "Modern Web APIs provide direct access to device hardware, clipboards, storage, and sensors through JavaScript."
          }
        ]
      }
    ]
  }
];

export const JS_INDEXED_TAGS = Array.from(
  new Set(
    JS_ROADMAP.flatMap((phase) =>
      phase.topics.flatMap((topic) =>
        topic.subtopics.flatMap((sub) => sub.tagBadges)
      )
    )
  )
).sort();
