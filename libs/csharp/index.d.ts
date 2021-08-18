
interface $Ref<T> { }

type $Task<T> = System.Threading.Tasks.Task$1<T>

declare namespace UnityEngine {
    class Debug extends System.Object {
        public static unityLogger: UnityEngine.ILogger;
        public static developerConsoleVisible: boolean;
        public static isDebugBuild: boolean;
        public static logger: UnityEngine.ILogger;
        public constructor();
        public static DrawLine(start: UnityEngine.Vector3, end: UnityEngine.Vector3, color: UnityEngine.Color, duration: number): void;
        public static DrawLine(start: UnityEngine.Vector3, end: UnityEngine.Vector3, color: UnityEngine.Color): void;
        public static DrawLine(start: UnityEngine.Vector3, end: UnityEngine.Vector3): void;
        public static DrawLine(start: UnityEngine.Vector3, end: UnityEngine.Vector3, color: UnityEngine.Color, duration: number, depthTest: boolean): void;
        public static DrawRay(start: UnityEngine.Vector3, dir: UnityEngine.Vector3, color: UnityEngine.Color, duration: number): void;
        public static DrawRay(start: UnityEngine.Vector3, dir: UnityEngine.Vector3, color: UnityEngine.Color): void;
        public static DrawRay(start: UnityEngine.Vector3, dir: UnityEngine.Vector3): void;
        public static DrawRay(start: UnityEngine.Vector3, dir: UnityEngine.Vector3, color: UnityEngine.Color, duration: number, depthTest: boolean): void;
        public static Break(): void;
        public static DebugBreak(): void;
        public static Log(message: any): void;
        public static Log(message: any, context: UnityEngine.Object): void;
        public static LogFormat(format: string, ...args: any[]): void;
        public static LogFormat(context: UnityEngine.Object, format: string, ...args: any[]): void;
        public static LogFormat(logType: UnityEngine.LogType, logOptions: UnityEngine.LogOption, context: UnityEngine.Object, format: string, ...args: any[]): void;
        public static LogError(message: any): void;
        public static LogError(message: any, context: UnityEngine.Object): void;
        public static LogErrorFormat(format: string, ...args: any[]): void;
        public static LogErrorFormat(context: UnityEngine.Object, format: string, ...args: any[]): void;
        public static ClearDeveloperConsole(): void;
        public static LogException(exception: System.Exception): void;
        public static LogException(exception: System.Exception, context: UnityEngine.Object): void;
        public static LogWarning(message: any): void;
        public static LogWarning(message: any, context: UnityEngine.Object): void;
        public static LogWarningFormat(format: string, ...args: any[]): void;
        public static LogWarningFormat(context: UnityEngine.Object, format: string, ...args: any[]): void;
        public static Assert(condition: boolean): void;
        public static Assert(condition: boolean, context: UnityEngine.Object): void;
        public static Assert(condition: boolean, message: any): void;
        public static Assert(condition: boolean, message: string): void;
        public static Assert(condition: boolean, message: any, context: UnityEngine.Object): void;
        public static Assert(condition: boolean, message: string, context: UnityEngine.Object): void;
        public static AssertFormat(condition: boolean, format: string, ...args: any[]): void;
        public static AssertFormat(condition: boolean, context: UnityEngine.Object, format: string, ...args: any[]): void;
        public static LogAssertion(message: any): void;
        public static LogAssertion(message: any, context: UnityEngine.Object): void;
        public static LogAssertionFormat(format: string, ...args: any[]): void;
        public static LogAssertionFormat(context: UnityEngine.Object, format: string, ...args: any[]): void;

    }
    interface ILogger {

    }
    class Vector2 extends System.ValueType {
        public static kEpsilon: number;
        public static kEpsilonNormalSqrt: number;
        public x: number;
        public y: number;

        public normalized: UnityEngine.Vector2;
        public magnitude: number;
        public sqrMagnitude: number;
        public static zero: UnityEngine.Vector2;
        public static one: UnityEngine.Vector2;
        public static forward: UnityEngine.Vector2;
        public static back: UnityEngine.Vector2;
        public static up: UnityEngine.Vector2;
        public static down: UnityEngine.Vector2;
        public static left: UnityEngine.Vector2;
        public static right: UnityEngine.Vector2;
        public static positiveInfinity: UnityEngine.Vector2;
        public static negativeInfinity: UnityEngine.Vector2;
        public static fwd: UnityEngine.Vector2;
        public constructor(x: number, y: number);

