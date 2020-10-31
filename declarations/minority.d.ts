declare class ConVar {
    static SetValue(name: string, value: number | string): void;

    static GetValue(name: string): number | string;
}

declare interface PathInfo {
    hasPath: boolean;
    path: Vector[];
}

declare class GridNav {
    static IsTraversable(pos: Vector, noTreeMode?: boolean): boolean;

    static FindPath(start: Vector, end: Vector, noTreeMode?: boolean): PathInfo;
}

declare interface OnProjectileLocObject {
    target: NPC | null;
    sourceLoc: Vector;
    targetLoc: Vector;
    moveSpeed: number;
    particleSystemHandle: string;
    dodgeable: boolean;
    isAttack: boolean;
    expireTime: number;
    colorGemColor: number;
    launchTick: number;
    handle: number;
    fullName: string;
}

declare class Projectile {
    source: NPC | Hero | null;
    target: NPC | Hero | null;
    moveSpeed: number;
    sourceAttachment: Enum.ParticleAttachment;
    particleSystemHandle: number;
    dodgeable: boolean;
    isAttack: boolean;
    isEvaded: boolean;
    expireTime: number;
    maxImpactTime: number;
    colorGemColor: number;
    fullName: string;
    name: string;
    handle: number;
}

declare class LinearProjectile {
    maxDist: number;
    fowRadius: number;
    source: NPC | Entity | Hero | null;
    origin: Vector;
    velocity: Vector;
    particleIndex: number;
    handle: number;
    acceleration: Vector;
    latency: number;
    maxSpeed: number;
    fullName: string;
    name: string;
}

declare interface CreatedParticle {
    index: number;
    entity: NPC | Entity | Hero | null;
    particleNameIndex: number;
    attachType: number;
    entityForModifiers: NPC | Hero | null;
    fullName: string;
    name: string;
}

declare interface UpdatedParticle {
    index: number;
    position: Vector;
    controlPoint: number;
}

declare interface UpdatedParticleFallback {
    index: number;
    position: Vector;
    controlPoint: number;
}

declare interface ParticleUpdateEntity {
    index: number;
    controlPoint: number;
    entity: NPC | Entity | Hero | null;
    attachType: number;
    attachment: Enum.ParticleAttachment;
    position: Vector;
    includeWearables: boolean;
}

declare interface DestroyedParticle {
    index: number;
    destroyImmediately: boolean;
}

declare class Sound {
    source: Entity | null;
    name: string;
    hash: number;
    guid: number;
    seed: number;
}

declare interface PreparedOrder {
    player: Player;
    order: Enum.UnitOrder;
    target: NPC | null;
    targetIndex: Number | null;
    position: Vector | null;
    ability: Ability | null;
    abilityIndex: Number | null;
    orderIssuer: Enum.PlayerOrderIssuer;
    npc: NPC | null;
    queue: boolean;
    showEffects: boolean;
}

declare interface UnitAnimationCallbackObject {
    unit: NPC | null;

    /**
     * @return Attack animation index 2
     */
    sequenceVariant: number;

    /**
     * @return Animation speed scales
     */
    playbackRate: number;

    /**
     * @return Time from start to the poke
     */
    castpoint: number;


    type: number;

    /**
     * @return Dota 2 action variant
     */
    activity: number;

    /**
     * @return Attack animation index
     */
    sequence: number;

    /**
     * @return Attack animation name
     */
    sequenceName: string;
}

declare interface UnitAnimationEndCallbackObject {
    unit: NPC | null;

    /**
     * @return I don't fucking know
     */
    snap: any;
}

declare interface KeyEventObject {
    event: Enum.KeyEvent;
    key: Enum.ButtonCode;
}

declare interface FireEventObject {
    name: string;
    id: number;

    GetBool(key: string): number;

    GetInt(key: string): number;

    GetFloat(key: string): number;

    GetString(key: string): number;
}

declare interface OnProjectileLocObject {
    target: NPC | null;
    sourceLoc: Vector;
    targetLoc: Vector;
    moveSpeed: number;
    particleSystemHandle: string;
    dodgeable: boolean;
    isAttack: boolean;
    expireTime: number;
    colorGemColor: number;
    launchTick: number;
    handle: number;
    fullName: string;
}

declare interface UnitAddGestureObject {
    unit: NPC | null;
    sequenceVariant: number;
    playbackRate: number;
    fadeIn: number;
    fadeOut: number;
    slot: number;
    activity: number;
    sequenceName: string;
}

declare interface ScriptDescription {
    OnParticleUpdateFallback?: (particle: UpdatedParticleFallback) => void;

    OnUnitAddGesture?: (anim: UnitAddGestureObject) => void;

    OnProjectileLoc?: (projectile: OnProjectileLocObject) => void;

    OnFireEvent?: (event: FireEventObject) => void;

    OnKeyEvent?: (event: KeyEventObject) => void;

    OnDraw?: () => void;

    OnFrame?: () => void;

    OnUpdate?: () => void;

    OnUnitAnimation?: (animation: UnitAnimationCallbackObject) => void;

    OnUnitAnimationEnd?: (animation: UnitAnimationEndCallbackObject) => void;

    OnProjectile?: (projectile: Projectile) => void;

    OnLinearProjectileCreate?: (projectile: LinearProjectile) => void;

    OnLinearProjectileDestroy?: (handle: number) => void;

    OnParticleCreate?: (particle: CreatedParticle) => void;

    OnParticleUpdate?: (particle: UpdatedParticle) => void;

    OnParticleUpdateEntity?: (particle: ParticleUpdateEntity) => void;

    OnParticleDestroy?: (particle: DestroyedParticle) => void;

    OnEntityCreate?: (entity: NPC) => void;

    OnEntityDestroy?: (entity: NPC) => void;

    OnModifierCreate?: (entity: Entity, modifier: Modifier) => void;

    OnModifierDestroy?: (entity: Entity, modifier: Modifier) => void;

    OnStartSound?: (sound: Sound) => void;

    OnPrepareUnitOrders?: (order: PreparedOrder) => boolean | void;

    OnGameStart?: () => void;

    OnGameEnd?: () => void;

    OnScriptLoad?: () => void;

    OnScriptUnload?: () => void;

    /**
     * @deprecated
     */
    OnMenuOptionChange?: (changesObject: MenuOptionChangeObject) => void;
}

declare function RegisterScript(script: ScriptDescription, name?: string): void;

declare class Font {

}

declare class LoadedImage {

}

declare class TargetProjectile {
    index: number;
    speed: number;
    currentPosition: Vector;
    targetPosition: Vector;
    source: NPC;
    target: NPC;
    dodgeable: boolean;
    isattack: boolean;
    isevaded: boolean;
}

declare class EntitySystem {
    /**
     * @example
     * ```js
     * let myHero = EntitySystem.GetLocalHero();
     * // exmaple usage:
     * console.log(myHero.GetMaxMana()); // will print max mana of your hero
     * ```
     * @return Local hero object
     */
    static GetLocalHero(): Hero;

    /**
     * @example
     * ```js
     * let myPlayer = EntitySystem.GetLocalPlayer();
     * ```
     * @return Local player object
     */
    static GetLocalPlayer(): Player;

    static GetPlayersList(): Array<Player>;

    /**
     * @example
     * ```js
     * let heroesList = EntitySystem.GetHeroesList();
     * // example usage:
     * for(let i = 0; i < heroesList.length; i++) {
     *     // will print names of heroes in the game
     *     console.log(heroesList[i].GetUnitName());
     * }
     * ```
     * @return Array with hero objects
     */
    static GetHeroesList(): Array<Hero>;

    /**
     * @example
     * ```js
     * let heroesList = EntitySystem.GetHeroesList();
     * // example usage:
     * for(let i = 0; i < heroesList.length; i++) {
     *     // will print names of heroes in the game
     *     console.log(heroesList[i].GetUnitName());
     * }
     * ```
     * @return Array with hero objects
     */
    static GetNPCsList(): Array<NPC>;

    static GetCouriersList(): Courier[];

    static GetRunesList(): Rune[];

    static GetEntitiesList(): Array<Entity>;

    static GetTargetProjectileList(): Array<TargetProjectile>;

    static GetLinearProjectileList(): [];

    static GetPhysicalItemsList(): PhysicalItem[];
}

declare class Input {
    static GetWorldCursorPos(): Vector;

    static GetNearestUnitToCursor(teamType: Enum.TeamType): NPC | null;

    static GetNearestHeroToCursor(teamType: Enum.TeamType): Hero | null;

    static IsKeyDown(key: Enum.ButtonCode, checkInputCapture?: boolean): boolean;

    static IsKeyDownOnce(key: Enum.ButtonCode, checkInputCapture?: boolean): boolean;

    static IsInputCaptured(): boolean;

    static GetCursorPos(): [number, number];

    static IsCursorInRect(x: number, y: number, width: number, height: number): boolean;

    static IsCursorInBounds(x1: number, y1: number, x2: number, y2: number): boolean;

    static SetCursorPos(x: number, y: number): void;
}

declare class MiniMapIconHandle {

}

