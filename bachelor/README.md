Installasjonsguide

For å installere programmet må brukeren:
1.	Last ned en git bach programvare
https://git-scm.com/downloads

2.	Hente programmet fra GitHub.com
https://github.com/SimenHHauge/Bacheloroppgave
Og klone det ned på sin egen pc ved å bruke kommandoen i git bach:
	
	git clone https://github.com/SimenHauge/Bachloroppgave
  
3.	Finne frem til mappelokasjonen i Git bash:

Det er mulig at mappen vil bli lagret på et annet sted på din maskin hvis man har brukt git bash før. Se mappeveien over input feltet for å finne frem til riktig mappe.

  cd /c/Bachlorkode/Bachloroppgave/bachlor

4.	Last ned nødvendige pakker:
For at programmet skal kunne kjøre lokalt er det et par react-pakker som er nødvendig å laste ned i prosjektmappen.

  npm install
  npm install react-router-dom
  npm install react-helmet


5.	Start applikasjonen

  npm start
