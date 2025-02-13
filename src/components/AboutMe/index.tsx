import { Trans, useTranslation } from 'react-i18next'

export default function AboutMe() {
  const { t } = useTranslation('experience')

  const aboutMe = t<'aboutMe', { returnObjects: true }, string[]>('aboutMe', {
    returnObjects: true
  }).map((v) => v)

  return (
    <section className="text-slate-400 text-base mt-10 lg:mt-0 lg:text-lg">
      {aboutMe.map((paragraph, key: number) => {
        return (
          <p className={`${key + 1 >= aboutMe.length ? 'mb-12' : 'mb-4'}`} key={paragraph}>
            <Trans
              i18nKey={paragraph}
              components={{
                a: (
                  <a
                    className="text-hazy-sky-500"
                    href="https://www.imagencentral.com/"
                    target="_blank"
                  />
                )
              }}
            />
          </p>
        )
      })}
    </section>
  )
}
