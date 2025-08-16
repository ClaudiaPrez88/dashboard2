
import { NextRequest, NextResponse } from 'next/server';

const apex = process.env.APEX_BASE_URL!;
const auth = 'Basic ' + Buffer.from(`${process.env.APEX_USER}:${process.env.APEX_PASS}`).toString('base64');



async function oracleGet(path: string) {
  const r = await fetch(`${apex}${path}`, { headers: { Authorization: auth }});
  if (!r.ok) throw new Error('Oracle GET failed');
  return r.json();
}

// async function oraclePost(path: string, body: any) {
//   const r = await fetch(`${apex}${path}`, {
//     method: 'POST',
//     headers: { 'Content-Type':'application/json', Authorization: auth },
//     body: JSON.stringify(body)
//   });
//   if (!r.ok) throw new Error('Oracle POST failed');
//   return r.json().catch(()=> ({}));
// }

// function pickWeighted<T extends {weight:number}>(arr:T[]) {
//   if (!arr.length) return null as any;
//   const total = arr.reduce((a,b)=>a+(b.weight||1),0);
//   let r = Math.random()*total;
//   for (const x of arr) { r -= (x.weight||1); if (r<=0) return x; }
//   return arr[0];
// }

// export async function POST(req: NextRequest) {
//   const { sessionId, userId, text } = await req.json();
//   const lower = text.toLowerCase();
//   const urgent = /(suicidio|quitarme la vida|hacerme daño)/.test(lower) ? 'Y':'N';
//   const sentiment =
//     urgent === 'Y' ? 'urgente' :
//     /(frustrad[oa]|angusti[ao]|ansiedad alta|rabia)/.test(lower) ? 'negativo' :
//     /(gracias|bacán|qué bueno|me resultó)/.test(lower) ? 'positivo' : 'neutro';

//   // 1) Guarda el mensaje del usuario en Oracle
//   await oraclePost('/messages', {
//     session_id: sessionId, user_id: userId, role: 'user',
//     text, urgent, sentiment
//   });

//   // 2) Trae tono + plantillas + contexto breve
//   const [tone, templates, history] = await Promise.all([
//     oracleGet('/tone'),
//     oracleGet('/templates?locale=es-CL'),
//     oracleGet(`/messages?session_id=${encodeURIComponent(sessionId)}&limit=6`)
//   ]);

//   // 3) Selecciona variantes según sentimiento
//   const emp = pickWeighted(templates.items?.filter((t:any)=>t.category==='empatia' && (t.sentiment===sentiment || t.sentiment==='neutro')) || []);
//   const pausa = pickWeighted(templates.items?.filter((t:any)=>t.category==='pausa') || []);
//   const think = pickWeighted(templates.items?.filter((t:any)=>t.category==='think') || []);
//   const trans = pickWeighted(templates.items?.filter((t:any)=>t.category==='transicion') || []);
//   const tuteo = (tone.items||tone).find?.((r:any)=>r.key==='tuteo')?.value === 'Y';
//   const dialect = Number((tone.items||tone).find?.((r:any)=>r.key==='dialect_level')?.value || 1);

//   // 4) System prompt dinámico (breve)
//   const systemMessage = `
// Eres un asistente de salud mental para Chile (es-CL). Sé cálido, claro y breve.
// - ${tuteo ? 'Usa tuteo' : 'Evita tuteo'}; dialect_level=${dialect}.
// - Evita clichés; alterna sinónimos; ofrece pasos pequeños y pregunta si quiere seguir.
// Frases guía:
// Empatía: "${emp?.text || 'Entiendo que puede ser pesado…'}"
// Pausa: "${pausa?.text || 'Déjame pensar…'}"
// Pensar en voz alta: "${think?.text || 'A ver…'}"
// Transición: "${trans?.text || 'Esto es lo que podemos hacer ahora…'}"
// Si detectas urgencia, contén y sugiere apoyo profesional sin alarmar.
// No des consejos médicos; sugiere hábitos y ejercicios breves de manejo de ansiedad.
// `;

//   // 5) Contexto: últimas 3 interacciones (user/bot)
//   const recent = (history.items||history).slice(0,6).reverse()
//     .map((m:any)=> `${m.role === 'user' ? 'Usuario' : 'Asistente'}: ${m.text}`)
//     .join('\n');

//   // 6) Llama a Gemini
//   const prompt = `${systemMessage}\nContexto reciente:\n${recent}\n\nUsuario: ${text}\nAsistente:`;
//   const gem = await fetch('https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-pro:generateContent?key=' + process.env.GEMINI_API_KEY, {
//     method:'POST',
//     headers:{'Content-Type':'application/json'},
//     body: JSON.stringify({
//       contents:[{role:'user', parts:[{text: prompt}]}]
//     })
//   }).then(r=>r.json());

//   const reply = gem?.candidates?.[0]?.content?.parts?.[0]?.text || 'Gracias por contarme. Probemos un paso pequeño: respira profundo 4-4-6. ¿Te tinca?';

//   // 7) Guarda la respuesta del bot
//   await oraclePost('/messages', {
//     session_id: sessionId, user_id: userId, role: 'bot',
//     text: reply, urgent, sentiment
//   });

//   return NextResponse.json({ response: reply, urgent: urgent==='Y' });
// }