        public static Angle(from: UnityEngine.Vector2, to: UnityEngine.Vector2): number;
        public static ClampMagnitude(vector: Vector2, maxLength: number): UnityEngine.Vector2;
        public static Distance(a: Vector2, b: Vector2): number;
        public static Dot(lhs: Vector2, rhs: Vector2): number;
        public static Lerp(a: Vector2, b: Vector2, t: number): UnityEngine.Vector2;
        public static LerpUnclamped(a: Vector2, b: Vector2, t: number): UnityEngine.Vector2;
        public static Max(lhs: Vector2, rhs: Vector2): UnityEngine.Vector2;
        public static Min(lhs: Vector2, rhs: Vector2): UnityEngine.Vector2;
        public static MoveTowards(current: Vector2, target: Vector2, maxDistanceDelta: number): UnityEngine.Vector2;
        public static Perpendicular(inDirection: Vector2): UnityEngine.Vector2;
        public static Reflect(inDirection: Vector2, inNormal: Vector2): UnityEngine.Vector2;
        public static Scale(a: Vector2, b: Vector2): UnityEngine.Vector2;
        public static SignedAngle(from: Vector2, to: Vector2): number;
        public static SmoothDamp(current: Vector2, target: Vector2, currentVelocity: Vector2, smoothTime: number, maxSpeed: number): UnityEngine.Vector2;
        public static SmoothDamp(current: Vector2, target: Vector2, currentVelocity: Vector2, smoothTime: number): UnityEngine.Vector2;
        public static SmoothDamp(current: Vector2, target: Vector2, currentVelocity: Vector2, smoothTime: number, maxSpeed: number, deltaTime: number): UnityEngine.Vector2;
        public static SqrMagnitude(a: Vector2): number;
        public Equals(other: Vector2): boolean;
        public Equals(other: any): boolean;
        public GetHashCode(): number;
        public Normalize(): void;
        public Scale(scale: Vector2): void;
        public Set(newX: number, newY: number): void;
        public SqrMagnitude(): number;
        public ToString(format: string): string;
        public ToString(): string;
    }
    class Vector3 extends System.ValueType {
        public static kEpsilon: number;
        public static kEpsilonNormalSqrt: number;
        public x: number;
        public y: number;
        public z: number;
        public Item: number;
        public normalized: UnityEngine.Vector3;
        public magnitude: number;
        public sqrMagnitude: number;
        public static zero: UnityEngine.Vector3;
        public static one: UnityEngine.Vector3;
        public static forward: UnityEngine.Vector3;
        public static back: UnityEngine.Vector3;
        public static up: UnityEngine.Vector3;
        public static down: UnityEngine.Vector3;
        public static left: UnityEngine.Vector3;
        public static right: UnityEngine.Vector3;
        public static positiveInfinity: UnityEngine.Vector3;
        public static negativeInfinity: UnityEngine.Vector3;
        public static fwd: UnityEngine.Vector3;
        public constructor(x: number, y: number, z: number);
        public constructor(x: number, y: number);
        public static Slerp(a: UnityEngine.Vector3, b: UnityEngine.Vector3, t: number): UnityEngine.Vector3;
        public static SlerpUnclamped(a: UnityEngine.Vector3, b: UnityEngine.Vector3, t: number): UnityEngine.Vector3;
        public static OrthoNormalize(normal: $Ref<UnityEngine.Vector3>, tangent: $Ref<UnityEngine.Vector3>): void;
        public static OrthoNormalize(normal: $Ref<UnityEngine.Vector3>, tangent: $Ref<UnityEngine.Vector3>, binormal: $Ref<UnityEngine.Vector3>): void;
        public static RotateTowards(current: UnityEngine.Vector3, target: UnityEngine.Vector3, maxRadiansDelta: number, maxMagnitudeDelta: number): UnityEngine.Vector3;
        public static Lerp(a: UnityEngine.Vector3, b: UnityEngine.Vector3, t: number): UnityEngine.Vector3;
        public static LerpUnclamped(a: UnityEngine.Vector3, b: UnityEngine.Vector3, t: number): UnityEngine.Vector3;
        public static MoveTowards(current: UnityEngine.Vector3, target: UnityEngine.Vector3, maxDistanceDelta: number): UnityEngine.Vector3;
        public static SmoothDamp(current: UnityEngine.Vector3, target: UnityEngine.Vector3, currentVelocity: $Ref<UnityEngine.Vector3>, smoothTime: number, maxSpeed: number): UnityEngine.Vector3;
        public static SmoothDamp(current: UnityEngine.Vector3, target: UnityEngine.Vector3, currentVelocity: $Ref<UnityEngine.Vector3>, smoothTime: number): UnityEngine.Vector3;
        public static SmoothDamp(current: UnityEngine.Vector3, target: UnityEngine.Vector3, currentVelocity: $Ref<UnityEngine.Vector3>, smoothTime: number, maxSpeed: number, deltaTime: number): UnityEngine.Vector3;
        public get_Item(index: number): number;
        public set_Item(index: number, value: number): void;
        public Set(newX: number, newY: number, newZ: number): void;
        public static Scale(a: UnityEngine.Vector3, b: UnityEngine.Vector3): UnityEngine.Vector3;
        public Scale(scale: UnityEngine.Vector3): void;
        public static Cross(lhs: UnityEngine.Vector3, rhs: UnityEngine.Vector3): UnityEngine.Vector3;
        public GetHashCode(): number;
        public Equals(other: any): boolean;
        public Equals(other: UnityEngine.Vector3): boolean;
        public static Reflect(inDirection: UnityEngine.Vector3, inNormal: UnityEngine.Vector3): UnityEngine.Vector3;
        public static Normalize(value: UnityEngine.Vector3): UnityEngine.Vector3;
        public Normalize(): void;
        public static Dot(lhs: UnityEngine.Vector3, rhs: UnityEngine.Vector3): number;
        public static Project(vector: UnityEngine.Vector3, onNormal: UnityEngine.Vector3): UnityEngine.Vector3;
        public static ProjectOnPlane(vector: UnityEngine.Vector3, planeNormal: UnityEngine.Vector3): UnityEngine.Vector3;
        public static Angle(from: UnityEngine.Vector3, to: UnityEngine.Vector3): number;
        public static SignedAngle(from: UnityEngine.Vector3, to: UnityEngine.Vector3, axis: UnityEngine.Vector3): number;
        public static Distance(a: UnityEngine.Vector3, b: UnityEngine.Vector3): number;
        public static ClampMagnitude(vector: UnityEngine.Vector3, maxLength: number): UnityEngine.Vector3;
        public static Magnitude(vector: UnityEngine.Vector3): number;
        public static SqrMagnitude(vector: UnityEngine.Vector3): number;
        public static Min(lhs: UnityEngine.Vector3, rhs: UnityEngine.Vector3): UnityEngine.Vector3;
        public static Max(lhs: UnityEngine.Vector3, rhs: UnityEngine.Vector3): UnityEngine.Vector3;
        public static op_Addition(a: UnityEngine.Vector3, b: UnityEngine.Vector3): UnityEngine.Vector3;
        public static op_Subtraction(a: UnityEngine.Vector3, b: UnityEngine.Vector3): UnityEngine.Vector3;
        public static op_UnaryNegation(a: UnityEngine.Vector3): UnityEngine.Vector3;
        public static op_Multiply(a: UnityEngine.Vector3, d: number): UnityEngine.Vector3;
        public static op_Multiply(d: number, a: UnityEngine.Vector3): UnityEngine.Vector3;
        public static op_Division(a: UnityEngine.Vector3, d: number): UnityEngine.Vector3;
        public static op_Equality(lhs: UnityEngine.Vector3, rhs: UnityEngine.Vector3): boolean;
        public static op_Inequality(lhs: UnityEngine.Vector3, rhs: UnityEngine.Vector3): boolean;
        public ToString(): string;
        public ToString(format: string): string;
        public static AngleBetween(from: UnityEngine.Vector3, to: UnityEngine.Vector3): number;
        public static Exclude(excludeThis: UnityEngine.Vector3, fromThat: UnityEngine.Vector3): UnityEngine.Vector3;

    }
    class Vector4 extends System.ValueType {
        public static kEpsilon: number;
        public x: number;
        public y: number;
        public z: number;
        public w: number;
        public normalized: UnityEngine.Vector4;
        public magnitude: number;
        public sqrMagnitude: number;
        public static zero: UnityEngine.Vector4;
        public static one: UnityEngine.Vector4;
        public static positiveInfinity: UnityEngine.Vector4;
        public static negativeInfinity: UnityEngine.Vector4;
        public constructor(x: number, y: number, z: number, w: number);
        public constructor(x: number, y: number, z: number);
        public constructor(x: number, y: number);

