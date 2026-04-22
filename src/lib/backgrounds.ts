export interface Background {
	id: string;
	title: string;
	desc: string;
	light: string;
	dark: string;
	codeLight: string;
	codeDark: string;
}

export const BG: Background[] = [
	{
		id: 'bg1',
		title: 'Grid + Fuchsia',
		desc: 'Cuadrícula con blob fuchsia.',
		light: `<div class="bg1-light" style="position:absolute;inset:0"><div class="blob"></div></div>`,
		dark: `<div class="bg1-dark" style="position:absolute;inset:0"><div class="blob"></div></div>`,
		codeLight: `<!-- Light -->\n<div class="absolute inset-0 -z-10 bg-white\n  bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)]\n  bg-size-[14px_24px]">\n  <div class="absolute left-0 right-0 top-0 mx-auto\n    h-77.5 w-77.5 rounded-full\n    bg-fuchsia-400 opacity-20 blur-[100px]"></div>\n</div>`,
		codeDark: `<!-- Dark -->\n<div class="absolute inset-0 -z-10 bg-zinc-950\n  bg-[linear-gradient(to_right,#ffffff08_1px,transparent_1px),linear-gradient(to_bottom,#ffffff08_1px,transparent_1px)]\n  bg-size-[14px_24px]">\n  <div class="absolute left-0 right-0 top-0 mx-auto\n    h-77.5 w-77.5 rounded-full\n    bg-fuchsia-900 opacity-25 blur-[100px]"></div>\n</div>`,
	},
	{
		id: 'bg2',
		title: 'Puntos + Cyan',
		desc: 'Dot grid con blob cyan centrado.',
		light: `<div class="bg2-light" style="position:absolute;inset:0"><div class="blob"></div></div>`,
		dark: `<div class="bg2-dark" style="position:absolute;inset:0"><div class="blob"></div></div>`,
		codeLight: `<!-- Light -->\n<div class="absolute inset-0 -z-10 bg-white\n  [background:radial-gradient(#d4d4d8_1px,transparent_1px)]\n  bg-size-[20px_20px]">\n  <div class="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2\n    h-50 w-90 rounded-full\n    bg-cyan-400 opacity-20 blur-[80px]"></div>\n</div>`,
		codeDark: `<!-- Dark -->\n<div class="absolute inset-0 -z-10 bg-zinc-950\n  [background:radial-gradient(#3f3f46_1px,transparent_1px)]\n  bg-size-[20px_20px]">\n  <div class="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2\n    h-50 w-90 rounded-full\n    bg-cyan-700 opacity-30 blur-[80px]"></div>\n</div>`,
	},
	{
		id: 'bg3',
		title: 'Diagonal + Amber',
		desc: 'Rayas diagonales con blob naranja.',
		light: `<div class="bg3-light" style="position:absolute;inset:0"><div class="blob"></div></div>`,
		dark: `<div class="bg3-dark" style="position:absolute;inset:0"><div class="blob"></div></div>`,
		codeLight: `<!-- Light -->\n<div class="absolute inset-0 -z-10 bg-amber-50\n  [background-image:repeating-linear-gradient(45deg,#fbbf2430_0,#fbbf2430_1px,transparent_0,transparent_50%)]\n  bg-size-[16px_16px]">\n  <div class="absolute -bottom-10 -right-10\n    h-65 w-65 rounded-full\n    bg-amber-400 opacity-25 blur-[90px]"></div>\n</div>`,
		codeDark: `<!-- Dark -->\n<div class="absolute inset-0 -z-10 bg-[#0c0a00]\n  [background-image:repeating-linear-gradient(45deg,#fbbf2408_0,#fbbf2408_1px,transparent_0,transparent_50%)]\n  bg-size-[16px_16px]">\n  <div class="absolute -bottom-10 -right-10\n    h-65 w-65 rounded-full\n    bg-amber-700 opacity-30 blur-[90px]"></div>\n</div>`,
	},
	{
		id: 'bg4',
		title: 'Mesh Gradient',
		desc: 'Gradiente de malla suave, sin textura.',
		light: `<div class="bg4-light" style="position:absolute;inset:0"></div>`,
		dark: `<div class="bg4-dark" style="position:absolute;inset:0"></div>`,
		codeLight: `<!-- Light -->\n<div class="absolute inset-0 -z-10\n  [background:radial-gradient(ellipse_at_20%_50%,#ddd6fe_0%,transparent_60%),radial-gradient(ellipse_at_80%_20%,#bfdbfe_0%,transparent_60%),radial-gradient(ellipse_at_60%_80%,#fce7f3_0%,transparent_60%),#fff]">\n</div>`,
		codeDark: `<!-- Dark -->\n<div class="absolute inset-0 -z-10\n  [background:radial-gradient(ellipse_at_20%_50%,#4c1d95_0%,transparent_60%),radial-gradient(ellipse_at_80%_20%,#1e3a5f_0%,transparent_60%),radial-gradient(ellipse_at_60%_80%,#500724_0%,transparent_60%),#09090b]">\n</div>`,
	},
	{
		id: 'bg5',
		title: 'Cuadrícula + Emerald',
		desc: 'Rejilla verde con dos blobs en esquinas.',
		light: `<div class="bg5-light" style="position:absolute;inset:0"><div class="b1"></div><div class="b2"></div></div>`,
		dark: `<div class="bg5-dark" style="position:absolute;inset:0"><div class="b1"></div><div class="b2"></div></div>`,
		codeLight: `<!-- Light -->\n<div class="absolute inset-0 -z-10 bg-emerald-50\n  bg-[linear-gradient(#86efac30_1px,transparent_1px),linear-gradient(90deg,#86efac30_1px,transparent_1px)]\n  bg-size-[24px_24px]">\n  <div class="absolute -top-8 -left-8 h-60 w-60 rounded-full bg-emerald-400 opacity-20 blur-[80px]"></div>\n  <div class="absolute -bottom-8 -right-8 h-50 w-50 rounded-full bg-emerald-500 opacity-20 blur-[70px]"></div>\n</div>`,
		codeDark: `<!-- Dark -->\n<div class="absolute inset-0 -z-10 bg-[#022c22]\n  bg-[linear-gradient(#86efac10_1px,transparent_1px),linear-gradient(90deg,#86efac10_1px,transparent_1px)]\n  bg-size-[24px_24px]">\n  <div class="absolute -top-8 -left-8 h-60 w-60 rounded-full bg-emerald-700 opacity-30 blur-[80px]"></div>\n  <div class="absolute -bottom-8 -right-8 h-50 w-50 rounded-full bg-emerald-800 opacity-30 blur-[70px]"></div>\n</div>`,
	},
	{
		id: 'bg6',
		title: 'Ruido + Rose',
		desc: 'Textura de ruido con blob rosa centrado.',
		light: `<div class="bg6-light" style="position:absolute;inset:0"><div class="blob"></div></div>`,
		dark: `<div class="bg6-dark" style="position:absolute;inset:0"><div class="blob"></div></div>`,
		codeLight: `<!-- Light -->\n<div class="absolute inset-0 -z-10 bg-rose-50"\n  style="background-image:url('noise.svg')">\n  <div class="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2\n    h-45 w-80 rounded-full bg-rose-400 opacity-20 blur-[70px]"></div>\n</div>`,
		codeDark: `<!-- Dark -->\n<div class="absolute inset-0 -z-10 bg-[#0f0204]"\n  style="background-image:url('noise.svg')">\n  <div class="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2\n    h-45 w-80 rounded-full bg-rose-800 opacity-35 blur-[70px]"></div>\n</div>`,
	},
	{
		id: 'bg7',
		title: 'Radial Vignette',
		desc: 'Desvanecimiento radial desde arriba.',
		light: `<div class="bg7-light" style="position:absolute;inset:0"></div>`,
		dark: `<div class="bg7-dark" style="position:absolute;inset:0"></div>`,
		codeLight: `<!-- Light -->\n<div class="absolute inset-0 -z-10\n  [background:radial-gradient(ellipse_80%_80%_at_50%_-20%,#c7d2fe,transparent),#fff]">\n</div>`,
		codeDark: `<!-- Dark -->\n<div class="absolute inset-0 -z-10\n  [background:radial-gradient(ellipse_80%_80%_at_50%_-20%,#312e81,transparent),#09090b]">\n</div>`,
	},
	{
		id: 'bg8',
		title: 'Líneas + Sky',
		desc: 'Líneas horizontales con blob azul cielo.',
		light: `<div class="bg8-light" style="position:absolute;inset:0"><div class="blob"></div></div>`,
		dark: `<div class="bg8-dark" style="position:absolute;inset:0"><div class="blob"></div></div>`,
		codeLight: `<!-- Light -->\n<div class="absolute inset-0 -z-10 bg-sky-50\n  bg-[repeating-linear-gradient(0deg,#bae6fd40_0,#bae6fd40_1px,transparent_0,transparent_30px)]">\n  <div class="absolute right-0 top-0 h-70 w-70 rounded-full bg-sky-400 opacity-20 blur-[90px]"></div>\n</div>`,
		codeDark: `<!-- Dark -->\n<div class="absolute inset-0 -z-10 bg-[#030712]\n  bg-[repeating-linear-gradient(0deg,#7dd3fc10_0,#7dd3fc10_1px,transparent_0,transparent_30px)]">\n  <div class="absolute right-0 top-0 h-70 w-70 rounded-full bg-sky-700 opacity-30 blur-[90px]"></div>\n</div>`,
	},
	{
		id: 'bg9',
		title: 'Gradiente Diagonal',
		desc: 'Degradado lineal diagonal. Simple.',
		light: `<div class="bg9-light" style="position:absolute;inset:0"></div>`,
		dark: `<div class="bg9-dark" style="position:absolute;inset:0"></div>`,
		codeLight: `<!-- Light -->\n<div class="absolute inset-0 -z-10\n  bg-linear-to-br from-orange-50 to-amber-100">\n</div>`,
		codeDark: `<!-- Dark -->\n<div class="absolute inset-0 -z-10\n  bg-linear-to-br from-[#0c0500] to-[#1c1100]">\n</div>`,
	},
	{
		id: 'bg10',
		title: 'Patrón + Violet',
		desc: 'Patrón SVG con blob violeta inferior.',
		light: `<div class="bg10-light" style="position:absolute;inset:0"><div class="blob"></div></div>`,
		dark: `<div class="bg10-dark" style="position:absolute;inset:0"><div class="blob"></div></div>`,
		codeLight: `<!-- Light -->\n<div class="absolute inset-0 -z-10 bg-violet-50"\n  style="background-image:url('pattern.svg')">\n  <div class="absolute bottom-0 left-1/2 -translate-x-1/2\n    h-45 w-85 rounded-full bg-violet-400 opacity-20 blur-[80px]"></div>\n</div>`,
		codeDark: `<!-- Dark -->\n<div class="absolute inset-0 -z-10 bg-[#0a0010]"\n  style="background-image:url('pattern-dark.svg')">\n  <div class="absolute bottom-0 left-1/2 -translate-x-1/2\n    h-45 w-85 rounded-full bg-violet-800 opacity-30 blur-[80px]"></div>\n</div>`,
	},
	{
		id: 'bg11',
		title: 'Cónico',
		desc: 'Gradiente cónico multicolor desde el centro.',
		light: `<div class="bg11-light" style="position:absolute;inset:0"></div>`,
		dark: `<div class="bg11-dark" style="position:absolute;inset:0"></div>`,
		codeLight: `<!-- Light -->\n<div class="absolute inset-0 -z-10\n  [background:conic-gradient(from_180deg_at_50%_50%,#e0e7ff,#fce7f3,#e0f2fe,#fef3c7,#e0e7ff)]">\n</div>`,
		codeDark: `<!-- Dark -->\n<div class="absolute inset-0 -z-10\n  [background:conic-gradient(from_180deg_at_50%_50%,#1e1b4b,#500724,#0c4a6e,#451a03,#1e1b4b)]">\n</div>`,
	},
	{
		id: 'bg12',
		title: 'Triple Blob',
		desc: 'Tres blobs: esquinas y centro.',
		light: `<div class="bg12-light" style="position:absolute;inset:0"><div class="b1"></div><div class="b2"></div><div class="b3"></div></div>`,
		dark: `<div class="bg12-dark" style="position:absolute;inset:0"><div class="b1"></div><div class="b2"></div><div class="b3"></div></div>`,
		codeLight: `<!-- Light -->\n<div class="absolute inset-0 -z-10 bg-white">\n  <div class="absolute -top-16 -left-16 h-62.5 w-62.5 rounded-full bg-rose-300 opacity-30 blur-[70px]"></div>\n  <div class="absolute -bottom-16 -right-16 h-70 w-70 rounded-full bg-blue-300 opacity-30 blur-[80px]"></div>\n  <div class="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 h-50 w-50 rounded-full bg-emerald-300 opacity-20 blur-[60px]"></div>\n</div>`,
		codeDark: `<!-- Dark -->\n<div class="absolute inset-0 -z-10 bg-zinc-950">\n  <div class="absolute -top-16 -left-16 h-62.5 w-62.5 rounded-full bg-rose-900 opacity-35 blur-[70px]"></div>\n  <div class="absolute -bottom-16 -right-16 h-70 w-70 rounded-full bg-blue-900 opacity-35 blur-[80px]"></div>\n  <div class="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 h-50 w-50 rounded-full bg-emerald-900 opacity-25 blur-[60px]"></div>\n</div>`,
	},
];