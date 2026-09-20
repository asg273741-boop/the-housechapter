/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        ivory: {
          DEFAULT: '#FAF7F2',
          light: '#FFFCF7',
          dark: '#F2ECE1',
        },
        parchment: {
          DEFAULT: '#F3ECE1',
          hover: '#EAE1D3',
          dark: '#DECFC0',
        },
        beige: {
          light: '#ECE2D5',
          DEFAULT: '#DECFC0',
          dark: '#C2B09D',
        },
        clay: {
          tint: '#F8EFEA',
          light: '#C77358',
          DEFAULT: '#B66348',
          dark: '#8E4630',
        },
        sage: {
          tint: '#E2EBE0',
          light: '#9BB096',
          DEFAULT: '#73876E',
          dark: '#586B54',
        },
        olive: {
          tint: '#EEF3EB',
          light: '#526349',
          DEFAULT: '#3B4734',
          dark: '#2A3325',
        },
        ink: {
          lighter: '#544E48',
          light: '#3D3732',
          DEFAULT: '#23201D',
          deep: '#191614',
        },
        warmBrown: {
          light: '#8A6E5E',
          DEFAULT: '#664E40',
          dark: '#47352B',
        },
        brass: {
          tint: '#FAF4E6',
          light: '#E0BE78',
          DEFAULT: '#C29B53',
          dark: '#9E7B35',
        },
      },
      fontFamily: {
        serif: ['"Cormorant Garamond"', '"Playfair Display"', 'Georgia', 'serif'],
        display: ['"Playfair Display"', '"Cormorant Garamond"', 'Georgia', 'serif'],
        sans: ['"Plus Jakarta Sans"', '-apple-system', 'BlinkMacSystemFont', '"Segoe UI"', 'Roboto', 'sans-serif'],
      },
      maxWidth: {
        reading: '720px',
        editorial: '1180px',
        wide: '1360px',
      },
      typography: (theme) => ({
        DEFAULT: {
          css: {
            color: theme('colors.ink.DEFAULT'),
            maxWidth: '720px',
            fontFamily: theme('fontFamily.sans').join(', '),
            lineHeight: '1.8',
            fontSize: '1.0625rem',
            p: {
              marginBottom: '1.5rem',
              color: '#38332E',
            },
            h1: {
              fontFamily: theme('fontFamily.serif').join(', '),
              fontWeight: '600',
              color: theme('colors.ink.deep'),
              letterSpacing: '-0.02em',
            },
            h2: {
              fontFamily: theme('fontFamily.serif').join(', '),
              fontWeight: '600',
              color: theme('colors.ink.deep'),
              letterSpacing: '-0.015em',
              marginTop: '2.5rem',
              marginBottom: '1rem',
              fontSize: '1.75rem',
            },
            h3: {
              fontFamily: theme('fontFamily.serif').join(', '),
              fontWeight: '600',
              color: theme('colors.ink.deep'),
              marginTop: '2rem',
              marginBottom: '0.75rem',
              fontSize: '1.35rem',
            },
            a: {
              color: theme('colors.olive.DEFAULT'),
              textDecoration: 'underline',
              textUnderlineOffset: '3px',
              textDecorationColor: theme('colors.clay.light'),
              '&:hover': {
                color: theme('colors.clay.dark'),
                textDecorationColor: theme('colors.clay.DEFAULT'),
              },
            },
            strong: {
              color: theme('colors.ink.deep'),
              fontWeight: '600',
            },
            blockquote: {
              fontFamily: theme('fontFamily.serif').join(', '),
              fontStyle: 'italic',
              borderLeftColor: theme('colors.clay.DEFAULT'),
              borderLeftWidth: '3px',
              color: theme('colors.warmBrown.DEFAULT'),
              fontSize: '1.25rem',
              lineHeight: '1.6',
              paddingLeft: '1.25rem',
            },
            ul: {
              listStyleType: 'disc',
              paddingLeft: '1.25rem',
            },
            li: {
              marginTop: '0.375rem',
              marginBottom: '0.375rem',
            },
            'li::marker': {
              color: theme('colors.clay.DEFAULT'),
            },
          },
        },
      }),
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
};