        public static Distance(a: Vector4, b: Vector4): number;
        public static Dot(a: Vector4, b: Vector4): number;
        public static Lerp(a: Vector4, b: Vector4, t: number): Vector4;
        public static LerpUnclamped(a: Vector4, b: Vector4, t: number): Vector4;
        public static Magnitude(a: Vector4): number;
        public static Max(lhs: Vector4, rhs: Vector4): Vector4;
        public static Min(lhs: Vector4, rhs: Vector4): Vector4;
        public static MoveTowards(current: Vector4, target: Vector4, maxDistanceDelta: number): Vector4;
        public static Normalize(a: Vector4): Vector4;
        public static Project(a: Vector4, b: Vector4): Vector4;
        public static Scale(a: Vector4, b: Vector4): Vector4;
        public static SqrMagnitude(a: Vector4): number;
        public Equals(other: Vector4): boolean;
        public Equals(other: any): boolean;
        public GetHashCode(): number;
        public Normalize(): void;
        public Scale(scale: Vector4): void;
        public Set(newX: number, newY: number, newZ: number, newW: number): void;
        public SqrMagnitude(): number;
        public ToString(): string;
        public ToString(format: string): string;

    }
    class Color {

    }
    class Object extends System.Object {
        public name: string;
        public hideFlags: UnityEngine.HideFlags;
        public constructor();
        public GetInstanceID(): number;
        public GetHashCode(): number;
        public Equals(other: any): boolean;
        public static op_Implicit(exists: UnityEngine.Object): boolean;
        public static Instantiate(original: UnityEngine.Object, position: UnityEngine.Vector3, rotation: UnityEngine.Quaternion): UnityEngine.Object;
        public static Instantiate(original: UnityEngine.Object, position: UnityEngine.Vector3, rotation: UnityEngine.Quaternion, parent: UnityEngine.Transform): UnityEngine.Object;
        public static Instantiate(original: UnityEngine.Object): UnityEngine.Object;
        public static Instantiate(original: UnityEngine.Object, parent: UnityEngine.Transform): UnityEngine.Object;
        public static Instantiate(original: UnityEngine.Object, parent: UnityEngine.Transform, instantiateInWorldSpace: boolean): UnityEngine.Object;
        public static Destroy(obj: UnityEngine.Object, t: number): void;
        public static Destroy(obj: UnityEngine.Object): void;
        public static DestroyImmediate(obj: UnityEngine.Object, allowDestroyingAssets: boolean): void;
        public static DestroyImmediate(obj: UnityEngine.Object): void;
        public static FindObjectsOfType(type: System.Type): UnityEngine.Object[];
        public static DontDestroyOnLoad(target: UnityEngine.Object): void;
        public static DestroyObject(obj: UnityEngine.Object, t: number): void;
        public static DestroyObject(obj: UnityEngine.Object): void;
        public static FindSceneObjectsOfType(type: System.Type): UnityEngine.Object[];
        public static FindObjectsOfTypeIncludingAssets(type: System.Type): UnityEngine.Object[];
        public static FindObjectsOfTypeAll(type: System.Type): UnityEngine.Object[];
        public static FindObjectOfType(type: System.Type): UnityEngine.Object;
        public ToString(): string;
        public static op_Equality(x: UnityEngine.Object, y: UnityEngine.Object): boolean;
        public static op_Inequality(x: UnityEngine.Object, y: UnityEngine.Object): boolean;

    }

