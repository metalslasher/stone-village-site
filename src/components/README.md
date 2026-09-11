# Component boundaries

Create components when implementing the corresponding approved chapter. Do not add empty components or generic Card/Button/Section wrappers.

Planned groups:
- navigation/: SiteHeader, MobileNavigation
- home/: HeroScene, SpaceStatement, ForestAndCityStory, VillageIntroduction, DailyLifeStory, CareAndSafety, ArchitectureDetails, DeveloperNote
- homes/: DuplexStory185 and CottageStory228 with separate compositions
- plans/: ProductPlanPreview, PlanViewer
- masterplan/: VillageMasterplan, MasterplanLegend
- gallery/: RealVillageGallery, GalleryViewer
- location/: LocationSection, LocationMap
- viewing/: ViewingCTA, ViewingForm, ViewingDialog
- media/: ResponsiveMedia, AmbientVideo

Reuse functional behavior, not section geometry. Section styles stay scoped in their Astro files; global CSS owns tokens, typography, accessibility and alignment only.

foundation/FoundationPreview.astro is a temporary local engineering specimen, not an approved homepage section. Replace the root page with the approved homepage during implementation; remove the specimen before launch.