declare class MiniMap {
    static Ping(position: Vector, type: Enum.PingType, clientSide?: boolean): void;

    static DrawLine(start: Vector, end: Vector, clientSide?: boolean): void;

    static BeginLine(start: Vector, clientSide?: boolean): void;

    static ContinueLine(end: Vector, clientSide?: boolean): void;

    static AddIconByName(index: MiniMapIconHandle | null, unitName: string, position: Vector, size: number, time?: number, r?: number, g?: number, b?: number, a?: number): MiniMapIconHandle;
}

declare class Particle {
    static CreateCircle(particle: Particle | null, position: Vector | Entity, radius: number): Particle;

    static CreateColoredCircle(particle: Particle | null, position: Vector | Entity, radius: number, r: number, g: number, b: number, a: number, dashAlpha: number): Particle;

    static Create(imageHandle: string, attachmentType: Enum.ParticleAttachment, attachmentEntity?: Entity): Particle;

    SetControl(controlIndex: number, vector: Vector): void;

    Destroy(): void;
}

declare class Renderer {
    static LoadImageModifier(fileName: string, debuffColor?: boolean): void;

    static DrawTextCentered(font: Font, x: number, y: number, text: string, liveTime?: number): void;

    static IsOnScreen(x: number, y: number): boolean;

    static DrawWorldImage(id: LoadedImage, vec1: Vector, w: number, h: number, time?: number): void;

    static DrawWorldImageCentered(id: LoadedImage, vec1: Vector, w: number, h: number, time?: number): void;

    static DrawWorldImageCenteredX(id: LoadedImage, vec1: Vector, w: number, h: number, time?: number): void;

    static DrawWorldImageCenteredY(id: LoadedImage, vec1: Vector, w: number, h: number, time?: number): void;

    static SetTopMost(enable: boolean): void;

    static DrawWorldLine(vec1: Vector, vec2: Vector, time?: number): void;

    static DrawWorldFilledRect(vec1: Vector, w: number, h: number, time?: number): void;

    static DrawWorldFilledRectCentered(vec1: Vector, w: number, h: number, time?: number): void;

    static DrawWorldFilledRectCenteredX(vec1: Vector, w: number, h: number, time?: number): void;

    static DrawWorldFilledRectCenteredY(vec1: Vector, w: number, h: number, time?: number): void;

    static DrawWorldOutlineRect(vec1: Vector, w: number, h: number, time?: number): void;

    static DrawWorldOutlineRectCentered(vec1: Vector, w: number, h: number, time?: number): void;

    static DrawWorldOutlineRectCenteredX(vec1: Vector, w: number, h: number, time?: number): void;

    static DrawWorldOutlineRectCenteredY(vec1: Vector, w: number, h: number, time?: number): void;

    static DrawWorldText(font: Font, vec1: Vector, text: string, time?: number): void;

    static DrawWorldTextInverted(font: Font, vec1: Vector, text: string, time?: number): void;

    static DrawWorldTextInvertedX(font: Font, vec1: Vector, text: string, time?: number): void;

    static DrawWorldTextInvertedY(font: Font, vec1: Vector, text: string, time?: number): void;

    static DrawWorldTextCentered(font: Font, vec1: Vector, text: string, time?: number): void;

    static DrawWorldTextCenteredX(font: Font, vec1: Vector, text: string, time?: number): void;

    static DrawWorldTextCenteredY(font: Font, vec1: Vector, text: string, time?: number): void;

    static SetDrawColor(r: number, g: number, b: number, a: number, liveTime?: number): void;

    static DrawLine(x_start: number, y_start: number, x_end: number, y_end: number, liveTime?: number): void;

    static DrawFilledRect(x: number, y: number, width: number, height: number, liveTime?: number): void;

    static DrawOutlineRect(x: number, y: number, width: number, height: number, liveTime?: number): void;

    static LoadFont(name: string, size: number, weight: Enum.FontWeight, flags?: Enum.FontFlags, liveTime?: number): Font;

    static DrawText(font: Font, x: number, y: number, text: string, liveTime?: number): void;

    static DrawOutlineText(font: Font, x: number, y: number, text: string, r: number, g: number, b: number, a: number): void;

    static DrawTextDef(x: number, y: number, text: string): void;

    static LoadImage(fileName: string): LoadedImage;

    static DrawImage(imageHandle: LoadedImage, x: number, y: number, width: number, height: number, liveTime?: number): void;

    static WorldToScreen(vector: Vector): [number, number, boolean?];

    static GetScreenSize(): [number, number];

    static GetTextSize(font: Font, text: string): [number, number];
}

declare class Modifier {
    IsExist(): boolean;

    IsDebuff(): boolean;

    GetElapsedTime(): number;

    GetRemainingTime(): number;

    GetOwner(): NPC;

    GetName(): string;

    GetClass(): string;

    GetModifierAuraName(): string;

    GetSerialNumber(): number;

    GetIndex(): number;

    GetCreationTime(): number;

    GetCreationFrame(): number;

    GetLastAppliedTime(): number;

    GetDuration(): number;

    GetDieTime(): number;

    GetStackCount(): number;

    GetAuraSearchTeam(): number;

    GetAuraSearchType(): number;

    GetAuraSearchFlags(): number;

    GetAuraRadius(): number;

    GetTeam(): number;

    GetAttributes(): number;

    IsAura(): boolean;

    IsAuraActiveOnDeath(): boolean;

    GetMarkedForDeletion(): boolean;

    IsHealingAura(): boolean;

    GetConstantByIndex(): number;

    GetAbility(): Ability;
}

declare class Tower extends NPC {
    GetAttackTarget(): NPC;
}

declare class PhysicalItem extends Entity {
    GetItem(): Item;
}

declare class Rune extends Entity {
    GetRuneType(): Enum.RuneType;
}

declare class Courier extends NPC {
    IsFlyingCourier(): boolean;

    GetRespawnTime(): number;

    GetCourierState(): Enum.CourierState;

    GetCourierStateEntity(): Hero | null;
}

declare class Tree extends Entity {
    IsActive(): boolean;

    GetBinaryID(): number;
}

declare class Player extends Entity {
    GetPlayerSelectedHeroName(): string;

    GetSelectedHeroID(): number;

    GetLastBuybackTime(): number;

    GetTeamSlot(): number;

    GetClassName(): "C_DOTAPlayer";

    PrepareUnitOrdersUnsafe(orderType: Enum.UnitOrder,
                            target: NPC | Entity | Hero | Item | number | null,
                            position: Vector | null,
                            ability: Ability | number | null,
                            units: NPC[],
                            queue?: boolean,
                            showEffects?: boolean): void;

    GetTotalGold(): number;

    GetReliableGold(): number;

    GetUnreliableGold(): number;

    GetNetWorth(): number;

    IsValid(): boolean;

    IsFullyJoined(): boolean;

    IsFakeClient(): boolean;

    GetConnectionState(): number;

    GetSteamID(): number;

    PrepareUnitOrders(orderType: Enum.UnitOrder,
                      target: NPC | Hero | Item | number | null,
                      position: Vector | null,
                      ability: Ability | number | null,
                      orderIssuer: Enum.PlayerOrderIssuer,
                      callAs: NPC | Hero | Entity | null,
                      queue?: boolean,
                      showEffects?: boolean): void;

    HoldPosition(callAs: NPC | Entity | Hero | null, queue?: boolean): void;

    AttackTarget(callAs: NPC | Entity | Hero | null,
                 target: NPC | Entity | Hero | null,
                 queue?: boolean): void;

    GetPlayerID(): number;

    GetName(): string;

    GetKills(): number;

    GetAssists(): number;

    GetDeaths(): number;

    GetAssists(): number;

    GetDeaths(): number;

    GetStreak(): number;

    GetRespawnTime(): number;

    IsMuted(): boolean;

    GetBuybackCooldownTime(): number;

    GetBuybackCostTime(): number;

    GetBuybackGoldLimitTime(): number;

    GetSelectedUnits(): Array<NPC>;

    AddSelectedUnit(unit: NPC | Entity | Hero): void;

    ClearSelectedUnits(): void;
}

declare class Hero extends NPC {
    GetTalentsMask(): number;

    GetTalents(): Array<Ability>;

    GetPlayerID(): number;

    GetImageIcon(): LoadedImage;

    GetCurrentXP(): number;

    GetAbilityPoints(): number;

    GetRespawnTime(): number;

    GetRespawnTimePenalty(): number;

    GetPrimaryAttribute(): Enum.Attributes;

    GetStrength(): number;

    GetAgility(): number;

    GetIntellect(): number;

    GetStrengthTotal(): number;

    GetAgilityTotal(): number;

    GetIntellectTotal(): number;

    GetRecentDamage(): number;

    GetPainFactor(): number;

    GetTargetPainFactor(): number;

    GetLifeState(): boolean;

    GetReplicatingOtherHeroModel(): Hero | null;
}

declare class KeyValue {
    GetRawFloat(): number;

    FindKey(key: string): KeyValue;

    GetString(): string;

    GetRawNumber(): number;

    GetNumber(): number;