    class Material extends Object {
    }
    enum LogType { Error = 0, Assert = 1, Warning = 2, Log = 3, Exception = 4 }
    enum LogOption { None = 0, NoStacktrace = 1 }
    class Time extends System.Object {
        public static time: number;
        public static timeSinceLevelLoad: number;
        public static deltaTime: number;
        public static fixedTime: number;
        public static unscaledTime: number;
        public static fixedUnscaledTime: number;
        public static unscaledDeltaTime: number;
        public static fixedUnscaledDeltaTime: number;
        public static fixedDeltaTime: number;
        public static maximumDeltaTime: number;
        public static smoothDeltaTime: number;
        public static maximumParticleDeltaTime: number;
        public static timeScale: number;
        public static frameCount: number;
        public static renderedFrameCount: number;
        public static realtimeSinceStartup: number;
        public static captureDeltaTime: number;
        public static captureFramerate: number;
        public static inFixedTimeStep: boolean;
        public constructor();

    }
    class Transform extends UnityEngine.Component {
        public position: UnityEngine.Vector3;
        public localPosition: UnityEngine.Vector3;
        public eulerAngles: UnityEngine.Vector3;
        public localEulerAngles: UnityEngine.Vector3;
        public right: UnityEngine.Vector3;
        public up: UnityEngine.Vector3;
        public forward: UnityEngine.Vector3;
        public rotation: UnityEngine.Quaternion;
        public localRotation: UnityEngine.Quaternion;
        public localScale: UnityEngine.Vector3;
        public parent: UnityEngine.Transform;
        public worldToLocalMatrix: UnityEngine.Matrix4x4;
        public localToWorldMatrix: UnityEngine.Matrix4x4;
        public root: UnityEngine.Transform;
        public childCount: number;
        public lossyScale: UnityEngine.Vector3;
        public hasChanged: boolean;
        public hierarchyCapacity: number;
        public hierarchyCount: number;
        public SetParent(p: UnityEngine.Transform): void;
        public SetParent(parent: UnityEngine.Transform, worldPositionStays: boolean): void;
        public SetPositionAndRotation(position: UnityEngine.Vector3, rotation: UnityEngine.Quaternion): void;
        public Translate(translation: UnityEngine.Vector3, relativeTo: UnityEngine.Space): void;
        public Translate(translation: UnityEngine.Vector3): void;
        public Translate(x: number, y: number, z: number, relativeTo: UnityEngine.Space): void;
        public Translate(x: number, y: number, z: number): void;
        public Translate(translation: UnityEngine.Vector3, relativeTo: UnityEngine.Transform): void;
        public Translate(x: number, y: number, z: number, relativeTo: UnityEngine.Transform): void;
        public Rotate(eulers: UnityEngine.Vector3, relativeTo: UnityEngine.Space): void;
        public Rotate(eulers: UnityEngine.Vector3): void;
        public Rotate(xAngle: number, yAngle: number, zAngle: number, relativeTo: UnityEngine.Space): void;
        public Rotate(xAngle: number, yAngle: number, zAngle: number): void;
        public Rotate(axis: UnityEngine.Vector3, angle: number, relativeTo: UnityEngine.Space): void;
        public Rotate(axis: UnityEngine.Vector3, angle: number): void;
        public RotateAround(point: UnityEngine.Vector3, axis: UnityEngine.Vector3, angle: number): void;
        public LookAt(target: UnityEngine.Transform, worldUp: UnityEngine.Vector3): void;
        public LookAt(target: UnityEngine.Transform): void;
        public LookAt(worldPosition: UnityEngine.Vector3, worldUp: UnityEngine.Vector3): void;
        public LookAt(worldPosition: UnityEngine.Vector3): void;
        public TransformDirection(direction: UnityEngine.Vector3): UnityEngine.Vector3;
        public TransformDirection(x: number, y: number, z: number): UnityEngine.Vector3;
        public InverseTransformDirection(direction: UnityEngine.Vector3): UnityEngine.Vector3;
        public InverseTransformDirection(x: number, y: number, z: number): UnityEngine.Vector3;
        public TransformVector(vector: UnityEngine.Vector3): UnityEngine.Vector3;
        public TransformVector(x: number, y: number, z: number): UnityEngine.Vector3;
        public InverseTransformVector(vector: UnityEngine.Vector3): UnityEngine.Vector3;
        public InverseTransformVector(x: number, y: number, z: number): UnityEngine.Vector3;
        public TransformPoint(position: UnityEngine.Vector3): UnityEngine.Vector3;
        public TransformPoint(x: number, y: number, z: number): UnityEngine.Vector3;
        public InverseTransformPoint(position: UnityEngine.Vector3): UnityEngine.Vector3;
        public InverseTransformPoint(x: number, y: number, z: number): UnityEngine.Vector3;
        public DetachChildren(): void;
        public SetAsFirstSibling(): void;
        public SetAsLastSibling(): void;
        public SetSiblingIndex(index: number): void;
        public GetSiblingIndex(): number;
        public Find(n: string): UnityEngine.Transform;
        public IsChildOf(parent: UnityEngine.Transform): boolean;
        public FindChild(n: string): UnityEngine.Transform;
        public GetEnumerator(): System.Collections.IEnumerator;
        public RotateAround(axis: UnityEngine.Vector3, angle: number): void;
        public RotateAroundLocal(axis: UnityEngine.Vector3, angle: number): void;
        public GetChild(index: number): UnityEngine.Transform;
        public GetChildCount(): number;

    }
    class Quaternion {

    }
    class Matrix4x4 {

    }
    enum Space { World = 0, Self = 1 }
    class Component extends UnityEngine.Object {
        public transform: UnityEngine.Transform;
        public gameObject: UnityEngine.GameObject;
        public tag: string;
        public constructor();
        public GetComponent(type: System.Type): UnityEngine.Component;
        public TryGetComponent(type: System.Type, component: $Ref<UnityEngine.Component>): boolean;
        public GetComponent(type: string): UnityEngine.Component;
        public GetComponentInChildren(t: System.Type, includeInactive: boolean): UnityEngine.Component;
        public GetComponentInChildren(t: System.Type): UnityEngine.Component;
        public GetComponentsInChildren(t: System.Type, includeInactive: boolean): UnityEngine.Component[];
        public GetComponentsInChildren(t: System.Type): UnityEngine.Component[];
        public GetComponentInParent(t: System.Type): UnityEngine.Component;
        public GetComponentsInParent(t: System.Type, includeInactive: boolean): UnityEngine.Component[];
        public GetComponentsInParent(t: System.Type): UnityEngine.Component[];
        public GetComponents(type: System.Type): UnityEngine.Component[];
        public GetComponents(type: System.Type, results: System.Collections.Generic.List$1<UnityEngine.Component>): void;
        public CompareTag(tag: string): boolean;
        public SendMessageUpwards(methodName: string, value: any, options: UnityEngine.SendMessageOptions): void;
        public SendMessageUpwards(methodName: string, value: any): void;
        public SendMessageUpwards(methodName: string): void;
        public SendMessageUpwards(methodName: string, options: UnityEngine.SendMessageOptions): void;
        public SendMessage(methodName: string, value: any): void;
        public SendMessage(methodName: string): void;
        public SendMessage(methodName: string, value: any, options: UnityEngine.SendMessageOptions): void;
        public SendMessage(methodName: string, options: UnityEngine.SendMessageOptions): void;
        public BroadcastMessage(methodName: string, parameter: any, options: UnityEngine.SendMessageOptions): void;
        public BroadcastMessage(methodName: string, parameter: any): void;
        public BroadcastMessage(methodName: string): void;
        public BroadcastMessage(methodName: string, options: UnityEngine.SendMessageOptions): void;

    }
    class GameObject extends UnityEngine.Object {
        public transform: UnityEngine.Transform;
        public layer: number;
        public active: boolean;
        public activeSelf: boolean;
        public activeInHierarchy: boolean;
        public isStatic: boolean;
        public tag: string;
        public scene: UnityEngine.SceneManagement.Scene;
        public gameObject: UnityEngine.GameObject;
        public constructor(name: string);
        public constructor();
        public constructor(name: string, ...components: System.Type[]);
        public static CreatePrimitive(type: UnityEngine.PrimitiveType): UnityEngine.GameObject;
        public GetComponent(type: System.Type): UnityEngine.Component;
        public GetComponent(type: string): UnityEngine.Component;
        public GetComponentInChildren(type: System.Type, includeInactive: boolean): UnityEngine.Component;
        public GetComponentInChildren(type: System.Type): UnityEngine.Component;
        public GetComponentInParent(type: System.Type): UnityEngine.Component;
        public GetComponents(type: System.Type): UnityEngine.Component[];
        public GetComponents(type: System.Type, results: System.Collections.Generic.List$1<UnityEngine.Component>): void;
        public GetComponentsInChildren(type: System.Type): UnityEngine.Component[];
        public GetComponentsInChildren(type: System.Type, includeInactive: boolean): UnityEngine.Component[];
        public GetComponentsInParent(type: System.Type): UnityEngine.Component[];
        public GetComponentsInParent(type: System.Type, includeInactive: boolean): UnityEngine.Component[];
        public TryGetComponent(type: System.Type, component: $Ref<UnityEngine.Component>): boolean;
        public static FindWithTag(tag: string): UnityEngine.GameObject;
        public SendMessageUpwards(methodName: string, options: UnityEngine.SendMessageOptions): void;
        public SendMessage(methodName: string, options: UnityEngine.SendMessageOptions): void;
        public BroadcastMessage(methodName: string, options: UnityEngine.SendMessageOptions): void;
        public AddComponent(componentType: System.Type): UnityEngine.Component;
        public SetActive(value: boolean): void;
        public SetActiveRecursively(state: boolean): void;
        public CompareTag(tag: string): boolean;
        public static FindGameObjectWithTag(tag: string): UnityEngine.GameObject;
        public static FindGameObjectsWithTag(tag: string): UnityEngine.GameObject[];
        public SendMessageUpwards(methodName: string, value: any, options: UnityEngine.SendMessageOptions): void;
        public SendMessageUpwards(methodName: string, value: any): void;
        public SendMessageUpwards(methodName: string): void;
        public SendMessage(methodName: string, value: any, options: UnityEngine.SendMessageOptions): void;
        public SendMessage(methodName: string, value: any): void;
        public SendMessage(methodName: string): void;
        public BroadcastMessage(methodName: string, parameter: any, options: UnityEngine.SendMessageOptions): void;
        public BroadcastMessage(methodName: string, parameter: any): void;
        public BroadcastMessage(methodName: string): void;
        public static Find(name: string): UnityEngine.GameObject;

    }
    enum SendMessageOptions { RequireReceiver = 0, DontRequireReceiver = 1 }
    enum PrimitiveType { Sphere = 0, Capsule = 1, Cylinder = 2, Cube = 3, Plane = 4, Quad = 5 }
    enum HideFlags { None = 0, HideInHierarchy = 1, HideInInspector = 2, DontSaveInEditor = 4, NotEditable = 8, DontSaveInBuild = 16, DontUnloadUnusedAsset = 32, DontSave = 52, HideAndDontSave = 61 }

    class YieldInstruction {

    }
    class Coroutine extends YieldInstruction {

    }
    class Behaviour extends Component {
        public enabled: boolean;
        public isActiveAndEnabled: boolean;
    }
    class MonoBehaviour extends Behaviour {
        public useGUILayout: boolean;
        public runInEditMode: boolean;

