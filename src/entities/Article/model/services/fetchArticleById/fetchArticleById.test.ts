import { TestAsyncThunk } from "shared/lib/tests/TestAsyncThunk/TestAsyncThunk";
import { fetchArticleById } from "./fetchArticleById";

describe('fetchArticleById.test', ()=> {
    const data =   {
        "id": "1",
        "title": "JavaScript-Neuigkeiten",
        "subtitle": "Was ist neu in JavaScript im Jahr 2025?",
        "img": "https://teknotower.com/wp-content/uploads/2020/11/js.png",
        "views": 1022,
        "createdAt": "26.02.2022",
        "type": ["IT"],
        "blocks": [
          {
            "id": "1",
            "type": "TEXT",
            "title": "Einführung in JavaScript",
            "paragraphs": [
              "Das klassische Programm „Hello, world!“ ist sehr einfach. Es zeigt die Worte „Hello, world!“ auf dem Bildschirm an und gilt als erster Schritt in fast jeder Programmiersprache.",
              "JavaScript ist eine vielseitige Sprache, die sowohl im Browser als auch auf der Serverplattform Node.js ausgeführt werden kann. Wenn du diesen Text im Browser liest und noch nie Code geschrieben hast, bist du nur wenige Sekunden von deinem ersten JavaScript-Programm entfernt.",
              "In modernen Webanwendungen wird JavaScript verwendet, um Webseiten interaktiv zu machen. Meistens wird der Code in separaten Dateien mit der Endung .js gespeichert und in die Seite eingebunden. Dies geschieht über das Tag <script>. Sobald der Browser den Code erkennt, wird er automatisch ausgeführt."
            ]
          },
          {
            "id": "4",
            "type": "CODE",
            "code": "<!DOCTYPE html>\n<html>\n  <body>\n    <p id=\"hello\"></p>\n\n    <script>\n      document.getElementById(\"hello\").innerHTML = \"Hello, world!\";\n    </script>\n  </body>\n</html>;"
          },
          {
            "id": "5",
            "type": "TEXT",
            "title": "Erste Schritte",
            "paragraphs": [
              "Wenn du deinen ersten JavaScript-Code schreiben möchtest, öffne einen Texteditor wie VS Code oder Notepad++ und erstelle eine neue Datei mit dem Namen hello.html.",
              "Füge den obigen Code ein und öffne die Datei im Browser. Wenn alles richtig ist, siehst du den Text „Hello, world!“ auf der Seite."
            ]
          },
          {
            "id": "2",
            "type": "IMAGE",
            "src": "https://hsto.org/r/w1560/getpro/habr/post_images/d56/a02/ffc/d56a02ffc62949b42904ca00c63d8cc1.png",
            "title": "Abbildung 1 – Beispielausgabe im Browser"
          },
          {
            "id": "3",
            "type": "CODE",
            "code": "const path = require('path');\n\nconst server = jsonServer.create();\n\nconst router = jsonServer.router(path.resolve(__dirname, 'db.json'));\n\nserver.use(jsonServer.defaults({}));\nserver.use(jsonServer.bodyParser);"
          },
          {
            "id": "7",
            "type": "TEXT",
            "title": "JavaScript in der Praxis",
            "paragraphs": [
              "JavaScript ist aus der modernen Webentwicklung nicht mehr wegzudenken. Egal ob einfache Animationen, Formvalidierungen oder komplexe Single-Page-Anwendungen – JS ist überall im Einsatz.",
              "Mit Plattformen wie Node.js hat sich JavaScript auch im Backend etabliert. Dadurch ist es heute möglich, komplette Anwendungen nur mit einer Sprache zu entwickeln."
            ]
          },
          {
            "id": "8",
            "type": "IMAGE",
            "src": "https://hsto.org/r/w1560/getpro/habr/post_images/d56/a02/ffc/d56a02ffc62949b42904ca00c63d8cc1.png",
            "title": "Abbildung 2 – Node.js und Browser-Integration"
          },
          {
            "id": "9",
            "type": "TEXT",
            "title": "Fazit",
            "paragraphs": [
              "JavaScript bleibt auch im Jahr 2025 eine der wichtigsten Programmiersprachen. Dank moderner Frameworks wie React, Vue oder Angular ist die Entwicklung schneller, effizienter und vielseitiger geworden."
            ]
          }
        ]
      }
    test('success', async ()=> {
        const thunk = new TestAsyncThunk(fetchArticleById);
        thunk.api.get.mockReturnValue(Promise.resolve({data: data}));
        const result = await thunk.callThunk("1");

        expect(thunk.api.get).toHaveBeenCalledWith("/articles/1");
        expect(result.meta.requestStatus).toBe('fulfilled');
        expect(result.payload).toEqual(data);
    })
    test('error (rejectWithValue)', async ()=> {
        const thunk = new TestAsyncThunk(fetchArticleById);
        thunk.api.get.mockReturnValue(Promise.resolve({data: undefined}));

        const result = await thunk.callThunk("1");

        expect(result.meta.requestStatus).toBe('rejected')
        expect(result.payload).toBe('error');
    })
    test("🚫 Network Error", async () => {
        const thunk = new TestAsyncThunk(fetchArticleById);
        thunk.api.get.mockRejectedValue(new Error("Network error"));
    
        const result = await thunk.callThunk("1");
    
        expect(thunk.api.get).toHaveBeenCalled();
        expect(result.meta.requestStatus).toBe("rejected");
        expect(result.payload).toBe("error");
    });
})