    GetValue(): number | string;
}

declare class Ability extends Entity {
    CanBeExecuted(): boolean;

    GetImagePath(): string;

    IsStealable(): boolean;

    GetKeyBind(): string;

    GetChannelStartTime(): number;

    FindKey(key: string): KeyValue;

    IsTalent(): boolean;

    GetImage(): LoadedImage;

    CastTarget(target: NPC | Entity | Hero, queue?: boolean): void;

    IsExist(): boolean;

    CanCast(): boolean;

    GetOwner(): NPC;

    IsBasic(): boolean;

    IsUltimate(): boolean;

    IsAttributes(): boolean;

    GetType(): Enum.AbilityTypes;

    GetBehavior(): Enum.AbilityBehavior;

    GetTargetTeam(): Enum.TargetTeam;

    GetTargetType(): Enum.TargetType;

    GetTargetFlags(): Enum.TargetFlags;

    GetDamageType(): Enum.DamageTypes;

    GetImmunityType(): Enum.ImmunityTypes;

    GetDispellableType(): Enum.DispellableTypes;

    GetLevelSpecialValueFor(key: string): number | null;

    GetLevelSpecialValueForFloat(key: string): number | null;

    SecondsSinceLastUse(): number | null;

    GetDamage(): number;

    GetCastPoint(): number;

    IsCastable(mana: number, passiveOk?: boolean): boolean;

    IsPassive(): boolean;

    IsChannelling(): boolean;

    GetName(): string | null;

    CastNoTarget(queue?: boolean): void;

    CastPosition(position: Vector, queue?: boolean): void;

    Toggle(queue?: boolean): void;

    ToggleMod(queue?: boolean): void;

    GetIndex(): number;

    GetCastRange(): number;

    IsHidden(): boolean;

    IsActivated(): boolean;

    GetDirtyButtons(): number;

    GetLevel(): number;

    GetToggleState(): boolean;

    IsInAbilityPhase(): boolean;

    GetCooldown(): number;

    GetCooldownLength(): number;

    GetManaCost(): number;

    GetAutoCastState(): boolean;

    IsInIndefinateCooldown(): boolean;

    GetOverrideCastPoint(): number;

    IsStolen(): boolean;
}

declare class EntityState {
    health: number;
    mana: number;
    shield: number;
    visageShields: number;
    templarShields: number;
    calculateDamage: number;
    aeonEnabled: boolean;
    flags: number;
    precalcResist: number;
}

declare class NPC extends Entity {
    IsControllableByPlayer(player: Player): boolean;

    FindKey(key: string): KeyValue;

    IsInRangeOfShop(shopType: Enum.ShopType): boolean;

    GetAbilities(): Ability[];

    IsShrine(): boolean;

    IsMeepoClone(): boolean;

    GetTurnAngleDiff(): number;

    GetUnitState(): string;

    GetAttackRangeBonus(): number;

    GetImage(needIcon?: boolean): LoadedImage;

    GetFountainPosition(): Vector;

    HasAghanimScepter(): boolean;

    GetAttackDelay(): number;

    GetAttackAnimationPoint(): number;

    GetAnimationSequence(): number;

    GetAnimationCycle(): number;

    SetZDelta(height: number): void;

    SetGlow(enabled: boolean, r?: number, g?: number, b?: number, a?: number): void;

    GetItems(inRealInventory: boolean): Item[];

    GetUltimate(): Ability;

    IsVisible(): boolean;

    IsCourier(): boolean;

    IsRanged(): boolean;

    IsCreep(): boolean;

    IsLaneCreep(): boolean;

    IsStructure(): boolean;

    IsTower(): boolean;

    IsAncient(): boolean;

    IsIllusion(): boolean;

    IsRoshan(): boolean;

    IsNeutral(): boolean;

    IsHero(): boolean;

    IsEntityInRange(entity: Entity, range: number): boolean;

    IsPositionInRange(position: Vector, range: number, hull: number): boolean;

    IsLinkensProtected(): boolean;

    IsChannellingAbility(): boolean;

    IsRunning(): boolean;

    IsAttacking(): boolean;

    IsSilenced(): boolean;

    IsStunned(): boolean;

    HasAegis(): boolean;

    IsKillable(): boolean;

    IsWaitingToSpawn(): boolean;

    HasState(modifierState: Enum.ModifierState): boolean;

    HasModifier(modifierName: string): boolean;

    GetModifier(modifierName: string): Modifier;

    GetModifiers(): Array<Modifier>;

    HasInventorySlotFree(inRealInventory?: boolean): boolean;

    GetActivity(): Enum.GameActivity;

    GetAttackRange(): number;

    GetCastRangeBonus(): number;

    GetDamageMultiplierVersus(entity: Entity): number;

    GetPhysicalArmorValue(): number;

    GetPhysicalDamageReduction(): number;

    GetArmorDamageMultiplier(): number;

    GetMagicalArmorValue(): number;

    GetMagicalArmorDamageMultiplier(): number;

    GetIncreasedAttackSpeed(): number;

    GetBaseAttackSpeed(): number;

    GetAttacksPerSecond(): number;

    GetAttackTime(): number;

    GetHullRadius(): number;

    GetProjectileCollisionSize(): number;

    GetTurnRate(): number;

    IsTurning(): boolean;

    GetTimeToFace(entity: Entity): number;

    FindRotationAngle(position: Vector): Angle;

    GetTimeToFacePosition(position: Vector): number;

    /**
     *
     * @param teamType
     * @param minRange -1
     * @param minAngle -1
     */
    FindFacingNPC(teamType: Enum.TeamType, minRange?: number, minAngle?: number): NPC | null;

    GetMoveSpeed(): number;

    GetBaseSpeed(): number;

    GetTrueDamage(): number;

    GetMinDamage(): number;

    GetBonusDamage(): number;

    GetItemByIndex(index: number): Item;

    GetItem(itemName: string, realInventory: boolean): Item | null;

    HasItem(itemName: string, inRealInventory: true): boolean;

    GetAbilityByIndex(index: number): Ability;

    GetAbility(abilityName: string): Ability;

    HasAbility(abilityName: string): Ability;

    GetMana(): number;

    GetMaxMana(): number;

    GetManaRegen(): number;

    GetHealthRegen(): number;

    GetCurrentLevel(): number;

    GetDayTimeVisionRange(): number;

    GetNightTimeVisionRange(): number;

    /**
     * @returns Unit name, NOT implemented in OnEntityCreate
     */
    GetUnitName(): string;

    /**
     * @returns Entity name, IMPLEMENTED in OnEntityCreate
     */
    GetEntityName(): string;

    GetHealthBarOffset(): number;

    GetAttachment(attachmentName: boolean): Vector;

    GetAttachmentByIndex(attachmentIndex: number): Vector;

    MoveTo(position: Vector, queue?: boolean, showEffects?: boolean): Vector;

    GetMagicalDamageMultiplier(): number;

    GetStateAfterDamage(state: null | EntityState, damage: number): EntityState;
}

declare class Entity {
    SetModelColor(r: number, g: number, b: number, a: number): void;

    SetScale(size: number): void;

    SetModel(modelPath: string): void;

    GetEntityName(): string;

    GetTempTreeIndex(): number;

    GetProperty(className: string, propertyName: string): string | number | boolean;

    IsPhysicalItem(): boolean;

    IsExist(): boolean;

    GetTrueMaximumDamage(): number;

    GetClassName(): string;

    IsEntity(): boolean;

    IsSameTeam(entity: Entity): boolean;

    IsNPC(): boolean;

    IsPlayer(): boolean;

    IsAbility(): boolean;

    IsPhysicalItem(): boolean;

    IsAlive(): boolean;

    IsDormant(): boolean;

    GetHealth(): number;

    GetMaxHealth(): number;

    GetTeamNum(): number;

    GetOrigin(): Vector;

    GetAbsOrigin(): Vector;

    GetRotation(): Angle;

    GetAbsRotation(): Angle;

    GetIndex(): number;

    GetHandle(): number;

    IsRecursiveOwnedByIndex(index: number): boolean;

    IsRecursiveOwnedByHandle(index: number): boolean;

    IsOwnedByIndex(index: number): boolean;

    IsOwnedByHandle(index: number): boolean;

    IsOwnedBy(entity: Entity): boolean;

    GetOwner(): Entity | Player | NPC | null;

    GetOwnerRecursive(): Entity | null;

    GetHeroesInRadius(radius: number, teamType: Enum.TeamType): Array<Hero>;

    GetUnitsInRadius(radius: number, teamType: Enum.TeamType): Array<NPC>;

    GetTreesInRadius(radius: number, isActive?: boolean): Array<Tree>;
}

declare class Item extends Ability {
    GetCost(): number;

    GetPowerTreadsState(): Enum.PowerTreadsAttributes;

    IsPermanent(): boolean;

    IsStackable(): boolean;

    HasRecipe(): boolean;

    GetSharability(): boolean;

    IsDroppable(): boolean;

    IsPurchasable(): boolean;

    IsSellable(): boolean;

    // на вардах возвращает false
    IsRequireCharges(): boolean;