        public static print(message: any): void;
        public CancelInvoke(methodName: string): void;
        public CancelInvoke(): void;
        public Invoke(methodName: string, time: number): void;
        public InvokeRepeating(methodName: string, time: number, repeatRate: number): void;
        public IsInvoking(methodName: string): boolean;
        public IsInvoking(): boolean;
        public StartCoroutine(methodName: string): Coroutine;
        public StartCoroutine(routine: System.Collections.IEnumerator): Coroutine;
        public StartCoroutine(methodName: string, value: any): Coroutine;
        public StartCoroutine_Auto(routine: System.Collections.IEnumerator): Coroutine;
        public StopAllCoroutines(): void;
        public StopCoroutine(routine: System.Collections.IEnumerator): void;
        public StopCoroutine(routine: Coroutine): void;
        public StopCoroutine(methodName: string): void;
    }
    class AnimationCurve implements System.IEquatable<AnimationCurve>{
        Equals(other: Rect): boolean;
        ToString(format: string): string;
    }
    class Gradient implements System.IEquatable<Gradient>{
        Equals(other: Rect): boolean;
        ToString(format: string): string;
    }
    class AudioClip extends Object {

    }
    class MeshFilter extends Component {

    }
    class MeshRenderer extends Renderer {

    }
    class Mesh extends Object {

    }
    class Texture extends Object {

    }
    class Texture2D extends Texture {

    }
    class RenderTexture extends Texture {

    }
    class MaterialPropertyBlock {

    }
    class Sprite extends Object {

    }
    class Shader extends Object {

    }
    class Camera extends Behaviour {

    }
    class Font extends Object {

    }
    enum RenderMode {
        ScreenSpaceOverlay = 0,
        ScreenSpaceCamera = 1,
        WorldSpace = 2
    }

    class Rect implements System.IEquatable<Rect>, System.IFormattable {
        Equals(other: Rect): boolean;
        ToString(format: string): string;
    }

    class Renderer extends Component {

    }
    class Collider extends Component {

    }
    class MeshCollider extends Collider {

    }
    class Rigidbody extends Component {

    }
    class ArticulationBody extends Behaviour {

    }
    class RaycastHit {
        public readonly collider: Collider
        public point: Vector3
        public normal: Vector3
        public barycentricCoordinate: Vector3
        public distance: number
        public readonly triangleIndex: number
        public readonly textureCoord: Vector2
        public readonly textureCoord2: Vector2
        public readonly textureCoord1: Vector2
        public readonly transform: Transform
        public readonly rigidbody: Rigidbody
        public readonly articulationBody: ArticulationBody
        public readonly lightmapCoord: Vector2
    }

    class Color32 implements System.IFormattable {
        public r: System.byte;
        public g: System.byte;
        public b: System.byte;
        public a: System.byte;
        constructor(r: System.byte, g: System.byte, b: System.byte, a: System.byte);
        public ToString(): string;
        public ToString(format: string): string;
    }

    class AssetBundle extends Object {

    }
    class PropertyAttribute extends System.Attribute {

    }
    enum KeyCode {
        None,
        Backspace,
        Tab,
        Clear,
        Return,
        Pause,
        Escape,
        Space,
        Exclaim,
        DoubleQuote,
        Hash,
        Dollar,
        Percent,
        Ampersand,
        Quote,
        LeftParen,
        RightParen,
        Asterisk,
        Plus,
        Comma,
        Minus,
        Period,
        Slash,
        Alpha0,
        Alpha1,
        Alpha2,
        Alpha3,
        Alpha4,
        Alpha5,
        Alpha6,
        Alpha7,
        Alpha8,
        Alpha9,
        Colon,
        Semicolon,
        Less,
        Equals,
        Greater,
        Question,
        At,
        LeftBracket,
        Backslash,
        RightBracket,
        Caret,
        Underscore,
        BackQuote,
        A,
        B,
        C,
        D,
        E,
        F,
        G,
        H,
        I,
        J,
        K,
        L,
        M,
        N,
        O,
        P,
        Q,
        R,
        S,
        T,
        U,
        V,
        W,
        X,
        Y,
        Z,
        LeftCurlyBracket,
        Pipe,
        RightCurlyBracket,
        Tilde,
        Delete,
        Keypad0,
        Keypad1,
        Keypad2,
        Keypad3,
        Keypad4,
        Keypad5,
        Keypad6,
        Keypad7,
        Keypad8,
        Keypad9,
        KeypadPeriod,
        KeypadDivide,
        KeypadMultiply,
        KeypadMinus,
        KeypadPlus,
        KeypadEnter,
        KeypadEquals,
        UpArrow,
        DownArrow,
        RightArrow,
        LeftArrow,
        Insert,
        Home,
        End,
        PageUp,
        PageDown,
        F1,
        F2,
        F3,
        F4,
        F5,
        F6,
        F7,
        F8,
        F9,
        F10,
        F11,
        F12,
        F13,
        F14,
        F15,
        Numlock,
        CapsLock,
        ScrollLock,
        RightShift,
        LeftShift,
        RightControl,
        LeftControl,
        RightAlt,
        LeftAlt,
        RightCommand,
        RightApple,
        LeftCommand,
        LeftApple,
        LeftWindows,
        RightWindows,
        AltGr,
        Help,
        Print,
        SysReq,
        Break,
        Menu,
        Mouse0,
        Mouse1,
        Mouse2,
        Mouse3,
        Mouse4,
        Mouse5,
        Mouse6,
        JoystickButton0,
        JoystickButton1,
        JoystickButton2,
        JoystickButton3,
        JoystickButton4,
        JoystickButton5,
        JoystickButton6,
        JoystickButton7,
        JoystickButton8,
        JoystickButton9,
        JoystickButton10,
        JoystickButton11,
        JoystickButton12,
        JoystickButton13,
        JoystickButton14,
        JoystickButton15,
        JoystickButton16,
        JoystickButton17,
        JoystickButton18,
        JoystickButton19,
        Joystick1Button0,
        Joystick1Button1,
        Joystick1Button2,
        Joystick1Button3,
        Joystick1Button4,
        Joystick1Button5,
        Joystick1Button6,
        Joystick1Button7,
        Joystick1Button8,
        Joystick1Button9,
        Joystick1Button10,
        Joystick1Button11,
        Joystick1Button12,
        Joystick1Button13,
        Joystick1Button14,
        Joystick1Button15,
        Joystick1Button16,
        Joystick1Button17,
        Joystick1Button18,
        Joystick1Button19,
        Joystick2Button0,
        Joystick2Button1,
        Joystick2Button2,
        Joystick2Button3,
        Joystick2Button4,
        Joystick2Button5,
        Joystick2Button6,
        Joystick2Button7,
        Joystick2Button8,
        Joystick2Button9,
        Joystick2Button10,
        Joystick2Button11,
        Joystick2Button12,
        Joystick2Button13,
        Joystick2Button14,
        Joystick2Button15,
        Joystick2Button16,
        Joystick2Button17,
        Joystick2Button18,
        Joystick2Button19,
        Joystick3Button0,
        Joystick3Button1,
        Joystick3Button2,
        Joystick3Button3,
        Joystick3Button4,
        Joystick3Button5,
        Joystick3Button6,
        Joystick3Button7,
        Joystick3Button8,
        Joystick3Button9,
        Joystick3Button10,
        Joystick3Button11,
        Joystick3Button12,
        Joystick3Button13,
        Joystick3Button14,
        Joystick3Button15,
        Joystick3Button16,
        Joystick3Button17,
        Joystick3Button18,
        Joystick3Button19,
        Joystick4Button0,
        Joystick4Button1,
        Joystick4Button2,
        Joystick4Button3,
        Joystick4Button4,
        Joystick4Button5,
        Joystick4Button6,
        Joystick4Button7,
        Joystick4Button8,
        Joystick4Button9,
        Joystick4Button10,
        Joystick4Button11,
        Joystick4Button12,
        Joystick4Button13,
        Joystick4Button14,
        Joystick4Button15,
        Joystick4Button16,
        Joystick4Button17,
        Joystick4Button18,
        Joystick4Button19,
        Joystick5Button0,
        Joystick5Button1,
        Joystick5Button2,
        Joystick5Button3,
        Joystick5Button4,
        Joystick5Button5,
        Joystick5Button6,
        Joystick5Button7,
        Joystick5Button8,
        Joystick5Button9,
        Joystick5Button10,
        Joystick5Button11,
        Joystick5Button12,
        Joystick5Button13,
        Joystick5Button14,
        Joystick5Button15,
        Joystick5Button16,
        Joystick5Button17,
        Joystick5Button18,
        Joystick5Button19,
        Joystick6Button0,
        Joystick6Button1,
        Joystick6Button2,
        Joystick6Button3,
        Joystick6Button4,
        Joystick6Button5,
        Joystick6Button6,
        Joystick6Button7,
        Joystick6Button8,
        Joystick6Button9,
        Joystick6Button10,
        Joystick6Button11,
        Joystick6Button12,
        Joystick6Button13,
        Joystick6Button14,
        Joystick6Button15,
        Joystick6Button16,
        Joystick6Button17,
        Joystick6Button18,
        Joystick6Button19,
        Joystick7Button0,
        Joystick7Button1,
        Joystick7Button2,
        Joystick7Button3,
        Joystick7Button4,
        Joystick7Button5,
        Joystick7Button6,
        Joystick7Button7,
        Joystick7Button8,
        Joystick7Button9,
        Joystick7Button10,
        Joystick7Button11,
        Joystick7Button12,
        Joystick7Button13,
        Joystick7Button14,
        Joystick7Button15,
        Joystick7Button16,
        Joystick7Button17,
        Joystick7Button18,
        Joystick7Button19,
        Joystick8Button0,
        Joystick8Button1,
        Joystick8Button2,
        Joystick8Button3,
        Joystick8Button4,
        Joystick8Button5,
        Joystick8Button6,
        Joystick8Button7,
        Joystick8Button8,
        Joystick8Button9,
        Joystick8Button10,
        Joystick8Button11,
        Joystick8Button12,
        Joystick8Button13,
        Joystick8Button14,
        Joystick8Button15,
        Joystick8Button16,
        Joystick8Button17,
        Joystick8Button18,
        Joystick8Button19,
    }
    class ScriptableObject extends Object {

    }
    class TextAsset extends Object {
        public readonly bytes: System.byte[]
        public readonly text: string;
        public ToString(): string;
    }
}

