---
slug: case-study/external-partner-to-inhouse-cloud-migration-11-systems
title: How I migrated 11 systems from an external partner and gave my client’s in-house team full control
authors: [aldwin]
tags: [cloud-migration, devops, ci-cd, multi-cloud, technology-transition, inhouse-team-enablement, cost-optimization, engineering-leadership, fractional-cto]
---

Imagine your main tech partner runs 11 critical systems and 8 services you’ve decided to take back in-house—and most of the practical knowledge lives in two people you don’t employ.  

That’s the situation I walked into. Here’s how we migrated everything into the client’s own cloud, standardized CI/CD, and made their internal team fully self-sufficient, with roughly 17% lower cloud spend as a side effect.

<!-- truncate -->

## Context

My client had been working with an external technology partner for years.  
That partner owned and operated **11 systems and 8 services**, all at different stages:

- Some were waiting on client approvals  
- Some were under active development  
- Others were already live in production  

Strategically, my client had decided to **transition away from the external partner** and bring these projects fully in-house.

On paper, that sounded straightforward. In practice, there were serious risks:

- Most of the practical, day-to-day knowledge sat with **two people at the partner**  
- Access, credentials, and infrastructure were spread across multiple accounts  
- The internal team didn’t yet have a consistent way to deploy or maintain these systems on their own  

The goal was clear:  
Transfer the systems to my client’s cloud ecosystem, create a predictable way to ship, and make sure their internal team could run everything without depending on external “heroes”.

---

## My role

I joined as a **Tehnical Lead**, with three main responsibilities:

- Plan and execute the **transition from the external partner**  
- Migrate systems and services into the client’s own cloud accounts  
- Design and implement **standardized CI/CD** so the internal team could deploy confidently and repeatedly  

In short: make sure the migration didn’t just move code, but moved **control**.

---

## What I did

### 1. Turned scattered knowledge into structured ownership

Before moving anything, we had to understand what we were actually taking over.

I started by:

- Requesting and consolidating **all available system documentation**, including UI/UX designs and any functional specs  
- Securing access to the **source code repositories, cloud accounts, and third-party services** involved in the 11 systems and 8 services  
- Mapping environments (QA, staging, production) and key dependencies so we had a single, up-to-date view of the landscape  

This took us from “only two people at the partner really know how this works” to a **structured, documented understanding** owned by the client.

---

### 2. Migrated systems into the client’s own cloud ecosystem

With access and documentation under control, the next step was to migrate the systems out of the partner’s infrastructure and into my client’s.

I:

- Coordinated the **transfer of projects** from partner-owned accounts into the client’s own cloud accounts  
- Made sure that **QA, staging, and production environments** were recreated in a consistent way, instead of as one-off setups  
- Applied modular infrastructure patterns so environments could be replicated or adjusted without starting from zero each time  

After this phase, my client wasn’t just holding a copy of the code.  
They **owned the infrastructure, accounts, and configuration** behind their systems.

---

### 3. Standardized CI/CD across key projects

Owning the stack is only useful if you can ship updates in a predictable way.

To make delivery reliable and repeatable, I:

- Designed a **standard CI/CD pipeline pattern** that could be reused across projects  
- Implemented this pattern across **6 core systems**, covering build, test, and deployment to QA  
- Ensured that developers could trigger deployments the same way from project to project  

This changed how the team worked:

- They could now deploy to QA **4–8 times per 2-week sprint**  
- Deployments stopped being “special events” that required pulling in senior people or the old partner  
- Feedback loops with QA and stakeholders became faster and less stressful  

CI/CD stopped being a set of ad hoc scripts and became a **shared, reliable system**.

---

### 4. Enabled the internal team to be self-sufficient

A big success criterion for me was that the client’s team **shouldn’t depend on me** long-term.

To support that, I:

- Documented the **CI/CD workflows, environment structure, and key operational tasks** in plain language  
- Walked the team through the pipelines and infrastructure so they understood not just *what* to do, but *why* things were set up a certain way  
- Aligned patterns so new systems or services could be onboarded using the same approach  

The internal developers now had:

- Clear documentation  
- Direct access to the infrastructure  
- A familiar, repeatable delivery process across multiple projects  

The dynamic shifted from “we need the partner or Aldwin to make changes” to “we can handle this ourselves”.

---

## Results

### Technical and operational

- Successfully migrated **11 systems and 8 services** from an external tech partner into the client’s own cloud ecosystem  
- Implemented **standardized CI/CD pipelines** across 6 key projects  
- Enabled developers to deploy to QA **4–8 times per sprint**, consistently and safely  

### Financial

- Achieved approximately **17% reduction in monthly cloud costs**, driven by better visibility, cleaner environments, and eliminating waste  

### Team and ownership

- The organization moved from relying on an external partner to **full internal ownership** of its systems and infrastructure  
- The development team became **more self-sufficient**, less dependent on external vendors or a single internal lead  
- Knowledge was captured in **documentation, pipelines, and infrastructure patterns**, not just in people’s heads  

---

## My takeaway

> **Transitioning away from a tech partner isn’t just about transferring code. It’s about transferring ownership.**

If your systems can’t be:

- Run in your own cloud accounts  
- Deployed through a repeatable CI/CD process  
- Operated by your internal team without a couple of “heroes”  

…then you don’t really own them yet.

Lean software teams need **replicable, deterministic processes** so that when partners change or people move on, the delivery of the business doesn’t stall.

---

## Work with me

If you’re planning to transition away from a technology partner, migrate systems into your own cloud, or standardize CI/CD so your team can ship without fear, I can help you design and execute that transition.

- Turn opaque vendor setups into **clear, documented ownership**  
- Migrate systems into **your** cloud ecosystem  
- Give your in-house team the **processes and tooling** to run everything confidently  

[Get in touch to discuss your transition](/contact)