    IsKillable(): boolean;

    IsDisassemblable(): boolean;

    IsAlertable(): boolean;

    GetInitialCharges(): number;

    CastsOnPickup(): boolean;

    GetCurrentCharges(): number;

    GetSecondaryCharges(): number;

    IsCombineLocked(): boolean;

    GetPurchaseTime(): number;

    GetAssembledTime(): number;

    IsPurchasedWhileWasDead(): boolean;

    CanBeUsedOutOfInventory(): boolean;

    IsItemEnabled(): boolean;

    GetEnableTime(): number;

    GetPlayerOwnerID(): number;
}

declare class Vector {
    Distance2D(vector: Vector): number;

    constructor(x?: number, y?: number, z?: number);

    x: number;
    y: number;
    z: number;

    toString(): string;

    sub(vector: Vector): Vector;

    add(vector: Vector): Vector;

    mul(vector: Vector): Vector;

    Set(x: number, y: number, z: number): void;

    Length(): number;

    LengthSqr(): number;

    Length2D(): number;

    Length2DSqr(): number;

    Normalize(): void;

    Normalized(): Vector;

    Dot(): number;

    Dot2D(): number;

    Scale(factor: number): void;

    Scaled(factor: number): Vector;

    Distance(vector: Vector): number;

    Rotate(angle: number | Angle): void;

    Rotated(angle: number | Angle): Vector;

}

declare class Angle {
    constructor(pitch: number, yaw: number, roll: number);

    pitch: number;
    yaw: number;
    roll: number;

    x: number;
    y: number;
    z: number;

    GetForward(): Vector;
}

declare class Engine {
    static GetGroundZ(position: Vector): number;

    static IsPointVisible(position: Vector): boolean;

    static Crash(): void;

    static GetSteamID(): string;

    static GetCoreMMR(): number;

    static GetSupportMMR(): number;

    static IsShopOpen(): boolean;

    static HaveAOEPlaceholder(): boolean;

    /**
     * @example
     * ```
     * // Отправит сообщение с описанием ошибок, которые возникли в течение игры
     * Engine.SendUsageStatistics({
     *     sendTo: [123, 321, 555], // отправит сообщение этим Telegram ID
     *     data: {
     *         errorsCount: errors.length,
     *         errors: errors.map(e => e.message),
     *     }
     * });
     * ```
     * */
    static SendUsageStatisctics(data: {
        sendTo: number | number[]; // Telegram ID кому отправлять информацию, обязательно иметь диалог с @infeeble_jericho_bot
        data: {
            [key: string]: any;
        }
    }): void;

    static RegisterFireEvent(name: string): void;

    static OnceAt(time: number, realTime?: boolean): boolean;

    static AcceptMatch(): void;

    static CanAcceptMatch(): boolean;

    static IsInGame(): boolean;

    static ExecuteCommand(command: string): void;

    static RunScript(script: string): void;
}

declare class GameRules {
    static IsHeroAvailableByName(name: string): boolean;

    static GetStateTransitionTime(): number;

    static CanPurchaseItem(name: string): boolean;

    static SetRiverType(type: number): void;

    static GetServerGameState(): number;

    static GetGameState(): Enum.GameState;

    static GetGameMode(): number;

    static GetPreGameStartTime(): number;

    static GetGameStartTime(): number;

    static GetGameEndTime(): number;

    static GetGameLoadTime(): number;

    static GetGameTime(): number;

    static IsPaused(): boolean;

    static IsTemporaryDay(): boolean;

    static IsTemporaryNight(): boolean;

    static IsNightstalkerNight(): boolean;

    static IsActiveGame(): boolean;

    static GetMatchID(): number;
}

declare namespace Enum {
    export enum Talents {
        TALENT_1,
        TALENT_2,
        TALENT_3,
        TALENT_4,
        TALENT_5,
        TALENT_6,
        TALENT_7,
        TALENT_8
    }

    export enum ShopType {
        DOTA_SHOP_HOME,
        DOTA_SHOP_SIDE,
        DOTA_SHOP_SECRET,
        DOTA_SHOP_GROUND,
        DOTA_SHOP_SIDE2,
        DOTA_SHOP_SECRET2,
        DOTA_SHOP_CUSTOM,
        DOTA_SHOP_NONE
    }

    export enum GameState {
        INIT,
        WAIT_FOR_PLAYERS_TO_LOAD,
        HERO_SELECTION,
        STRATEGY_TIME,
        PRE_GAME,
        GAME_IN_PROGRESS,
        POST_GAME,
        DISCONNECT,
        TEAM_SHOWCASE,
        CUSTOM_GAME_SETUP,
        WAIT_FOR_MAP_TO_LOAD0,
        LAST
    }

    export enum KeyEvent {
        SCROLL_DOWN,
        SCROLL_UP,
        KEY_DOWN,
        KEY_UP
    }

    export enum PowerTreadsAttributes {
        DOTA_PT_ATTRIBUTE_STRENGTH,
        DOTA_PT_ATTRIBUTE_INTELLECT,
        DOTA_PT_ATTRIBUTE_AGILITY,
    }

    export enum PingType {
        NORMAL,
        DANGER,
        HEADING,
        RETREAT,
        ATTACK,
        ENEMY_VISION,
        OWN_VISION,
    }

    export enum RuneType {
        DOTA_RUNE_INVALID,
        DOTA_RUNE_DOUBLEDAMAGE,
        DOTA_RUNE_HASTE,
        DOTA_RUNE_ILLUSION,
        DOTA_RUNE_INVISIBILITY,
        DOTA_RUNE_REGENERATION,
        DOTA_RUNE_BOUNTY,
        DOTA_RUNE_ARCANE,
        DOTA_RUNE_COUNT,
    }

    export enum CourierState {
        COURIER_STATE_INIT,
        COURIER_STATE_IDLE,
        COURIER_STATE_AT_BASE,
        COURIER_STATE_MOVING,
        COURIER_STATE_DELIVERING_ITEMS,
        COURIER_STATE_RETURNING_TO_BASE,
        COURIER_STATE_DEAD,
    }

    export enum PlayerOrderIssuer {
        DOTA_ORDER_ISSUER_SELECTED_UNITS,
        DOTA_ORDER_ISSUER_CURRENT_UNIT_ONLY,
        DOTA_ORDER_ISSUER_HERO_ONLY,
        DOTA_ORDER_ISSUER_PASSED_UNIT_ONLY,
    }

    export enum UnitOrder {
        DOTA_UNIT_ORDER_NONE = 0,
        DOTA_UNIT_ORDER_MOVE_TO_POSITION,
        DOTA_UNIT_ORDER_MOVE_TO_TARGET,
        DOTA_UNIT_ORDER_ATTACK_MOVE,
        DOTA_UNIT_ORDER_ATTACK_TARGET,
        DOTA_UNIT_ORDER_CAST_POSITION,
        DOTA_UNIT_ORDER_CAST_TARGET,
        DOTA_UNIT_ORDER_CAST_TARGET_TREE,
        DOTA_UNIT_ORDER_CAST_NO_TARGET,
        DOTA_UNIT_ORDER_CAST_TOGGLE,
        DOTA_UNIT_ORDER_HOLD_POSITION,
        DOTA_UNIT_ORDER_TRAIN_ABILITY,
        DOTA_UNIT_ORDER_DROP_ITEM,
        DOTA_UNIT_ORDER_GIVE_ITEM,
        DOTA_UNIT_ORDER_PICKUP_ITEM,
        DOTA_UNIT_ORDER_PICKUP_RUNE,
        DOTA_UNIT_ORDER_PURCHASE_ITEM,
        DOTA_UNIT_ORDER_SELL_ITEM,
        DOTA_UNIT_ORDER_DISASSEMBLE_ITEM,
        DOTA_UNIT_ORDER_MOVE_ITEM,
        DOTA_UNIT_ORDER_CAST_TOGGLE_AUTO,
        DOTA_UNIT_ORDER_STOP,
        DOTA_UNIT_ORDER_TAUNT,
        DOTA_UNIT_ORDER_BUYBACK,
        DOTA_UNIT_ORDER_GLYPH,
        DOTA_UNIT_ORDER_EJECT_ITEM_FROM_STASH,
        DOTA_UNIT_ORDER_CAST_RUNE,
        DOTA_UNIT_ORDER_PING_ABILITY,
        DOTA_UNIT_ORDER_MOVE_TO_DIRECTION,
        DOTA_UNIT_ORDER_PATROL,
        DOTA_UNIT_ORDER_VECTOR_TARGET_POSITION,
        DOTA_UNIT_ORDER_RADAR,
        DOTA_UNIT_ORDER_SET_ITEM_COMBINE_LOCK,
        DOTA_UNIT_ORDER_CONTINUE,
        DOTA_UNIT_ORDER_VECTOR_TARGET_CANCELED,
        DOTA_UNIT_ORDER_CAST_RIVER_PAINT,
        DOTA_UNIT_ORDER_PREGAME_ADJUST_ITEM_ASSIGNMENT
    }