declare namespace UnityEngine.Tilemaps {
    abstract class TileBase extends ScriptableObject {

    }
    class Tile extends TileBase {

    }
}

declare namespace UnityEngine.UI {
    class UIBehaviour extends MonoBehaviour {

    }
    class Selectable extends UIBehaviour {

    }
    class InputField extends Selectable {

    }
    class Scrollbar extends Selectable {

    }
    class Graphic extends UIBehaviour {

    }
    class MaskableGraphic extends Graphic {

    }
    class Text extends MaskableGraphic {

    }
}

declare namespace System {
    interface IEquatable<T> {
        Equals(other: T): boolean;
    }
    interface IFormattable {
        ToString(format: string): string;
    }
    class byte {

    }
    class Void {

    }
    class Single {

    }
    class Boolean {

    }
    class Object {

    }
    class String {

    }
    class Exception {

    }
    class Int32 {

    }
    class ValueType {

    }
    type Converter$2<TInput, TOutput> = (input: TInput) => TOutput;
    type Predicate$1<T> = (obj: T) => boolean;
    type Action$1<T> = (obj: T) => void;
    type Comparison$1<T> = (x: T, y: T) => number;
    class Double {

    }
    class Enum {

    }
    class Type {

    }
    class Attribute {

    }
    type Converter<TInput, TOutput> = (input: TInput) => TOutput;
    type Predicate<T> = (obj: T) => boolean;
    type Comparison<T> = (x: T, y: T) => number;
    class Array {
        public readonly SyncRoot: any
        public readonly LongLength: number
        public readonly Length: number
        public readonly IsSynchronized: boolean
        public readonly IsReadOnly: boolean
        public readonly IsFixedSize: boolean
        public readonly Rank: number

