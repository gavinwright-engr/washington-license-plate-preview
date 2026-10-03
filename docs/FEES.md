# Fee groups

Checked October 2, 2026. Prices describe **passenger vehicles**, in addition to regular registration and tabs. They are not an all-in quote or a calculation for another vehicle type. Plate size changes rendering and character limits; it does not change the explicitly labeled passenger price basis.

| Background | Assigned initial / annual | Personalized initial / annual |
| --- | --- | --- |
| Standard mountain | Regular fees; no amount quoted | $174 / $52 |
| Common special-design rate | $162 / $30 | $214 / $82 |
| Square Dancer | $157.25 / $0 specialty renewal | $209.25 / $52 |
| Keep Kids Safe | $167 / $30 | $219 / confirm renewal with DOL |

Sources: [DOL's main fee table](https://dol.wa.gov/vehicles-and-boats/vehicles/license-plates/special-design-plates), [personalized plates](https://dol.wa.gov/vehicles-and-boats/vehicles/license-plates/get-custom-plates/personalized-plates), [Square Dancer](https://dol.wa.gov/vehicles-and-boats/license-plates/get-custom-plates/special-design-plates/square-dancer), and [Keep Kids Safe](https://dol.wa.gov/vehicles-and-boats/license-plates/get-custom-plates/special-design-plates/keep-kids-safe).

The 55 common-rate designs follow the main special-design table. Forty-nine individual pages also list $162 and $214 passenger fees; the six Armed Forces pages refer to a licensing office and personalized-plate instructions, and describe the usual renewal charges. Their applicant eligibility still applies.

Keep Kids Safe has inconsistent personalized-renewal information: its detail page mentions $42 while the main table uses $52 for personalization. The widget quotes the consistent passenger initial amounts and asks DOL to confirm renewal instead of resolving the conflict by assumption. It never applies the detail page's different truck amount to passenger vehicles.

Military service and veteran entries, collector vehicles, tribal plates, HAM, disabled parking, and rideshare each have an individual cost-group option and a direct DOL link. No shared or zero price is inferred for those entries. Emblems remain labeled examples. Standard assigned fees are also unquoted, not treated as free.

`feeGroups` stores checked rates and sources; every plate has an explicit `feeGroup`. Null means unquoted. Zero is used only for the documented Square Dancer specialty-renewal exception. Recheck official sources before changing rates or adding designs to a group.
