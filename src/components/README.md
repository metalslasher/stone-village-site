# Component boundaries

- home/ — секції головної; кожна має власну композицію й scoped-стилі.
- products/ — ResidencesStory (два формати на головній), ResidencePlan (перемикач поверхів), ResidenceOffer (акція та бейдж).
- navigation/ — SiteHeader, SiteFooter, BrandSignature.
- viewing/ — ViewingDialog (демо-форма без надсилання), MobileViewingBar.
- motion/PageMotion — єдиний runtime руху: `data-reveal`, `data-progress` (sticky/pass/exit/enter → `--progress`), `data-count`.

Глобально визначені лише токени, типографіка, `.cta`, `.arrow-link`, `.kicker`, `.numeral` і примітиви руху. Не додавати generic Card/Section-обгортки.