        public static AsReadOnly<T>(array: T[]): System.Collections.ObjectModel.ReadOnlyCollection$1<T>
        public static BinarySearch<T>(array: T[], index: number, length: number, value: T, comparer: System.Collections.Generic.IComparer<any>): number
        public static BinarySearch<T>(array: T[], index: number, length: number, value: T): number
        public static BinarySearch<T>(array: T[], value: T): number
        public static BinarySearch(array: Array, value: any, comparer: System.Collections.Generic.IComparer<any>): number
        public static BinarySearch(array: Array, value: any): number
        public static BinarySearch(array: Array, index: number, length: number, value: any, comparer: System.Collections.Generic.IComparer<any>): number
        public static BinarySearch<T>(array: T[], value: T, comparer: System.Collections.Generic.IComparer<any>): number
        public static BinarySearch(array: Array, index: number, length: number, value: any): number
        public static Clear(array: Array, index: number, length: number): void
        public static ConstrainedCopy(sourceArray: Array, sourceIndex: number, destinationArray: Array, destinationIndex: number, length: number): void
        public static ConvertAll<TInput, TOutput>(array: TInput[], converter: Converter<TInput, TOutput>): TOutput[]
        public static Copy(sourceArray: Array, sourceIndex: number, destinationArray: Array, destinationIndex: number, length: number): void
        public static Copy(sourceArray: Array, sourceIndex: number, destinationArray: Array, destinationIndex: number, length: number): void
        public static Copy(sourceArray: Array, destinationArray: Array, length: number): void
        public static Copy(sourceArray: Array, destinationArray: Array, length: number): void
        public static CreateInstance(elementType: Type, length: number): Array
        public static CreateInstance(elementType: Type, length1: number, length2: number): Array
        public static CreateInstance(elementType: Type, length1: number, length2: number, length3: number): Array
        public static CreateInstance(elementType: Type, ...lengths: number[]): Array
        public static CreateInstance(elementType: Type, lengths: number[], lowerBounds: number[]): Array
        public static CreateInstance(elementType: Type, ...lengths: number[]): Array
        public static Empty<T>(): T[]
        public static Exists<T>(array: T[], match: Predicate<T>): boolean
        public static Find<T>(array: T[], match: Predicate<T>): T
        public static FindAll<T>(array: T[], match: Predicate<T>): T[]
        public static FindIndex<T>(array: T[], match: Predicate<T>): number
        public static FindIndex<T>(array: T[], startIndex: number, count: number, match: Predicate<T>): number
        public static FindIndex<T>(array: T[], startIndex: number, match: Predicate<T>): number
        public static FindLast<T>(array: T[], match: Predicate<T>): T
        public static FindLastIndex<T>(array: T[], startIndex: number, count: number, match: Predicate<T>): number
        public static FindLastIndex<T>(array: T[], startIndex: number, match: Predicate<T>): number
        public static FindLastIndex<T>(array: T[], match: Predicate<T>): number
        public static ForEach<T>(array: T[], action: Action<T>): void
        public static IndexOf<T>(array: T[], value: T, startIndex: number, count: number): number
        public static IndexOf<T>(array: T[], value: T, startIndex: number): number
        public static IndexOf(array: Array, value: any): number
        public static IndexOf(array: Array, value: any, startIndex: number, count: number): number
        public static IndexOf(array: Array, value: any, startIndex: number): number
        public static IndexOf<T>(array: T[], value: T): number
        public static LastIndexOf(array: Array, value: any): number
        public static LastIndexOf<T>(array: T[], value: T, startIndex: number, count: number): number
        public static LastIndexOf<T>(array: T[], value: T, startIndex: number): number
        public static LastIndexOf<T>(array: T[], value: T): number
        public static LastIndexOf(array: Array, value: any, startIndex: number, count: number): number
        public static LastIndexOf(array: Array, value: any, startIndex: number): number
        public static Resize<T>(array: T[], newSize: number): void
        public static Reverse(array: Array, index: number, length: number): void
        public static Reverse(array: Array): void
        public static Sort<T>(array: T[], comparison: Comparison<T>): void
        public static Sort<T>(array: T[], index: number, length: number, comparer: System.Collections.Generic.IComparer<T>): void
        public static Sort(array: Array): void
        public static Sort(keys: Array, items: Array): void
        public static Sort(keys: Array, items: Array, comparer: System.Collections.Generic.IComparer<any>): void
        public static Sort(keys: Array, items: Array, index: number, length: number): void
        public static Sort(keys: Array, items: Array, index: number, length: number, comparer: System.Collections.Generic.IComparer<any>): void
        public static Sort(array: Array, comparer: System.Collections.Generic.IComparer<any>): void
        public static Sort<T>(array: T[], index: number, length: number): void
        public static Sort(array: Array, index: number, length: number): void
        public static Sort<T>(array: T[], comparer: System.Collections.Generic.IComparer<T>): void
        public static Sort<TKey, TValue>(keys: TKey[], items: TValue[]): void
        public static Sort<T>(array: T[]): void
        public static Sort<TKey, TValue>(keys: TKey[], items: TValue[], index: number, length: number): void
        public static Sort<TKey, TValue>(keys: TKey[], items: TValue[], index: number, length: number, comparer: System.Collections.Generic.IComparer<TKey>): void
        public static Sort(array: Array, index: number, length: number, comparer: System.Collections.Generic.IComparer<any>): void
        public static Sort<TKey, TValue>(keys: TKey[], items: TValue[], comparer: System.Collections.Generic.IComparer<TKey>): void
        public static TrueForAll<T>(array: T[], match: Predicate<T>): boolean
        public Clone(): any
        public CopyTo(array: Array, index: number): void
        public CopyTo(array: Array, index: number): void
        public GetEnumerator(): System.Collections.Generic.IEnumerator
        public GetLength(dimension: number): number
        public GetLongLength(dimension: number): number
        public GetLowerBound(dimension: number): number
        public GetUpperBound(dimension: number): number
        public GetValue(index1: number, index2: number): any
        public GetValue(...indices: number[]): any
        public GetValue(index: number): any
        public GetValue(index: number): any
        public GetValue(index1: number, index2: number): any
        public GetValue(index1: number, index2: number, index3: number): any
        public GetValue(...indices: number[]): any
        public GetValue(index1: number, index2: number, index3: number): any
        public Initialize(): void
        public SetValue(value: any, index1: number, index2: number): void
        public SetValue(value: any, index: number): void
        public SetValue(value: any, ...indices: number[]): void
        public SetValue(value: any, index1: number, index2: number, index3: number): void
        public SetValue(value: any, index1: number, index2: number): void
        public SetValue(value: any, index: number): void
        public SetValue(value: any, ...indices: number[]): void
        public SetValue(value: any, index1: number, index2: number, index3: number): void
    }
    class Delegate extends System.Object {
        public Method: System.Reflection.MethodInfo;
        public Target: any;
        public static CreateDelegate(type: System.Type, firstArgument: any, method: System.Reflection.MethodInfo, throwOnBindFailure: boolean): Function;
        public static CreateDelegate(type: System.Type, firstArgument: any, method: System.Reflection.MethodInfo): Function;
        public static CreateDelegate(type: System.Type, method: System.Reflection.MethodInfo, throwOnBindFailure: boolean): Function;
        public static CreateDelegate(type: System.Type, method: System.Reflection.MethodInfo): Function;
        public static CreateDelegate(type: System.Type, target: any, method: string): Function;
        public static CreateDelegate(type: System.Type, target: System.Type, method: string, ignoreCase: boolean, throwOnBindFailure: boolean): Function;
        public static CreateDelegate(type: System.Type, target: System.Type, method: string): Function;
        public static CreateDelegate(type: System.Type, target: System.Type, method: string, ignoreCase: boolean): Function;
        public static CreateDelegate(type: System.Type, target: any, method: string, ignoreCase: boolean, throwOnBindFailure: boolean): Function;
        public static CreateDelegate(type: System.Type, target: any, method: string, ignoreCase: boolean): Function;
        public DynamicInvoke(...args: any[]): any;
        public Clone(): any;
        public Equals(obj: any): boolean;
        public GetHashCode(): number;
        public GetObjectData(info: System.Runtime.Serialization.SerializationInfo, context: System.Runtime.Serialization.StreamingContext): void;
        public GetInvocationList(): Function[];
        public static Combine(a: Function, b: Function): Function;
        public static Combine(...delegates: Function[]): Function;
        public static Remove(source: Function, value: Function): Function;
        public static RemoveAll(source: Function, value: Function): Function;
        public static op_Equality(d1: Function, d2: Function): boolean;
        public static op_Inequality(d1: Function, d2: Function): boolean;

    }
    type Action<T> = Action$1<T>;
    class DateTime {

    }
    class EventArgs {
        public static readonly Empty: EventArgs;
    }
}

