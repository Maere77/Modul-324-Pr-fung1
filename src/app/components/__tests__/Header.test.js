import { render, screen } from '@testing-library/react'
import Header from '../Header'

describe('Header', () => {
    beforeEach(() => {
        render(<Header />)
    })

    it('zeigt den App-Namen als Link zur Startseite', () => {
        const logo = screen.getByRole('link', { name: 'Einkaufsliste App' })
        expect(logo).toBeInTheDocument()
        expect(logo).toHaveAttribute('href', '/')
    })

    it('enthält eine Navigation mit drei Einträgen', () => {
        const nav = screen.getByRole('navigation')
        expect(nav).toBeInTheDocument()
        expect(screen.getAllByRole('listitem')).toHaveLength(3)
    })

    it.each([
        ['Neue Liste erstellen', '/register'],
        ['Liste beitreten', '/join'],
        ['Einkaufsliste anzeigen', '/list'],
    ])('Link "%s" zeigt auf %s', (text, href) => {
        expect(screen.getByRole('link', { name: text })).toHaveAttribute('href', href)
    })
})