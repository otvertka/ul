import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';

import { StoreDecorator } from 'shared/config/storybook/StoreDecorator/StoreDecorator';
import { Article } from 'entities/Article';
import { ArticleBlockType, ArticleType } from 'entities/Article/model/types/article';
import { ArticleDetails } from './ArticleDetails';

export default {
    title: 'entities/ArticleDetails',
    component: ArticleDetails,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof ArticleDetails>;

const Template: ComponentStory<typeof ArticleDetails> = (args) => <ArticleDetails {...args} />;

const article: Article = {
    id: "1",
    title: "JavaScript-Neuigkeiten",
    subtitle: "Was ist neu in JavaScript im Jahr 2025?",
    img: "https://teknotower.com/wp-content/uploads/2020/11/js.png",
    views: 1022,
    createdAt: "26.02.2022",
    type: [ArticleType.IT],
    blocks: [
        {
            "id": "1",
            "type": ArticleBlockType.TEXT,
            "title": "Einführung in JavaScript",
            "paragraphs": [
              "Das klassische Programm „Hello, world!“ ist sehr einfach. Es zeigt die Worte „Hello, world!“ auf dem Bildschirm an und gilt als erster Schritt in fast jeder Programmiersprache.",
              "JavaScript ist eine vielseitige Sprache, die sowohl im Browser als auch auf der Serverplattform Node.js ausgeführt werden kann. Wenn du diesen Text im Browser liest und noch nie Code geschrieben hast, bist du nur wenige Sekunden von deinem ersten JavaScript-Programm entfernt.",
              "In modernen Webanwendungen wird JavaScript verwendet, um Webseiten interaktiv zu machen. Meistens wird der Code in separaten Dateien mit der Endung .js gespeichert und in die Seite eingebunden. Dies geschieht über das Tag <script>. Sobald der Browser den Code erkennt, wird er automatisch ausgeführt."
            ]
          },
          {
            "id": "4",
            "type": ArticleBlockType.CODE,
            "code": "<!DOCTYPE html>\n<html>\n  <body>\n    <p id=\"hello\"></p>\n\n    <script>\n      document.getElementById(\"hello\").innerHTML = \"Hello, world!\";\n    </script>\n  </body>\n</html>;"
          },
          {
            "id": "5",
            "type": ArticleBlockType.TEXT,
            "title": "Erste Schritte",
            "paragraphs": [
              "Wenn du deinen ersten JavaScript-Code schreiben möchtest, öffne einen Texteditor wie VS Code oder Notepad++ und erstelle eine neue Datei mit dem Namen hello.html.",
              "Füge den obigen Code ein und öffne die Datei im Browser. Wenn alles richtig ist, siehst du den Text „Hello, world!“ auf der Seite."
            ]
          },
          {
            "id": "2",
            "type": ArticleBlockType.IMAGE,
            "src": "https://hsto.org/r/w1560/getpro/habr/post_images/d56/a02/ffc/d56a02ffc62949b42904ca00c63d8cc1.png",
            "title": "Abbildung 1 – Beispielausgabe im Browser"
          },
          {
            "id": "3",
            "type": ArticleBlockType.CODE,
            "code": "const path = require('path');\n\nconst server = jsonServer.create();\n\nconst router = jsonServer.router(path.resolve(__dirname, 'db.json'));\n\nserver.use(jsonServer.defaults({}));\nserver.use(jsonServer.bodyParser);"
          },
          {
            "id": "7",
            "type": ArticleBlockType.TEXT,
            "title": "JavaScript in der Praxis",
            "paragraphs": [
              "JavaScript ist aus der modernen Webentwicklung nicht mehr wegzudenken. Egal ob einfache Animationen, Formvalidierungen oder komplexe Single-Page-Anwendungen – JS ist überall im Einsatz.",
              "Mit Plattformen wie Node.js hat sich JavaScript auch im Backend etabliert. Dadurch ist es heute möglich, komplette Anwendungen nur mit einer Sprache zu entwickeln."
            ]
          },
          {
            "id": "8",
            "type": ArticleBlockType.IMAGE,
            "src": "https://hsto.org/r/w1560/getpro/habr/post_images/d56/a02/ffc/d56a02ffc62949b42904ca00c63d8cc1.png",
            "title": "Abbildung 2 – Node.js und Browser-Integration"
          },
          {
            "id": "9",
            "type": ArticleBlockType.TEXT,
            "title": "Fazit",
            "paragraphs": [
              "JavaScript bleibt auch im Jahr 2025 eine der wichtigsten Programmiersprachen. Dank moderner Frameworks wie React, Vue oder Angular ist die Entwicklung schneller, effizienter und vielseitiger geworden."
            ]
          }
    ],
};

export const Normal = Template.bind({});
Normal.args = {};
Normal.decorators = [StoreDecorator({
    articleDetails: {
        data: article,
    },
})];

export const Loading = Template.bind({});
Loading.args = {};
Loading.decorators = [StoreDecorator({
    articleDetails: {
        isLoading: true,
    },
})];

export const Error = Template.bind({});
Error.args = {};
Error.decorators = [StoreDecorator({
    articleDetails: {
        error: 'error',
    },
})];