    export enum Attributes {
        ATTRIBUTE_INVALID,
        ATTRIBUTE_STRENGTH,
        ATTRIBUTE_AGILITY,
        ATTRIBUTE_INTELLIGENCE,
    }

    export enum DispellableTypes {
        SPELL_DISPELLABLE_NONE,
        SPELL_DISPELLABLE_YES_STRONG,
        SPELL_DISPELLABLE_YES,
        SPELL_DISPELLABLE_NO,
    }

    export enum ImmunityTypes {
        SPELL_IMMUNITY_NONE,
        SPELL_IMMUNITY_ALLIES_YES,
        SPELL_IMMUNITY_ALLIES_NO,
        SPELL_IMMUNITY_ENEMIES_YES,
        SPELL_IMMUNITY_ENEMIES_NO,
    }

    export enum DamageTypes {
        DAMAGE_TYPE_NONE,
        DAMAGE_TYPE_PHYSICAL,
        DAMAGE_TYPE_MAGICAL,
        DAMAGE_TYPE_PURE,
        DAMAGE_TYPE_HP_REMOVAL,
        DAMAGE_TYPE_ALL,
    }

    export enum TargetFlags {
        DOTA_UNIT_TARGET_FLAG_NONE,
        DOTA_UNIT_TARGET_FLAG_RANGED_ONLY,
        DOTA_UNIT_TARGET_FLAG_MELEE_ONLY,
        DOTA_UNIT_TARGET_FLAG_DEAD,
        DOTA_UNIT_TARGET_FLAG_MAGIC_IMMUNE_ENEMIES,
        DOTA_UNIT_TARGET_FLAG_NOT_MAGIC_IMMUNE_ALLIES,
        DOTA_UNIT_TARGET_FLAG_INVULNERABLE,
        DOTA_UNIT_TARGET_FLAG_FOW_VISIBLE,
        DOTA_UNIT_TARGET_FLAG_NO_INVIS,
        DOTA_UNIT_TARGET_FLAG_NOT_ANCIENTS,
        DOTA_UNIT_TARGET_FLAG_PLAYER_CONTROLLED,
        DOTA_UNIT_TARGET_FLAG_NOT_DOMINATED,
        DOTA_UNIT_TARGET_FLAG_NOT_SUMMONED,
        DOTA_UNIT_TARGET_FLAG_NOT_ILLUSIONS,
        DOTA_UNIT_TARGET_FLAG_NOT_ATTACK_IMMUNE,
        DOTA_UNIT_TARGET_FLAG_MANA_ONLY,
        DOTA_UNIT_TARGET_FLAG_CHECK_DISABLE_HELP,
        DOTA_UNIT_TARGET_FLAG_NOT_CREEP_HERO,
        DOTA_UNIT_TARGET_FLAG_OUT_OF_WORLD,
        DOTA_UNIT_TARGET_FLAG_NOT_NIGHTMARED,
        DOTA_UNIT_TARGET_FLAG_PREFER_ENEMIES,
        DOTA_UNIT_TARGET_FLAG_RESPECT_OBSTRUCTIONS,
    }

    export enum TargetType {
        DOTA_UNIT_TARGET_NONE,
        DOTA_UNIT_TARGET_HERO,
        DOTA_UNIT_TARGET_CREEP,
        DOTA_UNIT_TARGET_BUILDING,
        DOTA_UNIT_TARGET_COURIER,
        DOTA_UNIT_TARGET_OTHER,
        DOTA_UNIT_TARGET_TREE,
        DOTA_UNIT_TARGET_CUSTOM,
        DOTA_UNIT_TARGET_BASIC,
        DOTA_UNIT_TARGET_ALL,
    }

    export enum TargetTeam {
        DOTA_UNIT_TARGET_TEAM_NONE,
        DOTA_UNIT_TARGET_TEAM_FRIENDLY,
        DOTA_UNIT_TARGET_TEAM_ENEMY,
        DOTA_UNIT_TARGET_TEAM_CUSTOM,
        DOTA_UNIT_TARGET_TEAM_BOTH,
    }

    export enum AbilityBehavior {
        DOTA_ABILITY_BEHAVIOR_NONE,
        DOTA_ABILITY_BEHAVIOR_HIDDEN,
        DOTA_ABILITY_BEHAVIOR_PASSIVE,
        DOTA_ABILITY_BEHAVIOR_NO_TARGET,
        DOTA_ABILITY_BEHAVIOR_UNIT_TARGET,
        DOTA_ABILITY_BEHAVIOR_POINT,
        DOTA_ABILITY_BEHAVIOR_AOE,
        DOTA_ABILITY_BEHAVIOR_NOT_LEARNABLE,
        DOTA_ABILITY_BEHAVIOR_CHANNELLED,
        DOTA_ABILITY_BEHAVIOR_ITEM,
        DOTA_ABILITY_BEHAVIOR_TOGGLE,
        DOTA_ABILITY_BEHAVIOR_DIRECTIONAL,
        DOTA_ABILITY_BEHAVIOR_IMMEDIATE,
        DOTA_ABILITY_BEHAVIOR_AUTOCAST,
        DOTA_ABILITY_BEHAVIOR_OPTIONAL_UNIT_TARGET,
        DOTA_ABILITY_BEHAVIOR_OPTIONAL_POINT,
        DOTA_ABILITY_BEHAVIOR_OPTIONAL_NO_TARGET,
        DOTA_ABILITY_BEHAVIOR_AURA,
        DOTA_ABILITY_BEHAVIOR_ATTACK,
        DOTA_ABILITY_BEHAVIOR_DONT_RESUME_MOVEMENT,
        DOTA_ABILITY_BEHAVIOR_ROOT_DISABLES,
        DOTA_ABILITY_BEHAVIOR_UNRESTRICTED,
        DOTA_ABILITY_BEHAVIOR_IGNORE_PSEUDO_QUEUE,
        DOTA_ABILITY_BEHAVIOR_IGNORE_CHANNEL,
        DOTA_ABILITY_BEHAVIOR_DONT_CANCEL_MOVEMENT,
        DOTA_ABILITY_BEHAVIOR_DONT_ALERT_TARGET,
        DOTA_ABILITY_BEHAVIOR_DONT_RESUME_ATTACK,
        DOTA_ABILITY_BEHAVIOR_NORMAL_WHEN_STOLEN,
        DOTA_ABILITY_BEHAVIOR_IGNORE_BACKSWING,
        DOTA_ABILITY_BEHAVIOR_RUNE_TARGET,
        DOTA_ABILITY_BEHAVIOR_DONT_CANCEL_CHANNEL,
        DOTA_ABILITY_BEHAVIOR_VECTOR_TARGETING,
        DOTA_ABILITY_BEHAVIOR_LAST_RESORT_POINT,
        DOTA_ABILITY_BEHAVIOR_CAN_SELF_CAST,
        DOTA_ABILITY_BEHAVIOR_SHOW_IN_GUIDES,
    }

    export enum TeamType {
        TEAM_ENEMY = 0,
        TEAM_FRIEND,
        TEAM_BOTH,
    }

    export enum AbilityTypes {
        ABILITY_TYPE_BASIC = 0,
        ABILITY_TYPE_ULTIMATE,
        ABILITY_TYPE_ATTRIBUTES,
        ABILITY_TYPE_HIDDEN,
    }