declare namespace System.Collections.Generic {
    interface IEnumerator {
        readonly Current: any
        MoveNext(): boolean;
        Reset(): void;
    }
    interface IEnumerable {
        GetEnumerator(): IEnumerator;
    }
    interface ICollection extends IEnumerable {
        readonly Count: number
        readonly IsSynchronized: boolean
        readonly SyncRoot: any
        CopyTo(array: System.Array, index: number): void;
    }
    interface IComparer<T> {
        Compare(x, y): number;
    }
    interface ICollection$1<T> {

    }
    interface IEnumerable$1<T> {

    }
    interface IComparer$1<T> {

    }
    interface ICloneable {
        Clone(): any
    }
    interface IList<T> extends System.Collections.Generic.ICollection$1<T>, System.Collections.Generic.IEnumerable$1<T> {
        IndexOf(item: T): number;
        Insert(index: number, item: T);
        RemoveAt(index: number);
    }
    class List$1<T> extends System.Object {
        public Capacity: number;
        public Count: number;
        public Item: T;
        public constructor();
        public constructor(capacity: number);
        public constructor(collection: System.Collections.Generic.IEnumerable$1<T>);
        public get_Item(index: number): T;
        public set_Item(index: number, value: T): void;
        public Add(item: T): void;
        public AddRange(collection: System.Collections.Generic.IEnumerable$1<T>): void;
        public AsReadOnly(): System.Collections.ObjectModel.ReadOnlyCollection$1<T>;
        public BinarySearch(index: number, count: number, item: T, comparer: System.Collections.Generic.IComparer$1<T>): number;
        public BinarySearch(item: T): number;
        public BinarySearch(item: T, comparer: System.Collections.Generic.IComparer$1<T>): number;
        public Clear(): void;
        public Contains(item: T): boolean;
        public CopyTo(array: T[]): void;
        public CopyTo(index: number, array: T[], arrayIndex: number, count: number): void;
        public CopyTo(array: T[], arrayIndex: number): void;
        public Exists(match: System.Predicate$1<T>): boolean;
        public Find(match: System.Predicate$1<T>): T;
        public FindAll(match: System.Predicate$1<T>): System.Collections.Generic.List$1<T>;
        public FindIndex(match: System.Predicate$1<T>): number;
        public FindIndex(startIndex: number, match: System.Predicate$1<T>): number;
        public FindIndex(startIndex: number, count: number, match: System.Predicate$1<T>): number;
        public FindLast(match: System.Predicate$1<T>): T;
        public FindLastIndex(match: System.Predicate$1<T>): number;
        public FindLastIndex(startIndex: number, match: System.Predicate$1<T>): number;
        public FindLastIndex(startIndex: number, count: number, match: System.Predicate$1<T>): number;
        public ForEach(action: System.Action$1<T>): void;
        public GetEnumerator(): System.Collections.Generic.List$1.Enumerator<T>;
        public GetRange(index: number, count: number): System.Collections.Generic.List$1<T>;
        public IndexOf(item: T): number;
        public IndexOf(item: T, index: number): number;
        public IndexOf(item: T, index: number, count: number): number;
        public Insert(index: number, item: T): void;
        public InsertRange(index: number, collection: System.Collections.Generic.IEnumerable$1<T>): void;
        public LastIndexOf(item: T): number;
        public LastIndexOf(item: T, index: number): number;
        public LastIndexOf(item: T, index: number, count: number): number;
        public Remove(item: T): boolean;
        public RemoveAll(match: System.Predicate$1<T>): number;
        public RemoveAt(index: number): void;
        public RemoveRange(index: number, count: number): void;
        public Reverse(): void;
        public Reverse(index: number, count: number): void;
        public Sort(): void;
        public Sort(comparer: System.Collections.Generic.IComparer$1<T>): void;
        public Sort(index: number, count: number, comparer: System.Collections.Generic.IComparer$1<T>): void;
        public Sort(comparison: System.Comparison$1<T>): void;
        public ToArray(): T[];
        public TrimExcess(): void;
        public TrueForAll(match: System.Predicate$1<T>): boolean;

    }
    class ArrayList<T> implements System.Collections.Generic.ICollection$1<T>, System.Collections.Generic.IEnumerable$1<T>, IList<T>, ICloneable {
        constructor();
        constructor(c: ICollection);
        constructor(capacity: number);

        readonly IsSynchronized: boolean
        readonly IsReadOnly: boolean
        readonly IsFixedSize: boolean
        readonly Count: number
        Capacity: number
        readonly SyncRoot: any

        public static Adapter(list: IList<any>): ArrayList<any>;
        public static FixedSize(list: ArrayList<any>): ArrayList<any>;
        public static FixedSize(list: IList<any>): IList<any>;
        public static ReadOnly(list: IList<any>): IList<any>;
        public static ReadOnly(list: ArrayList<any>): ArrayList<any>;
        public static Repeat(value: any, count: number): ArrayList<any>;
        public static Synchronized(list: ArrayList<any>): ArrayList<any>;
        public static Synchronized(list: IList<any>): IList<any>;
        public Add(value: any): number;
        public AddRange(c: ICollection): void;
        public BinarySearch(value: T): number;
        public BinarySearch(index: number, count: number, value: T, comparer: IComparer<any>): number;
        public BinarySearch(value: T, comparer: IComparer<any>): number;
        public Clear();
        public Contains(item: T): boolean;
        public CopyTo(index: number, array: System.Array, arrayIndex: number, count: number);
        public CopyTo(array: System.Array, arrayIndex: number);
        public CopyTo(array: System.Array);
        public GetEnumerator(index: number, count: number): IEnumerator;
        public GetEnumerator(): IEnumerator;
        public GetRange(index: number, count: number): ArrayList<T>;
        public IndexOf(value: T, startIndex: number, count: number): number;
        public IndexOf(value: T, startIndex: number): number;
        public IndexOf(value: T): number;
        public Insert(index: number, item: T);
        public InsertRange(index: number, c: ICollection);
        public LastIndexOf(value: T): number;
        public LastIndexOf(value: T, startIndex: number, count: number): number;
        public LastIndexOf(value: T, startIndex: number): number;
        public Remove(obj: T);
        public RemoveAt(index: number);
        public RemoveRange(index: number, count: number);
        public Reverse(index: number, count: number);
        public Reverse();
        public SetRange(index: number, c: ICollection);
        public Sort(comparer: IComparer<any>);
        public Sort(index: number, count: number, comparer: IComparer<any>);
        public Sort();
        public ToArray(): T[];
        public ToArray(type: Type): System.Array;
        public TrimToSize();
        Clone(): T
    }
}
declare namespace System.Collections.ObjectModel {
    class ReadOnlyCollection$1<T> {

    }

}
declare namespace System.Collections.Generic.List$1 {
    class Enumerator<T> {

    }

}
declare namespace System.Threading.Tasks {
    class Task$1<TResult> {

    }

}
declare namespace System.Collections {
    interface IEnumerator {
        readonly Current: any
        MoveNext(): boolean;
        Reset(): void
    }
    class Hashtable {

    }
}
declare namespace System.Text {
    class StringBuilder { }
}
declare namespace System.Timers {
    class ElapsedEventArgs extends EventArgs {
        public readonly SignalTime: DateTime
    }
}
declare namespace UnityEngine.SceneManagement {
    class Scene {

    }

}
declare namespace System.Reflection {
    class MethodInfo {

    }

}
declare namespace System.Runtime.Serialization {
    class SerializationInfo {

    }
    class StreamingContext {

    }

}
