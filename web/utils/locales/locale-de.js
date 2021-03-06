module.exports = {
    languages: {
        en: "English",
        cn: "简体中文",
        fr: "Français",
        ko: "한국어",
        de: "Deutsch"
    },
    header: {
        title: "Graphene UI",
        dashboard: "Hauptseite",
        explorer: "Explorer",
        exchange: "Börse",
        payments: "Transaktionen",
        logout: "Abmeldung",
        settings: "Einstellungen",
        current: "Aktives Konto"
    },
    account: {
        asset: "Asset",
        market_value: "Marktwert",
        hour_24: "24hr Wechsel",
        recent: "Letzte Aktivität",
        name: "Konto Name",
        more: "mehr",
        member: {
            stats: "Mitgliederstatistiken",
            join: "Beitritt am",
            reg: "Registriert von",
            ref: "Empfohlen von",
            ref_percentage: "Prozent für Werbenden",
            network_percentage: "Prozent für Netzwerk",
            fees_paid: "Ingesamt bezahlte Gebühren",
            fees_pending: "Anstehende Gebühren",
            fees_vested: "Anstehnde Gebühren in Sperrfristguthaben",
            in_orders: "Insgesamt %(core_asset)s in Anweisungen",
            referrals: "Empfehlungen",
            rewards: "Belohnungen",
            cashback: "Skonto",
            vested: "Zugesichert"
        },
        user_issued_assets: {
            symbol: "Symbol",
            name: "Asset Name",
            description: "Beschreibung",
            max_supply: "Maximale Verfügbarkeit",
            precision: "Genauigkeit",
            to: "An Konto emittieren",
            details: "Details"
        },
        connections: {
            known: "Bekannt von",
            black: "Schwarzgelistet von"
        },
        perm: {
            active: "Aktive Berechitigungen",
            owner: "Eigentümer Berechtigungen",
            publish: "Änderungen veröffentlichen",
            reset: "Zurücksetzen",
            add: "Berechtigung hinzufügen",
            type: "Typ",
            key: "Schlüssel/Name",
            weight: "Gewicht",
            threshold: "Schwellwert",
            confirm_add: "Hinzufügen",
            cancel: "Abbrechen"
        },
        votes: {
            proxy: "Abstimmkonto vermitteln",
            no_proxy: "Keine Vermittlung",
            name: "Name",
            info: "Info",
            votes: "Stimmen",
            url: "Webseite",
            support: "Support",
            workers: "Budgetpunkte",
            publish: "Änderungen bekanntgeben",
            add_witness: "Hinzufügen",
            remove_witness: "Entfernen",
            remove_committee: "Entfernen",
            add_committee: "Hinzufügen",
            add_committee_label: "Mitglied des Komitees",
            add_witness_label: "Witness"
        },
        options: {
            num_witnesses: "Gewünschte Anzahl Witnesses",
            num_committee: "Gewünschte Größe des Komitees",
            memo_key: "Memo Schlüssel"
        },
        upgrade: "Konto erweitern",
        unlink: "Trennen",
        link: "Verdinden",
        pay: "Bezahlen",
        overview: "Übersicht",
        history: "Historie",
        payees: "Empfänger",
        permissions: "Berechitigungen",
        voting: "Abstimmung",
        orders: "Anweisungen",
        select_placeholder: "Konto auswählen...",
        errors: {
            not_found: "Das Konto %(name)s existiert nicht. Bitte prüfgen Sie die Schreibweise!"
        }
    },
    pagination: {
        newer: "Jüngere",
        older: "Ältere"
    },
    transfer: {
        from: "Von",
        amount: "Betrag",
        to: "Zu",
        memo: "Memo",
        fee: "Gebühr",
        send: "Senden",
        "final": "Abschließendes Guthaben",
        balances: "Guthaben",
        available: "Verfügbar: ",
        errors: {
            req: "Plfichtfeld",
            pos: "Betrag darf nicht negativ sein",
            valid: "Bitte geben Sie einen positiven Betrag ein",
            balance: "Ihr abschließendes Guthaben kann nicht negativ sein!"
        },
        back: "ZURÜCK",
        confirm: "BESTÄTIGEN",
        broadcast: "Deine Überweisung wurde gesendet",
        again: "WEITERE ÜBERWEISUNG",
        see: "ÜBERWEISUNGSÜBERSICHT",
        broadcasting: "Broadcasting..."
    },
    transaction: {
        confirm: "Bitte bestätigen Sie die Transaktion",
        broadcast_success: "Transaktion wurde übermittelt",
        broadcast_fail: "Bei der Übermittlung der Transaction ist ein Fehler aufgetreten: %(message)s",
        sent: "Gesendet",
        to: "an",
        received: "Empfangen",
        from: "von",
        amount_sell: "Betrag",
        expiration: "Frist",
        fill_or: "sofortige Ausführung oder Annullierung",
        min_receive: "Mindestbetrag",
        seller: "Verkäufer",
        collateral: "Sicherheit/Pfand",
        coll_ratio: "Anfängliche Sicherheit (Verhältnis)",
        coll_maint: "Unterhalt der Sicherheit (Verhältnis)",
        create_key: "Ein öffentlicher Schlüssel wurde erzeugt",
        reg_account: "Ein Konto wurde angelegt",
        was_reg_account: "registriert von",
        create_asset: "Neuen Asset erstellen",
        limit_order: "Limit-Order für den Verkauf platziert",
        limit_order_buy: "Limit-Order für den Ankauf platziert",
        limit_order_cancel: "Limit-Order abgebrochen. ID:",
        short_order: "Short-Order für Verkauf platziert",
        short_order_cancel: "Short-Order abgebrochen. ID:",
        at: "für",
        coll_of: "mit einer Sicherheit bestehend aus",
        call_order_update: "Call-Order aktualisiert",
        upgrade_account: "Kontostatus auf Lifetime Member aktualisiert.",
        update_account: "Konto aktualisiert",
        whitelist_account: "Konto zur Positivliste hinzugefügt",
        whitelisted_by: "Wurde zur Postitivliste hinzugefügt von Konto",
        transfer_account: "Das Konto wurde übertragen",
        update_asset: "Das Asset wurde aktualisiert",
        update_feed_producers: "Die Liste der Feed-Erzeuger wurde aktualisiert",
        feed_producer: "Werde Feed-Erzeuger für ein Asset",
        asset_issue: "Emittiert",
        was_issued: "Wurde emittiert",
        by: "von",
        burn_asset: "Vernichtet",
        fund_pool: "Asset-Gebührenpool finanziert mit",
        asset_settle: "Settlement erbeten für",
        asset_global_settle: "Globales Settlement erbeten für",
        publish_feed: "Neuer Feed wurde publiziert für Asset",
        delegate_create: "Neuer Delegate wurde angelegt",
        witness_create: "Neuer Witness wurde angelegt",
        witness_pay: "Witnesslohn ausgezahlt an Konto",
        witness_receive: "Received witness from witness",
        proposal_create: "Ein Vorschlag wurde erzeugt",
        proposal_update: "Ein Vorschlag wurde aktualisiert",
        proposal_delete: "Ein Vorschlag wurde gelöscht",
        withdraw_permission_create: "Einzugsermächtigung wurde verliegen an Konto",
        withdraw_permission_update: "Einzugsermächtigung wurde aktualisiert für Konto",
        withdraw_permission_claim: "Einzugsermächtigung wurde eingefordert für Konto",
        withdraw_permission_delete: "Einzugsermächtigung wurde aufgehoben für Konto",
        paid: "Bezahlt",
        obtain: "zu erhalten",
        global_parameters_update: "Globale Parameter aktualisiert",
        file_write: "Eine Datei wurde geschrieben",
        vesting_balance_create: "Ein Sperrfristguthaben wurde erzeugt",
        "for": "für",
        vesting_balance_withdraw: "Sperrfristguthaben wurde abgehoben",
        bond_create_offer: "Ein Bondangebot wurde erstellt",
        bond_cancel_offer: "Ein Bondangebot wurde abgebrochen",
        bond_accept_offer: "Ein Bondangebot wurde akzeptiert",
        bond_claim_collateral: "Eine Sicherheit wurde eingefordert",
        bond_pay_collateral: "Eine Sicherheit wurde bezahlt",
        create_worker: "Ein Budgetpunkt wurde erzeugt. Bezahlung",
        custom: "Eine benutzerdefinierte Operation wurde definiert",
        order_id: "Anweisungskennung (ID)",
        balance_claim: "Guthaben von %(balance_amount)s der Guthabenskennung (ID) #%(balance_id)s wurde beansprucht",
        balance_owner: "Schlüssel des Guthabeneigentümers",
        balance_id: "Guthabenskennung (ID)",
        deposit_to: "Dem Konto gutgeschrieben",
        claimed: "Ingesamt beantsprucht",
        trxTypes: {
            transfer: "Überweisung",
            limit_order_create: "Limit-Order",
            limit_order_cancel: "Limit-Order abbrechen",
            call_order_update: "Call-Order aktualisieren",
            account_create: "Konto erstellen",
            account_update: "Kontoaktualisierung",
            account_whitelist: "Konto Positivliste",
            account_upgrade: "Konto Upgrade",
            account_transfer: "Konto Überweisung",
            asset_create: "Asset erstellen",
            asset_update: "Asset aktualisieren",
            asset_update_bitasset: "SmartCoin aktualisieren",
            asset_update_feed_producers: "Asset Feederzeuger aktualisieren",
            asset_issue: "Asset emittieren",
            asset_reserve: "Assetanteile vernichten",
            asset_fund_fee_pool: "Asset Gebührenpool finanzieren",
            asset_settle: "Asset Settlement",
            asset_global_settle: "Globales Asset Settlement",
            asset_publish_feed: "Asset Feed publiszieren",
            delegate_create: "Delegate erstellen",
            witness_create: "Witness erstellen",
            witness_withdraw_pay: "Witnesslohn ausbezahlen",
            proposal_create: "Proposal erstellen",
            proposal_update: "Proposal aktualisieren",
            proposal_delete: "Proposal löschen",
            withdraw_permission_create: "Einzugsermächtigung erstellen",
            withdraw_permission_update: "Einzugsermächtigung aktualisiert",
            withdraw_permission_claim: "Einzugsermächtigung eingefordert",
            withdraw_permission_delete: "Einzugsermächtigung aufgehoben",
            fill_order: "Order ausgeführt",
            delegate_update_global_parameters: "Globale Parameters aktualisiert",
            vesting_balance_create: "Sperrfristguthaben erstellt",
            vesting_balance_withdraw: "Sperrfristguthaben eingefordert",
            worker_create: "Budgetpunkt erstellt",
            custom: "benutzerdefiniert",
            assert: "Assert Pperation",
            balance_claim: "Guthaben eingefordert",
            override_transfer: "Transaktion überschreiben"
        },
        limit_order_sell: "Placed order #%(num)s to sell %(sell_amount)s at %(sell_price)s"
    },
    explorer: {
        accounts: {
            title: "Konten"
        },
        blocks: {
            title: "Blockchain",
            globals: "Globale Einstellungen",
            recent: "Letzte Blöcke"
        },
        block: {
            title: "Block",
            id: "Block ID",
            witness: "Witness",
            count: "Transaktionszähler",
            date: "Datum",
            previous: "Vorherige",
            previous_secret: "Vorheriges Geheimnis",
            next_secret: "Hash des nächsten Geheimnisses",
            op: "Aktion",
            trx: "Transaktion",
            op_type: "Aktionstyp",
            fee_payer: "Gebührenkonto",
            key: "Öffentlicher Schlüssel",
            transactions: "Anzahl der Transaktionen",
            account_upgrade: "Kontoerweiterung",
            lifetime: "Lebenslanges Mitglied werden",
            authorizing_account: "Kontovollmacht",
            listed_account: "Kontenübersicht",
            new_listing: "Neuer Eintrag",
            asset_update: "zu aktualisierender Asset",
            common_options: "Common Optionen",
            new_options: "New Option",
            new_producers: "Neue Feederzeuger",
            asset_issue: "Zu emittierender Betrag",
            max_margin_period_sec: "Max Margin Periode (s)",
            call_limit: "Call-Limit",
            short_limit: "Short-Limit",
            settlement_price: "Settlement-Preis"
        },
        assets: {
            title: "Assets",
            market: "SmartCoins",
            user: "User Issued Assets",
            symbol: "Symbol",
            id: "ID",
            issuer: "Herausgeber",
            precision: "Genauigkeit"
        },
        asset: {
            title: "Asset",
            not_found: "Das Asset %(name)s existiert nicht"
        },
        witnesses: {
            title: "Witnesses"
        },
        delegates: {
            title: "Delegates"
        },
        delegate: {
            title: "Delegate"
        },
        workers: {
            title: "Budgetpunkte"
        },
        proposals: {
            title: "Vorschlag"
        },
        account: {
            title: "Konto"
        }
    },
    settings: {
        inverseMarket: "Bevorzugte Marktorientierung",
        unit: "Bevorzugte Rechnungseinheit",
        confirmMarketOrder: "Nach Bestätigung für Marktanweisungen fragen",
        locale: "Sprache wechseln",
        confirm_yes: "Immer",
        confirm_no: "Nie",
        always_confirm: "Für jede Transaction nach Bestätigung fragen"
    },
    footer: {
        title: "Graphene",
        block: "Spitzenblock",
        loading: "Lade..."
    },
    exchange: {
        price_history: "Preisverlauf",
        order_depth: "Ordertiefe",
        market_history: "Marktverlauf",
        balance: "Guthaben",
        total: "Ingesammt",
        value: "Wert",
        price: "Preis",
        latest: "Letzer Preis",
        call: "Call Preis",
        volume: "Volumen",
        spread: "Spread",
        quantity: "Quantität",
        buy: "Kaufen",
        sell: "Verkaufen",
        confirm_buy: "Bestätigen Sie die Anweisung: Kauf von %(buy_amount)s %(buy_symbol)s zum Preis von %(price_amount)s %(price_symbol)s",
        confirm_sell: "Bestätigen Sie die Anweisung: Verkauf von %(sell_amount)s %(sell_symbol)s zum Preis von %(price_amount)s %(price_symbol)s",
        lowest_ask: "Lowest ask",
        highest_bid: "Highest bid"
    },
    markets: {
        choose_base: "Wählen Sie Ihre Grundwährung (base)",
        filter: "Filter",
        core_rate: "Kernrate:",
        supply: "Verfügbarkeit",
        search: "Suche"
    }
};