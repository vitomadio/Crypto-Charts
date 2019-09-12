--
-- PostgreSQL database dump
--

-- Dumped from database version 11.2
-- Dumped by pg_dump version 11.2

SET statement_timeout
= 0;
SET lock_timeout
= 0;
SET idle_in_transaction_session_timeout
= 0;
SET client_encoding
= 'UTF8';
SET standard_conforming_strings
= on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies
= false;
SET client_min_messages
= warning;
SET row_security
= off;

SET default_tablespace
= '';

SET default_with_oids
= false;

--
-- Name: currency_pairs; Type: TABLE; Schema: public; Owner: vito
--

CREATE TABLE public.currency_pairs
(
    id integer NOT NULL,
    pair character varying(30) NOT NULL,
    usd character varying(30) NOT NULL,
    eur character varying(30) NOT NULL,
    gbp character varying(30) NOT NULL,
    color character varying(30) NOT NULL,
    name character varying(30) NOT NULL,
    path character varying(30) NOT NULL,
    "position" integer
);


-- ALTER TABLE public.currency_pairs OWNER TO vitomadio;

--
-- Name: users; Type: TABLE; Schema: public; Owner: vitomadio
--

CREATE TABLE public.users
(
    id uuid NOT NULL,
    email character varying(128) NOT NULL,
    password character varying(60) NOT NULL,
    name character varying(30),
    last character varying(30)
);


-- ALTER TABLE public.users OWNER TO vitomadio;

--
-- Data for Name: currency_pairs; Type: TABLE DATA; Schema: public; Owner: vito
--

COPY public.currency_pairs
(id, pair, usd, eur, gbp, color, name, path, "position") FROM stdin;
7	ETC	ETC-USD	ETC-EUR	ETC-GBP	#2DDF8D	Ethereum Classic	ethereum-classic.png	6
9	ZRX	ZRX-USD	ZRX-EUR	ZRX-GBP	#302C2C	Ox	ox.png	8
1	BTC	BTC-USD	BTC-EUR	BTC-GBP	#F08F19	Bitcoin	Bitcoin.png	3
5	XLM	XLM-USD	XLM-EUR	XLM-GBP	#000000	Stellar	stellar.png	2
2	ETH	ETH-USD	ETH-EUR	ETH-GBP	#5968BB	Ethereum	ethereum.png	4
6	BCH	BCH-USD	BCH-EUR	BCH-GBP	#5AC676	Bitcoin Cash	bitcoin-cash.png	5
8	ZEC	ZEC-USD	ZEC-EUR	ZEC-GBP	#ECB245	Zcash	Zcash.png	7
3	LTC	LTC-USD	LTC-EUR	LTC-GBP	#949494	Litecoin	Litecoin.png	0
4	XRP	XRP-USD	XRP-EUR	XRP-GBP	#000000	Ripple	ripple.png	1
\.


--
-- Data for
-- Name:
-- users;
-- Type:
-- TABLE DATA;
-- Schema:
-- public;
-- Owner:
-- vitomadio
--

COPY public.users
(id, email, password, name, last) FROM stdin;
5aa986be-fdfa-4e81-aaad-6e025a197cc7	test@test.com	$2b$05$mZHsek.uujhha2hourAffORpZlsPdjnUo8ED6DSkdFEqB.1.TNjKq	vito	madio
6b7582b6-f983-4aad-9ac7-e8012c900f04	superman@gmail.com	$2b$05$aZrmAK/LXXuU9BNYdK9tr.5Zn7bX6j7pYDMdfohoxGVL1njbRXG8G	Clark	Ken
\.


--
-- Name: currency_pairs currency_pairs_pkey; Type: CONSTRAINT; Schema: public; Owner: vito
--

-- ALTER TABLE ONLY public.currency_pairs
-- ADD CONSTRAINT currency_pairs_pkey PRIMARY KEY
-- (id);


--
-- Name: users uid; Type: CONSTRAINT; Schema: public; Owner: vitomadio
--

ALTER TABLE ONLY public.users
ADD CONSTRAINT uid PRIMARY KEY
(id);


--
-- PostgreSQL database dump complete
--