    export enum GameActivity {
        ACT_DOTA_IDLE = 0,
        ACT_DOTA_IDLE_RARE,
        ACT_DOTA_RUN,
        ACT_DOTA_ATTACK,
        ACT_DOTA_ATTACK2,
        ACT_DOTA_ATTACK_EVENT,
        ACT_DOTA_DIE,
        ACT_DOTA_FLINCH,
        ACT_DOTA_FLAIL,
        ACT_DOTA_DISABLED,
        ACT_DOTA_CAST_ABILITY_1,
        ACT_DOTA_CAST_ABILITY_2,
        ACT_DOTA_CAST_ABILITY_3,
        ACT_DOTA_CAST_ABILITY_4,
        ACT_DOTA_CAST_ABILITY_5,
        ACT_DOTA_CAST_ABILITY_6,
        ACT_DOTA_OVERRIDE_ABILITY_1,
        ACT_DOTA_OVERRIDE_ABILITY_2,
        ACT_DOTA_OVERRIDE_ABILITY_3,
        ACT_DOTA_OVERRIDE_ABILITY_4,
        ACT_DOTA_CHANNEL_ABILITY_1,
        ACT_DOTA_CHANNEL_ABILITY_2,
        ACT_DOTA_CHANNEL_ABILITY_3,
        ACT_DOTA_CHANNEL_ABILITY_4,
        ACT_DOTA_CHANNEL_ABILITY_5,
        ACT_DOTA_CHANNEL_ABILITY_6,
        ACT_DOTA_CHANNEL_END_ABILITY_1,
        ACT_DOTA_CHANNEL_END_ABILITY_2,
        ACT_DOTA_CHANNEL_END_ABILITY_3,
        ACT_DOTA_CHANNEL_END_ABILITY_4,
        ACT_DOTA_CHANNEL_END_ABILITY_5,
        ACT_DOTA_CHANNEL_END_ABILITY_6,
        ACT_DOTA_CONSTANT_LAYER,
        ACT_DOTA_CAPTURE,
        ACT_DOTA_SPAWN,
        ACT_DOTA_KILLTAUNT,
        ACT_DOTA_TAUNT,
        ACT_DOTA_THIRST,
        ACT_DOTA_CAST_DRAGONBREATH,
        ACT_DOTA_ECHO_SLAM,
        ACT_DOTA_CAST_ABILITY_1_END,
        ACT_DOTA_CAST_ABILITY_2_END,
        ACT_DOTA_CAST_ABILITY_3_END,
        ACT_DOTA_CAST_ABILITY_4_END,
        ACT_MIRANA_LEAP_END,
        ACT_WAVEFORM_START,
        ACT_WAVEFORM_END,
        ACT_DOTA_CAST_ABILITY_ROT,
        ACT_DOTA_DIE_SPECIAL,
        ACT_DOTA_RATTLETRAP_BATTERYASSAULT,
        ACT_DOTA_RATTLETRAP_POWERCOGS,
        ACT_DOTA_RATTLETRAP_HOOKSHOT_START,
        ACT_DOTA_RATTLETRAP_HOOKSHOT_LOOP,
        ACT_DOTA_RATTLETRAP_HOOKSHOT_END,
        ACT_STORM_SPIRIT_OVERLOAD_RUN_OVERRIDE,
        ACT_DOTA_TINKER_REARM1,
        ACT_DOTA_TINKER_REARM2,
        ACT_DOTA_TINKER_REARM3,
        ACT_TINY_AVALANCHE,
        ACT_TINY_TOSS,
        ACT_TINY_GROWL,
        ACT_DOTA_WEAVERBUG_ATTACH,
        ACT_DOTA_CAST_WILD_AXES_END,
        ACT_DOTA_CAST_LIFE_BREAK_START,
        ACT_DOTA_CAST_LIFE_BREAK_END,
        ACT_DOTA_NIGHTSTALKER_TRANSITION,
        ACT_DOTA_LIFESTEALER_RAGE,
        ACT_DOTA_LIFESTEALER_OPEN_WOUNDS,
        ACT_DOTA_SAND_KING_BURROW_IN,
        ACT_DOTA_SAND_KING_BURROW_OUT,
        ACT_DOTA_EARTHSHAKER_TOTEM_ATTACK,
        ACT_DOTA_WHEEL_LAYER,
        ACT_DOTA_ALCHEMIST_CHEMICAL_RAGE_START,
        ACT_DOTA_ALCHEMIST_CONCOCTION,
        ACT_DOTA_JAKIRO_LIQUIDFIRE_START,
        ACT_DOTA_JAKIRO_LIQUIDFIRE_LOOP,
        ACT_DOTA_LIFESTEALER_INFEST,
        ACT_DOTA_LIFESTEALER_INFEST_END,
        ACT_DOTA_LASSO_LOOP,
        ACT_DOTA_ALCHEMIST_CONCOCTION_THROW,
        ACT_DOTA_ALCHEMIST_CHEMICAL_RAGE_END,
        ACT_DOTA_CAST_COLD_SNAP,
        ACT_DOTA_CAST_GHOST_WALK,
        ACT_DOTA_CAST_TORNADO,
        ACT_DOTA_CAST_EMP,
        ACT_DOTA_CAST_ALACRITY,
        ACT_DOTA_CAST_CHAOS_METEOR,
        ACT_DOTA_CAST_SUN_STRIKE,
        ACT_DOTA_CAST_FORGE_SPIRIT,
        ACT_DOTA_CAST_ICE_WALL,
        ACT_DOTA_CAST_DEAFENING_BLAST,
        ACT_DOTA_VICTORY,
        ACT_DOTA_DEFEAT,
        ACT_DOTA_SPIRIT_BREAKER_CHARGE_POSE,
        ACT_DOTA_SPIRIT_BREAKER_CHARGE_END,
        ACT_DOTA_TELEPORT,
        ACT_DOTA_TELEPORT_END,
        ACT_DOTA_CAST_REFRACTION,
        ACT_DOTA_CAST_ABILITY_7,
        ACT_DOTA_CANCEL_SIREN_SONG,
        ACT_DOTA_CHANNEL_ABILITY_7,
        ACT_DOTA_LOADOUT,
        ACT_DOTA_FORCESTAFF_END,
        ACT_DOTA_POOF_END,
        ACT_DOTA_SLARK_POUNCE,
        ACT_DOTA_MAGNUS_SKEWER_START,
        ACT_DOTA_MAGNUS_SKEWER_END,
        ACT_DOTA_MEDUSA_STONE_GAZE,
        ACT_DOTA_RELAX_START,
        ACT_DOTA_RELAX_LOOP,
        ACT_DOTA_RELAX_END,
        ACT_DOTA_CENTAUR_STAMPEDE,
        ACT_DOTA_BELLYACHE_START,
        ACT_DOTA_BELLYACHE_LOOP,
        ACT_DOTA_BELLYACHE_END,
        ACT_DOTA_ROQUELAIRE_LAND,
        ACT_DOTA_ROQUELAIRE_LAND_IDLE,
        ACT_DOTA_GREEVIL_CAST,
        ACT_DOTA_GREEVIL_OVERRIDE_ABILITY,
        ACT_DOTA_GREEVIL_HOOK_START,
        ACT_DOTA_GREEVIL_HOOK_END,
        ACT_DOTA_GREEVIL_BLINK_BONE,
        ACT_DOTA_IDLE_SLEEPING,
        ACT_DOTA_INTRO,
        ACT_DOTA_GESTURE_POINT,
        ACT_DOTA_GESTURE_ACCENT,
        ACT_DOTA_SLEEPING_END,
        ACT_DOTA_AMBUSH,
        ACT_DOTA_ITEM_LOOK,
        ACT_DOTA_STARTLE,
        ACT_DOTA_FRUSTRATION,
        ACT_DOTA_TELEPORT_REACT,
        ACT_DOTA_TELEPORT_END_REACT,
        ACT_DOTA_SHRUG,
        ACT_DOTA_RELAX_LOOP_END,
        ACT_DOTA_PRESENT_ITEM,
        ACT_DOTA_IDLE_IMPATIENT,
        ACT_DOTA_SHARPEN_WEAPON,
        ACT_DOTA_SHARPEN_WEAPON_OUT,
        ACT_DOTA_IDLE_SLEEPING_END,
        ACT_DOTA_BRIDGE_DESTROY,
        ACT_DOTA_TAUNT_SNIPER,
        ACT_DOTA_DEATH_BY_SNIPER,
        ACT_DOTA_LOOK_AROUND,
        ACT_DOTA_CAGED_CREEP_RAGE,
        ACT_DOTA_CAGED_CREEP_RAGE_OUT,
        ACT_DOTA_CAGED_CREEP_SMASH,
        ACT_DOTA_CAGED_CREEP_SMASH_OUT,
        ACT_DOTA_IDLE_IMPATIENT_SWORD_TAP,
        ACT_DOTA_INTRO_LOOP,
        ACT_DOTA_BRIDGE_THREAT,
        ACT_DOTA_DAGON,
        ACT_DOTA_CAST_ABILITY_2_ES_ROLL_START,
        ACT_DOTA_CAST_ABILITY_2_ES_ROLL,
        ACT_DOTA_CAST_ABILITY_2_ES_ROLL_END,
        ACT_DOTA_NIAN_PIN_START,
        ACT_DOTA_NIAN_PIN_LOOP,
        ACT_DOTA_NIAN_PIN_END,
        ACT_DOTA_LEAP_STUN,
        ACT_DOTA_LEAP_SWIPE,
        ACT_DOTA_NIAN_INTRO_LEAP,
        ACT_DOTA_AREA_DENY,
        ACT_DOTA_NIAN_PIN_TO_STUN,
        ACT_DOTA_RAZE_1,
        ACT_DOTA_RAZE_2,
        ACT_DOTA_RAZE_3,
        ACT_DOTA_UNDYING_DECAY,
        ACT_DOTA_UNDYING_SOUL_RIP,
        ACT_DOTA_UNDYING_TOMBSTONE,
        ACT_DOTA_WHIRLING_AXES_RANGED,
        ACT_DOTA_SHALLOW_GRAVE,
        ACT_DOTA_COLD_FEET,
        ACT_DOTA_ICE_VORTEX,
        ACT_DOTA_CHILLING_TOUCH,
        ACT_DOTA_ENFEEBLE,
        ACT_DOTA_FATAL_BONDS,
        ACT_DOTA_MIDNIGHT_PULSE,
        ACT_DOTA_ANCESTRAL_SPIRIT,
        ACT_DOTA_THUNDER_STRIKE,
        ACT_DOTA_KINETIC_FIELD,
        ACT_DOTA_STATIC_STORM,
        ACT_DOTA_MINI_TAUNT,
        ACT_DOTA_ARCTIC_BURN_END,
        ACT_DOTA_LOADOUT_RARE,
        ACT_DOTA_SWIM,
        ACT_DOTA_FLEE,
        ACT_DOTA_TROT,
        ACT_DOTA_SHAKE,
        ACT_DOTA_SWIM_IDLE,
        ACT_DOTA_WAIT_IDLE,
        ACT_DOTA_GREET,
        ACT_DOTA_TELEPORT_COOP_START,
        ACT_DOTA_TELEPORT_COOP_WAIT,
        ACT_DOTA_TELEPORT_COOP_END,
        ACT_DOTA_TELEPORT_COOP_EXIT,
        ACT_DOTA_SHOPKEEPER_PET_INTERACT,
        ACT_DOTA_ITEM_PICKUP,
        ACT_DOTA_ITEM_DROP,
        ACT_DOTA_CAPTURE_PET,
        ACT_DOTA_PET_WARD_OBSERVER,
        ACT_DOTA_PET_WARD_SENTRY,
        ACT_DOTA_PET_LEVEL,
        ACT_DOTA_CAST_BURROW_END,
        ACT_DOTA_LIFESTEALER_ASSIMILATE,
        ACT_DOTA_LIFESTEALER_EJECT,
        ACT_DOTA_ATTACK_EVENT_BASH,
        ACT_DOTA_CAPTURE_RARE,
        ACT_DOTA_AW_MAGNETIC_FIELD,
        ACT_DOTA_CAST_GHOST_SHIP,
        ACT_DOTA_FXANIM,
        ACT_DOTA_VICTORY_START,
        ACT_DOTA_DEFEAT_START,
        ACT_DOTA_DP_SPIRIT_SIPHON,
        ACT_DOTA_TRICKS_END,
        ACT_DOTA_ES_STONE_CALLER,
        ACT_DOTA_MK_STRIKE,
        ACT_DOTA_VERSUS,
        ACT_DOTA_CAPTURE_CARD,
        ACT_DOTA_MK_SPRING_SOAR,
        ACT_DOTA_MK_SPRING_END,
        ACT_DOTA_MK_TREE_SOAR,
        ACT_DOTA_MK_TREE_END,
        ACT_DOTA_MK_FUR_ARMY,
        ACT_DOTA_MK_SPRING_CAST,
    }

