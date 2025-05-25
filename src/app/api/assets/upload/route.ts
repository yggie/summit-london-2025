export default function POST(request: Request) {
  return new Response(JSON.stringify({}), {
    status: 200,
  });
}
