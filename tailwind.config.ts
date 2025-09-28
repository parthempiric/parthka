import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      typography: ({ theme }: { theme: any }) => ({
        DEFAULT: {
          css: {
            color: theme('colors.gray.300'), // Default text color
            a: {
              color: theme('colors.blue.400'),
              '&:hover': {
                color: theme('colors.blue.300'),
              },
              textDecoration: 'underline',
              fontWeight: theme('fontWeight.medium'),
            },
            h1: {
              color: theme('colors.white'),
              fontSize: theme('fontSize.4xl'),
              fontWeight: theme('fontWeight.extrabold'),
              marginTop: theme('spacing.16'),
              marginBottom: theme('spacing.8'),
              lineHeight: theme('lineHeight.tight'),
            },
            h2: {
              color: theme('colors.white'),
              fontSize: theme('fontSize.3xl'),
              fontWeight: theme('fontWeight.bold'),
              marginTop: theme('spacing.12'),
              marginBottom: theme('spacing.6'),
              lineHeight: theme('lineHeight.snug'),
            },
            h3: {
              color: theme('colors.white'),
              fontSize: theme('fontSize.2xl'),
              fontWeight: theme('fontWeight.semibold'),
              marginTop: theme('spacing.10'),
              marginBottom: theme('spacing.5'),
              lineHeight: theme('lineHeight.normal'),
            },
            h4: {
              color: theme('colors.white'),
              fontSize: theme('fontSize.xl'),
              fontWeight: theme('fontWeight.semibold'),
              marginTop: theme('spacing.8'),
              marginBottom: theme('spacing.4'),
              lineHeight: theme('lineHeight.normal'),
            },
            p: {
              fontSize: theme('fontSize.lg'),
              lineHeight: theme('lineHeight.relaxed'),
              marginTop: theme('spacing.6'),
              marginBottom: theme('spacing.6'),
            },
            strong: {
              color: theme('colors.white'),
              fontWeight: theme('fontWeight.bold'),
            },
            em: {
              color: theme('colors.gray.400'),
              fontStyle: 'italic',
            },
            ul: {
              listStyleType: 'disc',
              paddingLeft: theme('spacing.6'),
              marginTop: theme('spacing.4'),
              marginBottom: theme('spacing.4'),
            },
            ol: {
              listStyleType: 'decimal',
              paddingLeft: theme('spacing.6'),
              marginTop: theme('spacing.4'),
              marginBottom: theme('spacing.4'),
            },
            li: {
              marginTop: theme('spacing.2'),
              marginBottom: theme('spacing.2'),
            },
            blockquote: {
              borderLeftColor: theme('colors.blue.500'),
              borderLeftWidth: '4px',
              paddingLeft: theme('spacing.4'),
              fontStyle: 'italic',
              color: theme('colors.gray.400'),
              marginTop: theme('spacing.6'),
              marginBottom: theme('spacing.6'),
            },
            code: {
              backgroundColor: theme('colors.gray.800'),
              color: theme('colors.gray.200'),
              padding: '0.2em 0.4em',
              borderRadius: theme('borderRadius.md'),
              fontSize: theme('fontSize.sm'),
            },
            'code::before': {
              content: '""',
            },
            'code::after': {
              content: '""',
            },
            pre: {
              backgroundColor: theme('colors.gray.800'),
              color: theme('colors.gray.200'),
              padding: theme('spacing.4'),
              borderRadius: theme('borderRadius.md'),
              overflowX: 'auto',
            },
          },
        },
        invert: { // Dark theme specific styles
          css: {
            color: theme('colors.gray.200'),
            h1: { color: theme('colors.white') },
            h2: { color: theme('colors.white') },
            h3: { color: theme('colors.white') },
            h4: { color: theme('colors.white') },
            strong: { color: theme('colors.white') },
            a: {
              color: theme('colors.blue.400'),
              '&:hover': {
                color: theme('colors.blue.300'),
              },
            },
            blockquote: {
              borderLeftColor: theme('colors.blue.500'),
              color: theme('colors.gray.300'),
            },
            code: {
              backgroundColor: theme('colors.gray.800'),
              color: theme('colors.gray.200'),
            },
            pre: {
              backgroundColor: theme('colors.gray.800'),
              color: theme('colors.gray.200'),
            },
          },
        },
      }),
    },
  },
  plugins: [require('@tailwindcss/typography')],
};

export default config;