    export enum ModifierState {
        MODIFIER_STATE_ROOTED = 0,
        MODIFIER_STATE_DISARMED,
        MODIFIER_STATE_ATTACK_IMMUNE,
        MODIFIER_STATE_SILENCED,
        MODIFIER_STATE_MUTED,
        MODIFIER_STATE_STUNNED,
        MODIFIER_STATE_HEXED,
        MODIFIER_STATE_INVISIBLE,
        MODIFIER_STATE_INVULNERABLE,
        MODIFIER_STATE_MAGIC_IMMUNE,
        MODIFIER_STATE_PROVIDES_VISION,
        MODIFIER_STATE_NIGHTMARED,
        MODIFIER_STATE_BLOCK_DISABLED,
        MODIFIER_STATE_EVADE_DISABLED,
        MODIFIER_STATE_UNSELECTABLE,
        MODIFIER_STATE_CANNOT_TARGET_ENEMIES,
        MODIFIER_STATE_CANNOT_MISS,
        MODIFIER_STATE_SPECIALLY_DENIABLE,
        MODIFIER_STATE_FROZEN,
        MODIFIER_STATE_COMMAND_RESTRICTED,
        MODIFIER_STATE_NOT_ON_MINIMAP,
        MODIFIER_STATE_NOT_ON_MINIMAP_FOR_ENEMIES,
        MODIFIER_STATE_LOW_ATTACK_PRIORITY,
        MODIFIER_STATE_NO_HEALTH_BAR,
        MODIFIER_STATE_FLYING,
        MODIFIER_STATE_NO_UNIT_COLLISION,
        MODIFIER_STATE_NO_TEAM_MOVE_TO,
        MODIFIER_STATE_NO_TEAM_SELECT,
        MODIFIER_STATE_PASSIVES_DISABLED,
        MODIFIER_STATE_DOMINATED,
        MODIFIER_STATE_BLIND,
        MODIFIER_STATE_OUT_OF_GAME,
        MODIFIER_STATE_FAKE_ALLY,
        MODIFIER_STATE_FLYING_FOR_PATHING_PURPOSES_ONLY,
        MODIFIER_STATE_TRUESIGHT_IMMUNE,
        MODIFIER_STATE_UNTARGETABLE,
        MODIFIER_STATE_IGNORING_MOVE_AND_ATTACK_ORDERS,
        MODIFIER_STATE_LAST
    }

    export enum ButtonCode {
        BUTTON_CODE_INVALID,
        BUTTON_CODE_NONE,
        KEY_FIRST,
        KEY_NONE,
        KEY_0,
        KEY_1,
        KEY_2,
        KEY_3,
        KEY_4,
        KEY_5,
        KEY_6,
        KEY_7,
        KEY_8,
        KEY_9,
        KEY_A,
        KEY_B,
        KEY_C,
        KEY_D,
        KEY_E,
        KEY_F,
        KEY_G,
        KEY_H,
        KEY_I,
        KEY_J,
        KEY_K,
        KEY_L,
        KEY_M,
        KEY_N,
        KEY_O,
        KEY_P,
        KEY_Q,
        KEY_R,
        KEY_S,
        KEY_T,
        KEY_U,
        KEY_V,
        KEY_W,
        KEY_X,
        KEY_Y,
        KEY_Z,
        KEY_PAD_0,
        KEY_PAD_1,
        KEY_PAD_2,
        KEY_PAD_3,
        KEY_PAD_4,
        KEY_PAD_5,
        KEY_PAD_6,
        KEY_PAD_7,
        KEY_PAD_8,
        KEY_PAD_9,
        KEY_PAD_DIVIDE,
        KEY_PAD_MULTIPLY,
        KEY_PAD_MINUS,
        KEY_PAD_PLUS,
        KEY_PAD_ENTER,
        KEY_PAD_DECIMAL,
        KEY_LBRACKET,
        KEY_RBRACKET,
        KEY_SEMICOLON,
        KEY_APOSTROPHE,
        KEY_BACKQUOTE,
        KEY_COMMA,
        KEY_PERIOD,
        KEY_SLASH,
        KEY_BACKSLASH,
        KEY_MINUS,
        KEY_EQUAL,
        KEY_ENTER,
        KEY_SPACE,
        KEY_BACKSPACE,
        KEY_TAB,
        KEY_CAPSLOCK,
        KEY_NUMLOCK,
        KEY_ESCAPE,
        KEY_SCROLLLOCK,
        KEY_INSERT,
        KEY_DELETE,
        KEY_HOME,
        KEY_END,
        KEY_PAGEUP,
        KEY_PAGEDOWN,
        KEY_BREAK,
        KEY_LSHIFT,
        KEY_RSHIFT,
        KEY_LALT,
        KEY_RALT,
        KEY_LCONTROL,
        KEY_RCONTROL,
        KEY_LWIN,
        KEY_RWIN,
        KEY_APP,
        KEY_UP,
        KEY_LEFT,
        KEY_DOWN,
        KEY_RIGHT,
        KEY_F1,
        KEY_F2,
        KEY_F3,
        KEY_F4,
        KEY_F5,
        KEY_F6,
        KEY_F7,
        KEY_F8,
        KEY_F9,
        KEY_F10,
        KEY_F11,
        KEY_F12,
        KEY_CAPSLOCKTOGGLE,
        KEY_NUMLOCKTOGGLE,
        KEY_SCROLLLOCKTOGGLE,
        MOUSE_FIRST,
        MOUSE_LEFT,
        MOUSE_RIGHT,
        MOUSE_MIDDLE,
        MOUSE_4,
        MOUSE_5,
        KEY_LAST,
        KEY_COUNT,
    }

    export enum FontWeight {
        ULTRALIGHT,
        LIGHT,
        NORMAL,
        MEDIUM,
        BOLD,
        EXTRABOLD,
    }

    export enum FontFlags {
        NONE,
        ITALIC,
        UNDERLINE,
        STRIKEOUT,
        SYMBOL,
        ANTIALIAS,
        GAUSSIANBLUR,
        ROTARY,
        DROPSHADOW,
        ADDITIVE,
        OUTLINE,
    }

    export enum Flow {
        FLOW_OUTGOING,
        FLOW_INCOMING,
        MAX_FLOWS,
    }

    export enum UnitType {
        DOTA_UNIT_NONE,
        DOTA_UNIT_HERO,
        DOTA_UNIT_STRUCTURE,
        DOTA_UNIT_TOWER,
        DOTA_UNIT_ANCIENT,
        DOTA_UNIT_BARRACKS,
        DOTA_UNIT_CREEP,
        DOTA_UNIT_COURIER,
        DOTA_UNIT_LANE_CREEP,
        DOTA_UNIT_ROSHAN,
        DOTA_UNIT_SHOPKEEP,
    }

    export enum AttackCapabilities {
        DOTA_ATTACK_CAPABILITY_RANGED,
    }

