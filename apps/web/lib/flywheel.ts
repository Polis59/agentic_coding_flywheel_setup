// ============================================================
// AGENTIC CODING FLYWHEEL - Comprehensive Data Model
// These 8 tools form a self-reinforcing ecosystem for multi-agent
// coding workflows. Each tool enhances the others.
// ============================================================

export type FlywheelTool = {
  id: string;
  name: string;
  shortName: string;
  href: string;
  icon: string;
  color: string;
  tagline: string;
  description: string;
  deepDescription: string;
  connectsTo: string[];
  connectionDescriptions: Record<string, string>;
  stars?: number;
  demoUrl?: string;
  features: string[];
  cliCommands?: string[];
  installCommand?: string;
  language: string;
};

export const flywheelTools: FlywheelTool[] = [
  {
    id: "ntm",
    name: "Named Tmux Manager",
    shortName: "NTM",
    href: "https://github.com/Dicklesworthstone/ntm",
    icon: "LayoutGrid",
    color: "from-sky-400 to-blue-500",
    tagline: "Multi-agent command center",
    description:
      "Transform tmux into a multi-agent command center. Spawn named agent panes, broadcast prompts to specific agent types, capture outputs with regex filtering, and manage persistent SSH-compatible sessions.",
    deepDescription:
      "NTM orchestrates multiple AI coding agents (Claude, Codex, Gemini) in parallel within tmux sessions. Features include: pane naming with type classification (cc/cod/gmi), broadcasting prompts with variant filtering, command palette TUI with fuzzy search and categories, interactive dashboard with agent color coding, configurable hooks (pre/post-spawn, pre/post-send), robot mode for automation (--robot-status, --robot-plan), session persistence across SSH disconnects, and deep Agent Mail integration for inter-agent messaging.",
    connectsTo: ["slb", "mail", "cass", "caam"],
    connectionDescriptions: {
      slb: "Routes dangerous commands through SLB safety checks before execution",
      mail: "Spawned agents auto-register and coordinate via Agent Mail threads",
      cass: "All agent session history indexed for instant cross-agent search",
      caam: "Quick-switches between API keys when spawning new agent instances",
    },
    stars: 16,
    features: [
      "Spawn Claude/Codex/Gemini in named panes with `ntm spawn --cc=3 --cod=2`",
      "Broadcast prompts to agent types: `ntm send --cc 'prompt'`",
      "Command palette TUI with fuzzy search, categories, and 1-9 quick-select",
      "Real-time dashboard showing agent status with Catppuccin color themes",
      "Robot mode: `--robot-status`, `--robot-plan`, `--robot-dashboard`",
      "Configurable hooks: pre/post-spawn, pre/post-send, pre/post-shutdown",
    ],
    cliCommands: [
      "ntm spawn <session> --cc=N --cod=N --gmi=N",
      "ntm send <session> --cc 'prompt'",
      "ntm palette [session]",
      "ntm dashboard [session]",
      "ntm mail send <session> --to <agent> 'message'",
    ],
    installCommand:
      "curl -fsSL https://raw.githubusercontent.com/Dicklesworthstone/ntm/main/install.sh | bash",
    language: "Go",
  },
  {
    id: "mail",
    name: "MCP Agent Mail",
    shortName: "Mail",
    href: "https://github.com/Dicklesworthstone/mcp_agent_mail",
    icon: "Mail",
    color: "from-violet-400 to-purple-500",
    tagline: "Gmail for your coding agents",
    description:
      "A complete coordination system for multi-agent workflows. Agents register identities, send/receive GitHub-flavored Markdown messages, search conversation history, and declare advisory file reservations to prevent edit conflicts.",
    deepDescription:
      "MCP Agent Mail is an MCP server (HTTP on port 8765) providing agent coordination primitives. Core concepts: Projects (identified by absolute paths), Agents (adjective+noun names like 'BlueLake'), Messages (GFM markdown with threading), and File Reservations (advisory locks on file paths). Features 20+ MCP tools including ensure_project, register_agent, send_message, reply_message, file_reservation_paths, fetch_inbox, search_messages, and summarize_thread. Git-backed storage provides complete audit trails. Supports contact policies (open/auto/contacts_only/block_all) and cross-project coordination.",
    connectsTo: ["bv", "cm", "slb", "ntm"],
    connectionDescriptions: {
      bv: "Task IDs link mail conversations to Beads issues for context",
      cm: "Shared context and memories accessible across agent sessions",
      slb: "SLB approval requests delivered directly to agent inboxes",
      ntm: "NTM-spawned agents auto-register and coordinate via mail",
    },
    stars: 1015,
    demoUrl: "https://dicklesworthstone.github.io/cass-memory-system-agent-mailbox-viewer/viewer/",
    features: [
      "20+ MCP tools: ensure_project, register_agent, send/reply_message",
      "Advisory file reservations with exclusive/shared modes and TTL",
      "Thread summarization with LLM-powered key points extraction",
      "Git-backed storage for complete audit trails",
      "Contact policies: open, auto, contacts_only, block_all",
      "Macro helpers: macro_start_session, macro_prepare_thread",
    ],
    cliCommands: [
      "am status",
      "am inbox --project /path",
      "ensure_project(human_key='/abs/path')",
      "register_agent(project_key, program, model)",
      "send_message(project_key, sender, to, subject, body_md)",
    ],
    installCommand:
      'curl -fsSL "https://raw.githubusercontent.com/Dicklesworthstone/mcp_agent_mail/main/scripts/install.sh" | bash -s -- --yes',
    language: "Python",
  },
  {
    id: "ubs",
    name: "Ultimate Bug Scanner",
    shortName: "UBS",
    href: "https://github.com/Dicklesworthstone/ultimate_bug_scanner",
    icon: "Bug",
    color: "from-rose-400 to-red-500",
    tagline: "Polyglot static analysis for agents",
    description:
      "Wraps best-in-class static analyzers (ESLint, Ruff, Clippy, golangci-lint, and more) with a consistent JSON interface. Perfect as a pre-commit hook or post-processing step for autonomous agents.",
    deepDescription:
      "UBS v5.0 is an AI-native multi-language static analysis tool supporting 7 languages (JS/TS, Python, Go, Rust, C/C++, Java, Ruby, Swift) with 18 detection categories. Each language has dedicated modules with AST helpers for resource lifecycle tracking, type narrowing, and taint analysis. Features sub-5-second feedback loops, zero configuration, unified JSON/JSONL/SARIF output, baseline comparison for drift detection, and integration hooks for Claude Code, Cursor, Windsurf, and Cline. Supply chain secured with SHA-256 checksums and minisign verification.",
    connectsTo: ["bv", "slb"],
    connectionDescriptions: {
      bv: "Creates Beads issues for discovered bugs with priority rankings",
      slb: "Pre-validates code before risky commits and deployments",
    },
    stars: 91,
    features: [
      "7 languages: JS/TS, Python, Go, Rust, C/C++, Java, Ruby, Swift",
      "18 detection categories: null safety, async bugs, security, memory leaks",
      "Unified output: --format=json|jsonl|sarif",
      "Baseline comparison: --comparison baseline.json --report-json latest.json",
      "AST helpers for resource lifecycle and type narrowing",
      "On-file-write hooks for Claude Code and Cursor",
    ],
    cliCommands: [
      "ubs . --format=json",
      "ubs --ci --fail-on-warning .",
      "ubs --only=python,js src/",
      "ubs --comparison baseline.json --report-json latest.json .",
      "ubs doctor --fix",
    ],
    installCommand:
      'curl -fsSL "https://raw.githubusercontent.com/Dicklesworthstone/ultimate_bug_scanner/master/install.sh" | bash -s -- --easy-mode',
    language: "Bash/Python",
  },
  {
    id: "bv",
    name: "Beads Viewer",
    shortName: "BV",
    href: "https://github.com/Dicklesworthstone/beads_viewer",
    icon: "GitBranch",
    color: "from-emerald-400 to-teal-500",
    tagline: "Graph analytics for task dependencies",
    description:
      "Transforms how agents visualize task dependencies using DAG-based analysis. Features nine graph metrics, robot protocol for AI-ready JSON output, and time-travel diffing across git revisions.",
    deepDescription:
      "Beads Viewer is a production-grade TUI for the Beads issue tracker, treating projects as Directed Acyclic Graphs. Computes 9 graph metrics in two phases: Phase 1 (instant): Degree, Topological Sort, Density; Phase 2 (async with 500ms timeout): PageRank, Betweenness Centrality, HITS, Critical Path, Eigenvector Centrality, K-Core Decomposition. Features 6 view modes (list, kanban board, graph, insights, history, flow matrix), responsive layouts, live reload on beads.jsonl changes, and comprehensive export to Markdown/HTML/SQLite. Robot protocol (--robot-*) provides structured JSON for AI agents.",
    connectsTo: ["mail", "ubs", "cass", "cm"],
    connectionDescriptions: {
      mail: "Task updates trigger mail notifications to relevant agents",
      ubs: "Bug scanner results create blocking issues in the graph",
      cass: "Search prior sessions for context on related tasks",
      cm: "Remembers task patterns and successful solution approaches",
    },
    stars: 546,
    demoUrl: "https://dicklesworthstone.github.io/beads_viewer-pages/",
    features: [
      "9 graph metrics: PageRank, Betweenness, HITS, Critical Path, Eigenvector",
      "6 TUI views: list, kanban, graph, insights, history, flow matrix",
      "Robot protocol: --robot-triage, --robot-plan, --robot-insights",
      "Time-travel diffing: --as-of HEAD~30, --diff-since '30 days ago'",
      "Bead-to-commit correlation with lifecycle event tracking",
      "Export to Markdown, HTML (Cytoscape.js), and SQLite",
    ],
    cliCommands: [
      "bv --robot-triage",
      "bv --robot-plan --label backend",
      "bv --robot-insights --force-full-analysis",
      "bv --diff-since HEAD~100",
      "bv --export-pages ./bv-pages",
    ],
    installCommand:
      'curl -fsSL "https://raw.githubusercontent.com/Dicklesworthstone/beads_viewer/main/install.sh" | bash',
    language: "Go",
  },
  {
    id: "cass",
    name: "Coding Agent Session Search",
    shortName: "CASS",
    href: "https://github.com/Dicklesworthstone/coding_agent_session_search",
    icon: "Search",
    color: "from-cyan-400 to-sky-500",
    tagline: "Instant search across all agents",
    description:
      "A centralized search interface for all your AI coding sessions. Indexes conversation history from Claude Code, Codex, Cursor, Gemini, ChatGPT, and Cline using Tantivy full-text search.",
    deepDescription:
      "CASS (coding-agent-session-search) is a high-performance Rust TUI that unifies session history from 10 agents (Claude Code, Codex, Cline, Gemini CLI, Cursor, OpenCode, ChatGPT, Aider, Pi-Agent, Amp) into a single searchable timeline. Uses Tantivy with edge n-gram indexing for <60ms prefix queries. Features include: three-pane responsive layout, 6 ranking modes (RecentHeavy, Balanced, RelevanceHeavy, MatchQualityHeavy, DateNewest, DateOldest), sharded LRU cache with Bloom filter gating, predictive query warming, remote source sync via SSH/rsync, and robot mode with cursor pagination and token budgeting.",
    connectsTo: ["cm", "ntm", "bv"],
    connectionDescriptions: {
      cm: "Indexes stored memories for instant semantic retrieval",
      ntm: "Searches all NTM-managed agent session histories",
      bv: "Links search results to related Beads tasks",
    },
    stars: 145,
    features: [
      "10 agent formats: Claude Code, Codex, Cursor, Gemini, ChatGPT, Cline, Aider",
      "Tantivy search with edge n-grams for <60ms prefix queries",
      "6 ranking modes combining BM25, recency, and match quality",
      "Three-pane TUI with Vim navigation and 50+ keyboard shortcuts",
      "Robot mode: --robot with cursor pagination and token budgeting",
      "Remote sources via SSH/rsync with path mapping",
    ],
    cliCommands: [
      'cass search "query" --robot --limit 10',
      "cass search --robot-format json --max-tokens 200",
      "cass index --watch",
      "cass sources add user@host --preset macos-defaults",
      "cass timeline --today --json",
    ],
    installCommand:
      "curl -fsSL https://raw.githubusercontent.com/Dicklesworthstone/coding_agent_session_search/main/install.sh | bash -s -- --easy-mode --verify",
    language: "Rust",
  },
  {
    id: "cm",
    name: "CASS Memory System",
    shortName: "CM",
    href: "https://github.com/Dicklesworthstone/cass_memory_system",
    icon: "Brain",
    color: "from-pink-400 to-fuchsia-500",
    tagline: "Persistent memory across sessions",
    description:
      "Implements the Autonomous Cognitive Entity framework to give agents human-like memory. Stores procedural knowledge (how-to playbooks), episodic memory (session histories), and semantic facts.",
    deepDescription:
      "CM implements the ACE (Agentic Context Engineering) framework with a four-stage pipeline: Generator (cm context) → Reflector (cm reflect) → Validator (evidence gate) → Curator (deterministic delta merge). Three memory layers: Episodic (diary entries with session summaries), Working (feedback and tracking), and Procedural (playbook bullets with confidence scoring). Features 90-day decay half-life, 4× harmful weight, multi-iteration reflection with deduplication, evidence validation against cass history, and maturity state machine (candidate → established → proven → deprecated). The Curator deliberately has NO LLM to prevent context collapse.",
    connectsTo: ["mail", "cass", "bv"],
    connectionDescriptions: {
      mail: "Stores conversation summaries for future recall",
      cass: "Semantic search over all stored memories",
      bv: "Remembers task patterns and successful solutions",
    },
    stars: 71,
    demoUrl: "https://dicklesworthstone.github.io/cass-memory-system-agent-mailbox-viewer/viewer/",
    features: [
      "ACE pipeline: Generator → Reflector → Validator → Curator",
      "Playbook bullets with decay (90-day half-life) and 4× harmful weight",
      "5 MCP tools: cm_context, cm_feedback, cm_outcome, memory_search, memory_reflect",
      "Multi-iteration reflection with deduplication",
      "Evidence validation gate against cass session history",
      "Cross-agent enrichment with privacy audit logging",
    ],
    cliCommands: [
      'cm context "task description" --json',
      "cm reflect --days 7 --max-sessions 20",
      "cm feedback --bullet-id b-123 --helpful",
      "cm serve",
      "cm doctor --json",
    ],
    installCommand:
      "curl -fsSL https://raw.githubusercontent.com/Dicklesworthstone/cass_memory_system/main/install.sh | bash -s -- --easy-mode --verify",
    language: "TypeScript",
  },
  {
    id: "caam",
    name: "Coding Agent Account Manager",
    shortName: "CAAM",
    href: "https://github.com/Dicklesworthstone/coding_agent_account_manager",
    icon: "KeyRound",
    color: "from-amber-400 to-orange-500",
    tagline: "Instant auth switching",
    description:
      "Manages multiple API keys and accounts for different coding agents. Switch between Anthropic, OpenAI, and Google credentials instantly without editing config files.",
    deepDescription:
      "CAAM enables sub-100ms account switching for fixed-cost AI subscriptions (Claude Max, GPT Pro, Gemini Ultra) by managing auth file backups locally. Supports 3 providers: Claude Code (~/.claude.json), Codex CLI ($CODEX_HOME/auth.json), and Gemini CLI (~/.gemini/settings.json). Features smart profile rotation using multi-factor scoring (cooldown state, health, recency, plan type), transparent rate limit detection with auto-failover via `caam run`, profile isolation with pseudo-HOME directories, background token refresh daemon, and encrypted export bundles (AES-256-GCM with Argon2id key derivation). All credentials stored with 0600 permissions.",
    connectsTo: ["ntm"],
    connectionDescriptions: {
      ntm: "Provides credentials when NTM spawns new agent instances",
    },
    stars: 12,
    features: [
      "Sub-100ms account switching: caam activate claude bob@gmail.com",
      "Smart rotation: considers cooldown, health, recency, plan type",
      "Transparent failover: caam run claude -- 'prompt' with auto-retry",
      "3 providers: Claude Code, Codex CLI, Gemini CLI",
      "Encrypted bundles: AES-256-GCM with Argon2id (19MB memory-hard)",
      "Background daemon for proactive token refresh",
    ],
    cliCommands: [
      "caam activate claude alice@gmail.com",
      "caam backup claude alice@gmail.com",
      "caam run claude -- 'your prompt'",
      "caam cooldown set claude/alice --minutes 90",
      "caam daemon start",
    ],
    installCommand:
      'curl -fsSL "https://raw.githubusercontent.com/Dicklesworthstone/coding_agent_account_manager/main/install.sh" | bash',
    language: "Go",
  },
  {
    id: "slb",
    name: "Simultaneous Launch Button",
    shortName: "SLB",
    href: "https://github.com/Dicklesworthstone/simultaneous_launch_button",
    icon: "ShieldCheck",
    color: "from-yellow-400 to-amber-500",
    tagline: "Two-person rule for dangerous commands",
    description:
      "Adds safety friction for autonomous agents. Three-tier risk classification, cryptographic command binding with SHA256+HMAC, dynamic quorum based on active agents, and complete audit trails.",
    deepDescription:
      "SLB implements the two-person rule for AI agents running potentially destructive commands. Three-tier risk classification: CRITICAL (2+ approvals, rm -rf /, DROP DATABASE), DANGEROUS (1 approval, git reset --hard), CAUTION (auto-approve after 30s). Commands bound with SHA-256 hash including raw command, CWD, argv, and shell flag. Reviews signed with HMAC-SHA256 using per-session keys. Features include: pattern-based classification with conservative failure modes, self-review protection, different-model enforcement for CRITICAL tier, conflict resolution strategies, and Agent Mail integration for approval notifications. SQLite database provides complete audit trails with transactional integrity.",
    connectsTo: ["mail", "ubs", "ntm"],
    connectionDescriptions: {
      mail: "Approval requests sent as urgent messages to reviewer inboxes",
      ubs: "Pre-flight scans validate code before execution approval",
      ntm: "Coordinates approval quorum across NTM-managed agents",
    },
    stars: 23,
    features: [
      "3-tier risk: CRITICAL (2+ approvals), DANGEROUS (1), CAUTION (auto-30s)",
      "SHA-256 command hash binding (raw + cwd + argv + shell)",
      "HMAC-SHA256 review signatures with per-session keys",
      "Different-model enforcement for CRITICAL tier",
      "Agent Mail notifications for approval requests",
      "SQLite audit trails with transactional integrity",
    ],
    cliCommands: [
      'slb run "rm -rf ./build"',
      "slb approve <request-id> --session-id <id>",
      "slb reject <request-id> --reason '...'",
      'slb patterns test "kubectl delete node"',
      "slb tui",
    ],
    installCommand:
      "curl -fsSL https://raw.githubusercontent.com/Dicklesworthstone/simultaneous_launch_button/main/scripts/install.sh | bash",
    language: "Go",
  },
];

