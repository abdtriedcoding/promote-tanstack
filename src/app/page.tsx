export default function Home() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="min-h-screen flex flex-col items-center justify-center px-6 text-center">
        <p className="text-amber-500 uppercase tracking-[0.3em] text-sm mb-8 font-medium">
          STOP FUCKING AROUND WITH STATE MANAGEMENT
        </p>
        <h1 className="hero-title text-5xl md:text-7xl lg:text-8xl mb-8 max-w-5xl">
          Just fucking use TanStack.
        </h1>
        <p className="text-gray-400 text-lg md:text-xl max-w-2xl mb-12 leading-relaxed">
          You&apos;ve been writing the same caching logic, fighting with router state, and
          copy-pasting data fetching boilerplate for years. That ends today.
        </p>
        <a
          href="https://tanstack.com"
          target="_blank"
          rel="noopener noreferrer"
          className="cta-button text-lg"
        >
          Get started
        </a>
      </section>

      <div className="section-divider" />

      {/* The Problem Section */}
      <section className="py-24 md:py-32 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="rainbow-text text-2xl md:text-3xl font-medium italic mb-12">
            Just fucking use <a href="https://tanstack.com" target="_blank" rel="noopener noreferrer" className="underline decoration-2 underline-offset-4">TanStack</a>.
          </h2>
          <h3 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-8">
            Your data layer is a fucking disaster.
          </h3>
          <div className="space-y-6 text-gray-400 text-lg md:text-xl leading-relaxed">
            <p>
              You&apos;ve been building React apps for how long now? And you&apos;re still manually
              tracking loading states, writing <code className="text-white bg-zinc-800 px-2 py-0.5 rounded">useEffect</code> for
              data fetching, and losing your mind trying to keep your cache in sync?
            </p>
            <p>
              You&apos;ve got 12 different loading spinners managed by 12 different boolean states.
              Half your components re-render when they shouldn&apos;t. The other half don&apos;t re-render
              when they fucking should.
            </p>
            <p>
              This is the hell you chose. And for what? <em>&quot;I don&apos;t need a data fetching library&quot;</em>?
              Give me a fucking break.
            </p>
          </div>
        </div>
      </section>

      <div className="section-divider" />

      {/* What is TanStack Section */}
      <section className="py-24 md:py-32 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="rainbow-text text-2xl md:text-3xl font-medium italic mb-12">
            Just fucking use <a href="https://tanstack.com" target="_blank" rel="noopener noreferrer" className="underline decoration-2 underline-offset-4">TanStack</a>.
          </h2>
          <h3 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-8">
            What the fuck is TanStack?
          </h3>
          <div className="space-y-6 text-gray-400 text-lg md:text-xl leading-relaxed mb-12">
            <p>
              <a href="https://tanstack.com" target="_blank" rel="noopener noreferrer" className="text-white underline">TanStack</a> is
              a collection of high-quality, type-safe libraries for building modern web apps.
              Query, Router, Table, Form, Virtual—each one solves a problem you&apos;ve been
              badly solving yourself for years.
            </p>
            <p>
              Want to fetch data that caches automatically, dedupes requests, and handles
              background refetching? Here&apos;s all you fucking need:
            </p>
          </div>

          {/* Code Example - Query */}
          <div className="code-block mb-8">
            <pre>
              <code>
                <span className="token-keyword">import</span> {`{`} <span className="token-variable">useQuery</span> {`}`} <span className="token-keyword">from</span> <span className="token-string">&apos;@tanstack/react-query&apos;</span>{"\n\n"}
                <span className="token-keyword">function</span> <span className="token-function">UserProfile</span>({`{`} <span className="token-variable">userId</span> {`}`}) {`{`}{"\n"}
                {"  "}<span className="token-keyword">const</span> {`{`} <span className="token-variable">data</span>, <span className="token-variable">isLoading</span>, <span className="token-variable">error</span> {`}`} = <span className="token-function">useQuery</span>({`{`}{"\n"}
                {"    "}<span className="token-property">queryKey</span>: [<span className="token-string">&apos;user&apos;</span>, <span className="token-variable">userId</span>],{"\n"}
                {"    "}<span className="token-property">queryFn</span>: () =&gt; <span className="token-function">fetchUser</span>(<span className="token-variable">userId</span>),{"\n"}
                {"  "}{`}`}){"\n\n"}
                {"  "}<span className="token-keyword">if</span> (<span className="token-variable">isLoading</span>) <span className="token-keyword">return</span> <span className="token-string">&apos;Loading...&apos;</span>{"\n"}
                {"  "}<span className="token-keyword">if</span> (<span className="token-variable">error</span>) <span className="token-keyword">return</span> <span className="token-string">&apos;Error!&apos;</span>{"\n\n"}
                {"  "}<span className="token-keyword">return</span> &lt;<span className="token-type">div</span>&gt;{`{`}<span className="token-variable">data</span>.<span className="token-property">name</span>{`}`}&lt;/<span className="token-type">div</span>&gt;{"\n"}
                {`}`}
              </code>
            </pre>
          </div>

          <p className="text-gray-400 text-lg md:text-xl">
            No manual loading states. No stale data bullshit. No cache invalidation nightmares.
            It just works.
          </p>
        </div>
      </section>

      <div className="section-divider" />

      {/* Why it's great Section */}
      <section className="py-24 md:py-32 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="rainbow-text text-2xl md:text-3xl font-medium italic mb-12">
            Just fucking use <a href="https://tanstack.com" target="_blank" rel="noopener noreferrer" className="underline decoration-2 underline-offset-4">TanStack</a>.
          </h2>
          <h3 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-12">
            Why it&apos;s fucking great
          </h3>

          <div className="grid gap-6 md:grid-cols-2">
            <FeatureCard
              title="Type-safe to the fucking bone"
              description="Full TypeScript support. Your IDE knows what you're doing. Your compiler catches your mistakes. No more 'undefined is not a function' at 3am."
            />
            <FeatureCard
              title="Caching that actually works"
              description="Query caches everything. Background refetches. Stale-while-revalidate. Window focus refetching. You don't have to think about it."
            />
            <FeatureCard
              title="Framework agnostic"
              description="React, Vue, Solid, Svelte—TanStack works with whatever framework you're using. Switch frameworks? Your knowledge transfers."
            />
            <FeatureCard
              title="Devtools that don't suck"
              description="See every query, mutation, and cache entry. Time-travel debugging. Actually understand what the fuck is happening in your app."
            />
            <FeatureCard
              title="Mutations made simple"
              description="Optimistic updates. Automatic cache invalidation. Rollbacks on error. Stop writing try-catch spaghetti for every API call."
            />
            <FeatureCard
              title="Battle-tested at scale"
              description="Used by thousands of companies. Millions of downloads. This isn't some weekend project—it's production-grade infrastructure."
            />
          </div>
        </div>
      </section>

      <div className="section-divider" />

      {/* Router Section */}
      <section className="py-24 md:py-32 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="rainbow-text text-2xl md:text-3xl font-medium italic mb-12">
            Just fucking use <a href="https://tanstack.com" target="_blank" rel="noopener noreferrer" className="underline decoration-2 underline-offset-4">TanStack</a>.
          </h2>
          <h3 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-8">
            The Router that should&apos;ve existed years ago
          </h3>
          <div className="space-y-6 text-gray-400 text-lg md:text-xl leading-relaxed mb-12">
            <p>
              TanStack Router gives you type-safe routing, built-in data loading, and
              search params that don&apos;t make you want to throw your laptop out the window.
            </p>
            <p>
              Loaders that run before your component renders. Search params that are
              validated and typed. Nested layouts that actually make sense:
            </p>
          </div>

          {/* Code Example - Router */}
          <div className="code-block mb-8">
            <pre>
              <code>
                <span className="token-keyword">import</span> {`{`} <span className="token-variable">createFileRoute</span> {`}`} <span className="token-keyword">from</span> <span className="token-string">&apos;@tanstack/react-router&apos;</span>{"\n\n"}
                <span className="token-keyword">export const</span> <span className="token-variable">Route</span> = <span className="token-function">createFileRoute</span>(<span className="token-string">&apos;/posts/$postId&apos;</span>)({`{`}{"\n"}
                {"  "}<span className="token-property">validateSearch</span>: (<span className="token-variable">search</span>) =&gt; ({`{`}{"\n"}
                {"    "}<span className="token-property">page</span>: <span className="token-type">Number</span>(<span className="token-variable">search</span>.<span className="token-property">page</span>) || <span className="token-number">1</span>,{"\n"}
                {"  "}{`}`}),{"\n"}
                {"  "}<span className="token-property">loader</span>: <span className="token-keyword">async</span> ({`{`} <span className="token-variable">params</span> {`}`}) =&gt; {`{`}{"\n"}
                {"    "}<span className="token-keyword">return</span> <span className="token-function">fetchPost</span>(<span className="token-variable">params</span>.<span className="token-property">postId</span>){"\n"}
                {"  "}{`}`},{"\n"}
                {"  "}<span className="token-property">component</span>: <span className="token-function">PostPage</span>,{"\n"}
                {`}`})
              </code>
            </pre>
          </div>

          <p className="text-gray-400 text-lg md:text-xl">
            Your IDE autocompletes route paths. Search params are validated before your
            component loads. Data is ready when you need it. This is how routing should
            fucking work.
          </p>
        </div>
      </section>

      <div className="section-divider" />

      {/* But wait... Section */}
      <section className="py-24 md:py-32 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="rainbow-text text-2xl md:text-3xl font-medium italic mb-12">
            Just fucking use <a href="https://tanstack.com" target="_blank" rel="noopener noreferrer" className="underline decoration-2 underline-offset-4">TanStack</a>.
          </h2>
          <h3 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-12">
            But wait...
          </h3>

          <div className="space-y-8">
            <ObjectionCard
              objection="But I already have Redux / Zustand / whatever..."
              rebuttal="Great. Keep using it for client state. TanStack Query is for server state. They solve different problems. Use both. They play nice together."
            />
            <ObjectionCard
              objection="But it's another dependency..."
              rebuttal="So is that 500-line custom hook you wrote to handle caching. Except TanStack Query is maintained, tested, and doesn't have that weird bug you've been ignoring for 6 months."
            />
            <ObjectionCard
              objection="But I need to learn something new..."
              rebuttal="You learned useEffect. You learned Redux. You learned whatever flavor-of-the-month state manager. This one will actually save you time. I promise."
            />
            <ObjectionCard
              objection="But what about bundle size?"
              rebuttal="TanStack Query is ~13KB gzipped. That's less than the boilerplate code it replaces. You're already shipping larger images."
            />
          </div>
        </div>
      </section>

      <div className="section-divider" />

      {/* When to use Section */}
      <section className="py-24 md:py-32 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="rainbow-text text-2xl md:text-3xl font-medium italic mb-12">
            Just fucking use <a href="https://tanstack.com" target="_blank" rel="noopener noreferrer" className="underline decoration-2 underline-offset-4">TanStack</a>.
          </h2>
          <h3 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-12">
            When should you use TanStack?
          </h3>

          <ul className="space-y-4 text-lg md:text-xl">
            <li className="flex items-start gap-3">
              <span className="text-green-400 text-2xl">•</span>
              <span className="text-gray-300">Fetching data from an API? <span className="text-white font-semibold">Use TanStack Query.</span></span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-green-400 text-2xl">•</span>
              <span className="text-gray-300">Need type-safe routing? <span className="text-white font-semibold">Use TanStack Router.</span></span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-green-400 text-2xl">•</span>
              <span className="text-gray-300">Building complex tables? <span className="text-white font-semibold">Use TanStack Table.</span></span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-green-400 text-2xl">•</span>
              <span className="text-gray-300">Need form validation? <span className="text-white font-semibold">Use TanStack Form.</span></span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-green-400 text-2xl">•</span>
              <span className="text-gray-300">Rendering long lists? <span className="text-white font-semibold">Use TanStack Virtual.</span></span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-green-400 text-2xl">•</span>
              <span className="text-gray-300">Any async state? <span className="text-white font-semibold">Use TanStack Query.</span></span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-green-400 text-2xl">•</span>
              <span className="text-gray-300">Want to stop fucking around? <span className="text-white font-semibold">Use TanStack.</span></span>
            </li>
          </ul>
        </div>
      </section>

      <div className="section-divider" />

      {/* Final CTA Section */}
      <section className="py-24 md:py-32 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="rainbow-text text-2xl md:text-3xl font-medium italic mb-12">
            Just fucking use <a href="https://tanstack.com" target="_blank" rel="noopener noreferrer" className="underline decoration-2 underline-offset-4">TanStack</a>.
          </h2>
          <h3 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-8">
            Stop overthinking. Start building.
          </h3>
          <div className="space-y-6 text-gray-400 text-lg md:text-xl leading-relaxed mb-12 max-w-2xl mx-auto">
            <p>
              TanStack isn&apos;t perfect. Nothing is. But it solves real problems that
              frontend development has had for years. So stop reading blog posts,
              stop watching comparison videos, stop asking Twitter.
            </p>
            <p className="text-white text-2xl font-semibold">
              Just fucking use TanStack.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a
              href="https://tanstack.com/query/latest/docs/framework/react/installation"
              target="_blank"
              rel="noopener noreferrer"
              className="install-cmd"
            >
              npm i @tanstack/react-query
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-16 px-6 border-t border-zinc-800">
        <div className="max-w-4xl mx-auto text-center space-y-6 text-gray-400 text-base">
          <p>
            Inspired by{" "}
            <a href="https://justfuckingusetailwind.com" target="_blank" rel="noopener noreferrer" className="text-white underline">justfuckingusetailwind.com</a>,{" "}
            <a href="https://justfuckingusenuqs.dev" target="_blank" rel="noopener noreferrer" className="text-white underline">justfuckingusenuqs.dev</a>,{" "}
            <a href="https://justfuckinguseeffect.dev" target="_blank" rel="noopener noreferrer" className="text-white underline">justfuckinguseeffect.dev</a>,{" "}
            and all the other fucking websites.
          </p>
          <p>
            Slop by Claude Opus 4.5, prompted by{" "}
            <a href="https://x.com/abdtriedcode" target="_blank" rel="noopener noreferrer" className="text-white underline">abdtriedcode</a>,{" "}
            built with{" "}
            <a href="https://nextjs.org" target="_blank" rel="noopener noreferrer" className="text-white underline">Next.js</a> and{" "}
            <a href="https://tailwindcss.com" target="_blank" rel="noopener noreferrer" className="text-white underline">Tailwind</a>.{" "}
            Now go use{" "}
            <a href="https://tanstack.com" target="_blank" rel="noopener noreferrer" className="text-white underline">TanStack</a>.
          </p>
          <div className="flex justify-center gap-6 pt-4">
            <a href="https://github.com/tanstack" target="_blank" rel="noopener noreferrer" className="text-white underline">GitHub</a>
            <a href="https://tanstack.com" target="_blank" rel="noopener noreferrer" className="text-white underline">Documentation</a>
            <a href="https://twitter.com/tan_stack" target="_blank" rel="noopener noreferrer" className="text-white underline">@TanStack</a>
          </div>
        </div>
      </footer>
    </main>
  );
}

function FeatureCard({ title, description }: { title: string; description: string }) {
  return (
    <div className="feature-card">
      <h4 className="text-xl font-bold mb-3 text-white">{title}</h4>
      <p className="text-gray-400 leading-relaxed">{description}</p>
    </div>
  );
}

function ObjectionCard({ objection, rebuttal }: { objection: string; rebuttal: string }) {
  return (
    <div className="objection-card">
      <p className="text-white font-semibold text-lg mb-3 italic">&quot;{objection}&quot;</p>
      <p className="text-gray-400 leading-relaxed">{rebuttal}</p>
    </div>
  );
}