    export enum AttackType {
        DOTA_COMBAT_CLASS_ATTACK_HERO,
        DOTA_COMBAT_CLASS_ATTACK_BASIC,
        DOTA_COMBAT_CLASS_ATTACK_PIERCE,
        DOTA_COMBAT_CLASS_ATTACK_SIEGE,
    }

    export enum ArmorType {
        DOTA_COMBAT_CLASS_DEFEND_STRUCTURE,
        DOTA_COMBAT_CLASS_DEFEND_HERO,
        DOTA_COMBAT_CLASS_DEFEND_BASIC,
    }

    export enum ParticleAttachment {
        PATTACH_INVALID,
        PATTACH_ABSORIGIN,
        PATTACH_ABSORIGIN_FOLLOW,
        PATTACH_CUSTOMORIGIN,
        PATTACH_CUSTOMORIGIN_FOLLOW,
        PATTACH_POINT,
        PATTACH_POINT_FOLLOW,
        PATTACH_EYES_FOLLOW,
        PATTACH_OVERHEAD_FOLLOW,
        PATTACH_WORLDORIGIN,
        PATTACH_ROOTBONE_FOLLOW,
        PATTACH_RENDERORIGIN_FOLLOW,
        PATTACH_MAIN_VIEW,
        PATTACH_WATERWAKE,
        PATTACH_CENTER_FOLLOW,
        MAX_PATTACH_TYPES,
    }
}

declare class NetChannel {
    static GetLatency(type: Enum.Flow): number;

    static GetAvgLatency(type: Enum.Flow): number;

    static GetLatencyMs(type: Enum.Flow): number;

    static GetAvgLatencyMs(type: Enum.Flow): number;
}


declare interface MoveCursorResultObject {
    result: Boolean;
}

declare class Humanizer {
    static MoveCursorTo(position: Vector, func: (state: MoveCursorResultObject) => void): void;
}


declare class Config {
    static Read(configName: string, key: string, defaultValue: any): any;

    static ReadInt(configName: string, key: string, defaultValue: number): number;

    static ReadFloat(configName: string, key: string, defaultValue: number): number;

    static ReadString(configName: string, key: string, defaultValue: string): string;

    static Write(configName: string, key: string, value: any): void;

    static WriteInt(configName: string, key: string, value: number): void;

    static WriteFloat(configName: string, key: string, value: number): void;

    static WriteString(configName: string, key: string, value: string): void;
}

declare interface LogValue {
    str: string;
    obj: any;
}

declare interface LogMessage {
    index: number;
    time: number;
    values: LogValue[];
    str: string;
}

declare class Log {
    static Write(message?: any, ...optionalParams: any[]): void;

    static GetLog(lineNun?: number) : LogMessage[];
}

declare var global: {
    [key: string]: any;
};

declare interface MenuOptionChangeObject {
    index: MenuOptionHandler;
    oldValue: any;
    newValue: any;
    multiSelectIndex: number;
}

// Menu
declare class MenuOptionHandler {
    SetKeyBindLocale(locale: string, name: string): this;

    SetHidden(state: boolean): this;

    SetOrdering(value: number): this;

    GetMultiSelectValue(index: number): boolean;

    SetTip(text: string, locale?: string): this;

    SetNameLocale(locale: string, name: string): this;

    SetTipLocale(locale: string, name: string): this;

    SetComboBoxLocale(locale: string, values: string[]): this;

    SetImage(imagePath: string): this;

    RemoveOption(): null;
}

declare interface MenuColorPickerHandlerChangeObject {
    index: MenuOptionHandler;
    oldValue: number[];
    newValue: number[];
}

declare class MenuColorPickerHandler extends MenuOptionHandler {
    //SetValue(value: number[]): void;

    GetValue(): number[];

    OnChange(func: (state: MenuColorPickerHandlerChangeObject) => void): this;
}

declare interface MenuInputBoxHandlerChangeObject {
    index: MenuOptionHandler;
    oldValue: string;
    newValue: string;
}

declare class MenuInputBoxHandler extends MenuOptionHandler {
    SetValue(value: string): this;

    GetValue(): string;

    OnChange(func: (state: MenuInputBoxHandlerChangeObject) => void): this;
}

declare interface MenuToggleHandlerChangeObject {
    index: MenuOptionHandler;
    oldValue: boolean;
    newValue: boolean;
}

declare class MenuToggleHandler extends MenuOptionHandler {
    GetValue(): boolean;

    SetValue(value: boolean): this;

    OnChange(func: (state: MenuToggleHandlerChangeObject) => void): this;
}

declare interface MenuSliderHandlerChangeObject {
    index: MenuOptionHandler;
    oldValue: number;
    newValue: number;
}

declare class MenuSliderHandler extends MenuOptionHandler {
    GetValue(): number;

    OnChange(func: (state: MenuSliderHandlerChangeObject) => void): this;
}

declare interface MenuComboBoxHandlerChangeObject {
    index: MenuOptionHandler;
    oldValue: number;
    newValue: number;
}

declare class MenuComboBoxHandler extends MenuOptionHandler {
    GetValue(): number;

    OnChange(func: (state: MenuComboBoxHandlerChangeObject) => void): this;
}

declare class MenuKeyBindHandler extends MenuOptionHandler {
    GetIndex(): number;

    IsKeyDown(): boolean;

    IsKeyDownOnce(): boolean;
}

declare interface MenuMultiSelectHandlerChangeObject {
    index: MenuMultiSelectHandler;
    oldValue: boolean[];
    newValue: boolean[];
    multiSelectIndex: number;
}

declare class MenuMultiSelectHandler extends MenuOptionHandler {
    GetValue(): boolean[];

    OnChange(func: (state: MenuMultiSelectHandlerChangeObject) => void): this;
}

declare interface MenuPrioritySelectHandlerChangeObject {
    index: MenuPrioritySelectHandler;
    oldValue: number[];
    newValue: number[];
}

declare class MenuPrioritySelectHandler extends MenuOptionHandler {
    GetValue(): number[];

    OnChange(func: (state: MenuPrioritySelectHandlerChangeObject) => void): this;
}

declare class Chat {
    static SendChatWheel(text: string): void;

    static Roll(min: number, max: number, ally: boolean): void;

    static GetChannels(): string[];

    static Say(channel: string, msg: string): void;

    static Print(channel: string, msg: string): void;
}

declare class MenuRect {
    x: number;
    y: number;
    w: number;
    h: number;
}

declare class Menu {
    static SetVisible(value: boolean): void;

    static OpenFolder(path: Array<string>): void;

    static AddPrioritySelect(whereAt: Array<string>, name: string, images: Array<string>): MenuPrioritySelectHandler;

    static SetHidden(handle: MenuOptionHandler, state: boolean): void;

    static AddLabel(whereAt: Array<string>, name: string): MenuOptionHandler;

    static IsVisible(): boolean;

    static GetRects(): MenuRect[];

    static AddInputBox(whereAt: Array<string>, name: string, defaultValue: string): MenuInputBoxHandler;

    static SetOrdering(handle: MenuOptionHandler | Array<string>, value: number): void;

    static AddColorPicker(hwhereAt: Array<string>, name: string, r: number, g: number, b: number, a: number): MenuColorPickerHandler;

    static AddColorPickerBlock(hwhereAt: Array<string>, r: number, g: number, b: number, a: number): MenuColorPickerHandler;

    static AddToggle(whereAt: Array<string>, name: string, defaultValue: boolean): MenuToggleHandler;

    static AddSlider(whereAt: Array<string>, name: string, min: number, max: number, defaultValue: number, step?: number): MenuSliderHandler;

    static AddComboBox(whereAt: Array<string>, name: string, values: string[], defaultValueIndex: number): MenuComboBoxHandler;

    static AddKeyBind(whereAt: Array<string>, name: string, defaultKey: Enum.ButtonCode): MenuKeyBindHandler;

    static GetValue(handle: MenuOptionHandler): boolean | number;

    static SetValue(handle: MenuOptionHandler, value: any): void;

    static IsKeyDown(handle: MenuKeyBindHandler): boolean;

    static IsKeyDownOnce(handle: MenuKeyBindHandler): boolean;

    static SetTip(handle: MenuOptionHandler, text: string): void;

    static SetNameLocale(handle: MenuOptionHandler, locale: string, name: string): void;

    static SetTipLocale(handle: MenuOptionHandler, locale: string, name: string): void;

    static SetComboBoxLocale(handle: MenuOptionHandler, locale: string, values: string[]): void;

    static SetPathLocale(whereAt: Array<string>, locale: string, whereAtNew: string[]): void;

    static SetImage(whereAt: MenuOptionHandler | Array<string>, imagePath: string): void;

    static AddMultiSelect(whereAt: Array<string>, name: string, images: Array<string>, state: Array<boolean> | boolean): MenuMultiSelectHandler;

    static GetMultiSelectValue(handle: MenuOptionHandler, index: number): boolean;

    static RemoveOption(handle: MenuOptionHandler): void;

    static GetLocale(): string;
}

// @ts-ignore
declare class Audio {
    /**
     * @return Play sound for local player
     */
    static PlaySound(path: string, volume: number): void;
}
