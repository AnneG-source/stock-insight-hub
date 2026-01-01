# 📈 Stock-Insight-Hub

**Stock-Insight-Hub** est une application d'analyse financière intelligente conçue pour simplifier la prise de décision des investisseurs. En combinant les données en temps réel de Yahoo Finance et des algorithmes de recommandation, l'outil transforme des données brutes en analyses actionnables.

## 🚀 Fonctionnalités Clés

- **Recherche Flexible :** Saisie par nom d'entreprise (ex: "Tesla", "LVMH") ou par ticker boursier (ex: "TSLA", "MC.PA").
- **Analyse de Performance :** Calcul automatique de l'évolution du prix sur plusieurs horizons (1 mois, 6 mois, 1 an).
- **Indicateurs Fondamentaux & Techniques :** - Volatilité simple pour évaluer le risque.
    - Ratios clés : PER (Price Earnings Ratio), Rendement du dividende, etc.
- **Profil d'Investisseur Intelligent :** Gestion automatisée selon le profil de risque utilisateur.
- **Aide à la Décision :** Résumé clair de la situation et recommandation générée (Acheter / Conserver / Vendre) avec justification argumentée.

## 🛠️ Stack Technique

- **Langage :** Python 🐍
- **Source de Données :** [yfinance](https://pypi.org/project/yfinance/) (Yahoo Finance API)
- **Analyse de Données :** Pandas / NumPy
- **Interface :** Lovable.dev

## 📊 Aperçu des Indicateurs Calculés

| Indicateur | Description |
| :--- | :--- |
| **Performance Temporelle** | % d'évolution à 1 mois, 6 mois et 1 an. |
| **Volatilité** | Mesure de l'instabilité du cours sur la période. |
| **Ratios Fondamentaux** | Valorisation (PER) et politique de dividende. |
| **Recommandation** | Algorithme de synthèse basé sur les indicateurs croisés. |

## ⚙️ Installation & Utilisation

**Accès à l'application en Prewiew - Public :**
   (https://ticker-ai-advisor.lovable.app)

## 📝 À propos
Ce projet a été développé pour démontrer ma capacité à intégrer des données financières réelles dans un flux de travail automatisé et à fournir une interface utilisateur orientée "métier".

---
## 🚀 Évolutions à venir (Roadmap)

Le projet est en développement continu. Voici les fonctionnalités prévues prochainement :

- [ ] **Graphiques Interactifs :** L’utilisateur saisit une action soit par nom (ex : “Tesla”, “LVMH”) soit par ticker (“TSLA”, “MC.PA”)à partir d'une liste pré-déterminée et non exhaustive.
L'évolution à venir permettra si l’utilisateur donne le nom, l’app utilisera l’API ChatGPT pour déterminer automatiquement le ticker le plus probable (avec la place boursière principale).



## 🤖✨ Mises à jour disponibles :
2026 : la saisie accepte désormais un nom d’entreprise (ex. “Total”, “BNP”) en plus du ticker. 
L’application effectue une recherche automatique du ticker via Yahoo Finance Search 🔎📈 (avec proxy en développement pour éviter les soucis CORS 🌐🛡️), puis lance l’analyse sur le ticker détecté. 

> **Note :** Si vous avez des suggestions ou des idées d'indicateurs, n'hésitez pas à ouvrir une [Issue](https://github.com/AnneG-source/stock-insight-hub/issues) !