export const flywheelDescription = {
  title: "The Agentic Coding Flywheel",
  subtitle: "Eight tools that work together in a self-reinforcing loop",
  description:
    "Each tool in this ecosystem enhances the others. NTM spawns agents that communicate via Mail, which coordinates with Beads for task tracking. UBS catches bugs, SLB adds safety gates, CM provides persistent memory, CASS lets you search everything, and CAAM manages credentials. The more you use them together, the more powerful they become.",
  philosophy: [
    {
      title: "Unix Philosophy",
      description:
        "Each tool does one thing exceptionally well. They compose together through standard protocols: JSON for data, MCP for coordination, Git for storage.",
    },
    {
      title: "Agent-First Design",
      description:
        "Every tool has --robot mode or JSON output. Designed for AI agents to call programmatically, not just humans at terminals.",
    },
    {
      title: "Self-Reinforcing",
      description:
        "The flywheel effect: each tool makes the others more powerful. NTM spawns agents that use Mail, which coordinates tasks tracked in Beads.",
    },
    {
      title: "Battle-Tested",
      description:
        "Born from daily use building complex software with 3+ AI agents simultaneously on production codebases.",
    },
  ],
  metrics: {
    totalStars: "2K+",
    toolCount: 8,
    languages: ["Go", "Rust", "TypeScript", "Python"],
    avgInstallTime: "< 30s each",
  },
  synergies: [
    {
      tools: ["ntm", "mail"],
      description: "NTM spawns agents that auto-register with Mail for coordination",
    },
    {
      tools: ["mail", "bv"],
      description: "Mail threads link to Beads issues for task context",
    },
    {
      tools: ["cass", "cm"],
      description: "CM searches CASS history for evidence validation",
    },
    {
      tools: ["ubs", "slb"],
      description: "UBS pre-validates before SLB approves risky operations",
    },
    {
      tools: ["caam", "ntm"],
      description: "CAAM provides credentials when NTM spawns agents",
    },
    {
      tools: ["slb", "mail"],
      description: "SLB sends approval requests via Mail to reviewers",
    },
  ],
};

// Calculate flywheel synergy - how many connections each tool has
export function getToolSynergy(toolId: string): number {
  const tool = flywheelTools.find((t) => t.id === toolId);
  if (!tool) return 0;

  let connections = tool.connectsTo.length;
  connections += flywheelTools.filter((t) => t.connectsTo.includes(toolId)).length;

  return connections;
}

// Get tools sorted by synergy (most connected first)
export function getToolsBySynergy(): FlywheelTool[] {
  return [...flywheelTools].sort((a, b) => getToolSynergy(b.id) - getToolSynergy(a.id));
}

// Get all unique connections for visualization
export function getAllConnections(): Array<{ from: string; to: string }> {
  const seen = new Set<string>();
  const connections: Array<{ from: string; to: string }> = [];

  flywheelTools.forEach((tool) => {
    tool.connectsTo.forEach((targetId) => {
      const key = [tool.id, targetId].sort().join("-");
      if (!seen.has(key)) {
        seen.add(key);
        connections.push({ from: tool.id, to: targetId });
      }
    });
  });

  return connections;
}

// Get synergy pairs for visualization
export function getSynergyPairs() {
  return flywheelDescription.synergies;
}
