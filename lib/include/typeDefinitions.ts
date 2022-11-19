export const int = "i32" as const;
export const long = int;
export const longLong = "i64" as const;
export const unsigned = "u32" as const;
export const unsignedLong = unsigned;
export const unsignedLongLong = "u64" as const;
export const double = "f32" as const;
export const time_t = "i32" as const;
export const size_t = "usize" as const;
/**
 * `const char *`
 */
export const constCharPtr = "buffer" as const;
export const NULLBUF = new Uint8Array();
export const NULL = Deno.UnsafePointer.of(NULLBUF);
/**
 * Array of CStrings
 *
 * ```c
 * const char *const *
 * ```
 */
export const CStringArrayT = "buffer" as const;

export const out = (_type: unknown) => "buffer" as const;
export const buf = (_type: unknown) => "buffer" as const;
export const ptr = (_type: unknown) => "pointer" as const;

/**
 * Object encapsulating information about overlaying virtual
 * file/directories over the real file system.
 */
export const CXVirtualFileOverlayT = "buffer" as const;

/**
 * Object encapsulating information about a module.map file.
 */
export const CXModuleMapDescriptor = "buffer" as const;

/**
 * Describes the severity of a particular diagnostic.
 */
export enum CXDiagnosticSeverity {
  /**
   * A diagnostic that has been suppressed, e.g., by a command-line
   * option.
   */
  CXDiagnostic_Ignored = 0,

  /**
   * This diagnostic is a note that should be attached to the
   * previous (non-note) diagnostic.
   */
  CXDiagnostic_Note = 1,

  /**
   * This diagnostic indicates suspicious code that may not be
   * wrong.
   */
  CXDiagnostic_Warning = 2,

  /**
   * This diagnostic indicates that the code is ill-formed.
   */
  CXDiagnostic_Error = 3,

  /**
   * This diagnostic indicates that the code is ill-formed such
   * that future parser recovery is unlikely to produce useful
   * results.
   */
  CXDiagnostic_Fatal = 4,
}
/**
 * {@link CXDiagnosticSeverity}
 *
 * Describes the severity of a particular diagnostic.
 */
export const CXDiagnosticSeverityT = "u8" as const;

/**
 * A single diagnostic, containing the diagnostic's severity,
 * location, text, source ranges, and fix-it hints.
 */
export const CXDiagnosticT = "pointer" as const;

/**
 * A group of CXDiagnostics.
 */
export const CXDiagnosticSetT = "pointer" as const;

/**
 * ```cpp
 * typedef struct CXTUResourceUsageEntry {
 *   // The memory usage category.
 *   enum CXTUResourceUsageKind kind;
 *   // Amount of resources used.
 *   // The units will depend on the resource kind.
 *   unsigned long amount;
 * } CXTUResourceUsageEntry;
 * ``
 */
export const CXTUResourceUsageEntryT = {
  struct: [unsigned, unsignedLong],
} as const;

/**
 * The memory usage of a CXTranslationUnit, broken into categories.
 * ```cpp
 * typedef struct CXTUResourceUsage {
 *   // Private data member, used for queries.
 *   void *data;
 *   // The number of entries in the 'entries' array.
 *   unsigned numEntries;
 *   // An array of key-value pairs, representing the breakdown of memory usage.
 *   CXTUResourceUsageEntry *entries;
 * } CXTUResourceUsage;
 * ```
 */
export const CXTUResourceUsageT = {
  struct: ["pointer", unsigned, ptr(CXTUResourceUsageEntryT)],
} as const;

/**
 * Describes the kind of error that occurred (if any) in a call to
 * `clang_loadDiagnostics`.
 */
export const enum CXLoadDiag_Error {
  /**
   * Indicates that no error occurred.
   */
  CXLoadDiag_None = 0,

  /**
   * Indicates that an unknown error occurred while attempting to
   * deserialize diagnostics.
   */
  CXLoadDiag_Unknown = 1,

  /**
   * Indicates that the file containing the serialized diagnostics
   * could not be opened.
   */
  CXLoadDiag_CannotLoad = 2,

  /**
   * Indicates that the serialized diagnostics file is invalid or
   * corrupt.
   */
  CXLoadDiag_InvalidFile = 3,
}
/**
 * {@link CXLoadDiag_Error}
 *
 * Describes the kind of error that occurred (if any) in a call to
 * `clang_loadDiagnostics`.
 */
export const CXLoadDiag_ErrorT = "u8" as const;

/**
 * Options to control the display of diagnostics.
 *
 * The values in this enum are meant to be combined to customize the
 * behavior of `clang_formatDiagnostic`().
 */
export enum CXDiagnosticDisplayOptions {
  /**
   * Display the source-location information where the
   * diagnostic was located.
   *
   * When set, diagnostics will be prefixed by the file, line, and
   * (optionally) column to which the diagnostic refers. For example,
   *
   * ```log
   * test.c:28: warning: extra tokens at end of #endif directive
   * ```
   *
   * This option corresponds to the clang flag `-fshow`-source-location.
   */
  CXDiagnostic_DisplaySourceLocation = 0x01,

  /**
   * If displaying the source-location information of the
   * diagnostic, also include the column number.
   *
   * This option corresponds to the clang flag `-fshow`-column.
   */
  CXDiagnostic_DisplayColumn = 0x02,

  /**
   * If displaying the source-location information of the
   * diagnostic, also include information about source ranges in a
   * machine-parsable format.
   *
   * This option corresponds to the clang flag
   * `-fdiagnostics`-print-source-range-info.
   */
  CXDiagnostic_DisplaySourceRanges = 0x04,

  /**
   * Display the option name associated with this diagnostic, if any.
   *
   * The option name displayed (e.g., -Wconversion) will be placed in brackets
   * after the diagnostic text. This option corresponds to the clang flag
   * `-fdiagnostics`-show-option.
   */
  CXDiagnostic_DisplayOption = 0x08,

  /**
   * Display the category number associated with this diagnostic, if any.
   *
   * The category number is displayed within brackets after the diagnostic text.
   * This option corresponds to the clang flag
   * `-fdiagnostics`-show-category=id.
   */
  CXDiagnostic_DisplayCategoryId = 0x10,

  /**
   * Display the category name associated with this diagnostic, if any.
   *
   * The category name is displayed within brackets after the diagnostic text.
   * This option corresponds to the clang flag
   * `-fdiagnostics`-show-category=name.
   */
  CXDiagnostic_DisplayCategoryName = 0x20,
}
/**
 * {@link CXDiagnosticDisplayOptions}
 *
 * Options to control the display of diagnostics.
 *
 * The values in this enum are meant to be combined to customize the
 * behavior of `clang_formatDiagnostic`().
 */
export const CXDiagnosticDisplayOptionsT = "u8" as const;

/**
 * A particular source file that is part of a translation unit.
 */
export const CXFileT = "pointer" as const;

/**
 * Uniquely identifies a CXFile, that refers to the same underlying file,
 * across an indexing session.
 */
export const CXFileUniqueIDT = {
  struct: ["u64", "u64", "u64"],
} as const;

/**
 * An "index" that consists of a set of translation units that would
 * typically be linked together into an executable or library.
 *
 * ```c
 * typedef void *CXIndex;
 * ```
 */
export const CXIndexT = "pointer" as const;

/**
 * An opaque type representing target information for a given translation
 * unit.
 *
 * ```cpp
 * typedef CXTargetInfoImpl *CXTargetInfo;
 * ```
 */
export const CXTargetInfoT = "pointer" as const;

/**
 * A single translation unit, which resides in an index.
 *
 * ```cpp
 * typedef struct CXTranslationUnitImpl *CXTranslationUnit;
 * ```
 */
export const CXTranslationUnitT = "pointer" as const;

/**
 * Opaque pointer representing client data that will be passed through
 * to various callbacks and visitors.
 * ```cpp
 * typedef void *CXClientData;
 * ```
 */
export const CXClientDataT = "pointer" as const;

/**
 * A character string.
 *
 * The {@link CXString} type is used to return strings from the interface when
 * the ownership of that string might differ from one call to the next.
 * Use {@link clang_getCString}() to retrieve the string data and, once finished
 * with the string data, call {@link clang_disposeString}() to free the string.
 * ```cpp
 * typedef struct {
 *   const void *data;
 *   unsigned private_flags;
 * } CXString;
 * ```
 */
export const CXString = { struct: ["pointer", unsigned] } as const;

/**
 * Describes a version number of the form major.minor.subminor.
 * ```cpp
 * typedef struct CXVersion {
 *   // The major version number, e.g., the '10' in '10.7.3'. A negative
 *   // value indicates that there is no version number at all.
 *   int Major;
 *   // The minor version number, e.g., the '7' in '10.7.3'. This value
 *   // will be negative if no minor version number was provided, e.g., for
 *   // version '10'.
 *   int Minor;
 *   // The subminor version number, e.g., the '3' in '10.7.3'. This value
 *   // will be negative if no minor or subminor version number was provided,
 *   // e.g., in version '10' or '10.7'.
 *   int Subminor;
 * } CXVersion;
 * ```
 */
export const CXVersion = { struct: [int, int, int] } as const;

/**
 * Provides the contents of a file that has not yet been saved to disk.
 *
 * Each CXUnsavedFile instance provides the name of a file on the
 * system along with the current contents of that file that have not
 * yet been saved to disk.
 * ```cpp
 * struct CXUnsavedFile {
 *   // The file whose contents have not yet been saved.
 *   //
 *   // This file must already exist in the file system.
 *   const char *Filename;
 *
 *   // A buffer containing the unsaved contents of this file.
 *   const char *Contents;
 *
 *   // The length of the unsaved contents of this buffer.
 *   unsigned long Length;
 * };
 * ```
 */
export const CXUnsavedFileT = {
  struct: [constCharPtr, constCharPtr, unsignedLong],
} as const;

/**
 * Describes the availability of a particular entity, which indicates
 * whether the use of this entity will result in a warning or error due to
 * it being deprecated or unavailable.
 */
export enum CXAvailabilityKind {
  /**
   * The entity is available.
   */
  CXAvailability_Available,
  /**
   * The entity is available, but has been deprecated (and its use is
   * not recommended).
   */
  CXAvailability_Deprecated,
  /**
   * The entity is not available; any use of it will be an error.
   */
  CXAvailability_NotAvailable,
  /**
   * The entity is available, but not accessible; any use of it will be
   * an error.
   */
  CXAvailability_NotAccessible,
}
export const CXAvailabilityKindT = "u8" as const;

/**
 * Describes the availability of a given entity on a particular platform, e.g.,
 * a particular class might only be available on Mac OS 10.7 or newer.
 * ```cpp
 * typedef struct CXPlatformAvailability {
 *    // A string that describes the platform for which this structure
 *    // provides availability information.
 *    //
 *    // Possible values are "ios" or "macos".
 *   CXString Platform;
 *    // The version number in which this entity was introduced.
 *   CXVersion Introduced;
 *    // The version number in which this entity was deprecated (but is
 *    // still available).
 *   CXVersion Deprecated;
 *    // The version number in which this entity was obsoleted, and therefore
 *    // is no longer available.
 *   CXVersion Obsoleted;
 *    // Whether the entity is unconditionally unavailable on this platform.
 *   int Unavailable;
 *    // An optional message to provide to a user of this API, e.g., to
 *    // suggest replacement APIs.
 *   CXString Message;
 * } CXPlatformAvailability;
 * ```
 */
export const CXPlatformAvailabilityT = {
  struct: [CXString, CXVersion, CXVersion, CXVersion, int, CXString],
} as const;

/**
 * A fast container representing a set of CXCursors.
 * ```cpp
 * typedef struct CXCursorSetImpl *CXCursorSet;
 * ```
 */
export const CXCursorSet = "pointer" as const;

/**
 * Describes the exception specification of a cursor.
 *
 * A negative value indicates that the cursor is not a function declaration.
 */
export enum CXCursor_ExceptionSpecificationKind {
  /**
   * The cursor has no exception specification.
   */
  CXCursor_ExceptionSpecificationKind_None,

  /**
   * The cursor has exception specification throw()
   */
  CXCursor_ExceptionSpecificationKind_DynamicNone,

  /**
   * The cursor has exception specification throw(T1, T2)
   */
  CXCursor_ExceptionSpecificationKind_Dynamic,

  /**
   * The cursor has exception specification throw(...).
   */
  CXCursor_ExceptionSpecificationKind_MSAny,

  /**
   * The cursor has exception specification basic noexcept.
   */
  CXCursor_ExceptionSpecificationKind_BasicNoexcept,

  /**
   * The cursor has exception specification computed noexcept.
   */
  CXCursor_ExceptionSpecificationKind_ComputedNoexcept,

  /**
   * The exception specification has not yet been evaluated.
   */
  CXCursor_ExceptionSpecificationKind_Unevaluated,

  /**
   * The exception specification has not yet been instantiated.
   */
  CXCursor_ExceptionSpecificationKind_Uninstantiated,

  /**
   * The exception specification has not been parsed yet.
   */
  CXCursor_ExceptionSpecificationKind_Unparsed,

  /**
   * The cursor has a __declspec(nothrow) exception specification.
   */
  CXCursor_ExceptionSpecificationKind_NoThrow,
}
/**
 * {@link CXCursor_ExceptionSpecificationKind}
 *
 * Describes the exception specification of a cursor.
 *
 * A negative value indicates that the cursor is not a function declaration.
 */
export const CXCursor_ExceptionSpecificationKindT = "i32" as const;

export const enum CXGlobalOptFlags {
  /**
   * Used to indicate that no special CXIndex options are needed.
   */
  CXGlobalOpt_None = 0x0,

  /**
   * Used to indicate that threads that libclang creates for indexing
   * purposes should use background priority.
   *
   * Affects #clang_indexSourceFile, #clang_indexTranslationUnit,
   * #clang_parseTranslationUnit, #clang_saveTranslationUnit.
   */
  CXGlobalOpt_ThreadBackgroundPriorityForIndexing = 0x1,

  /**
   * Used to indicate that threads that libclang creates for editing
   * purposes should use background priority.
   *
   * Affects #clang_reparseTranslationUnit, #clang_codeCompleteAt,
   * #clang_annotateTokens
   */
  CXGlobalOpt_ThreadBackgroundPriorityForEditing = 0x2,

  /**
   * Used to indicate that all threads that libclang creates should use
   * background priority.
   */
  CXGlobalOpt_ThreadBackgroundPriorityForAll =
    CXGlobalOpt_ThreadBackgroundPriorityForIndexing |
    CXGlobalOpt_ThreadBackgroundPriorityForEditing,
}
/**
 * {@link CXGlobalOptFlags}
 */
export const CXGlobalOptFlagsT = "u8" as const;

/**
 * Flags that control the creation of translation units.
 *
 * The enumerators in this enumeration type are meant to be bitwise
 * ORed together to specify which options should be used when
 * constructing the translation unit.
 */
export enum CXTranslationUnit_Flags {
  /**
   * Used to indicate that no special translation-unit options are
   * needed.
   */
  CXTranslationUnit_None = 0x0,

  /**
   * Used to indicate that the parser should construct a "detailed"
   * preprocessing record, including all macro definitions and instantiations.
   *
   * Constructing a detailed preprocessing record requires more memory
   * and time to parse, since the information contained in the record
   * is usually not retained. However, it can be useful for
   * applications that require more detailed information about the
   * behavior of the preprocessor.
   */
  CXTranslationUnit_DetailedPreprocessingRecord = 0x01,

  /**
   * Used to indicate that the translation unit is incomplete.
   *
   * When a translation unit is considered "incomplete", semantic
   * analysis that is typically performed at the end of the
   * translation unit will be suppressed. For example, this suppresses
   * the completion of tentative declarations in C and of
   * instantiation of implicitly-instantiation function templates in
   * C++. This option is typically used when parsing a header with the
   * intent of producing a precompiled header.
   */
  CXTranslationUnit_Incomplete = 0x02,

  /**
   * Used to indicate that the translation unit should be built with an
   * implicit precompiled header for the preamble.
   *
   * An implicit precompiled header is used as an optimization when a
   * particular translation unit is likely to be reparsed many times
   * when the sources aren't changing that often. In this case, an
   * implicit precompiled header will be built containing all of the
   * initial includes at the top of the main file (what we refer to as
   * the "preamble" of the file). In subsequent parses, if the
   * preamble or the files in it have not changed,
   * {@link clang_reparseTranslationUnit}) will re-use the implicit
   * precompiled header to improve parsing performance.
   */
  CXTranslationUnit_PrecompiledPreamble = 0x04,

  /**
   * Used to indicate that the translation unit should cache some
   * code-completion results with each reparse of the source file.
   *
   * Caching of code-completion results is a performance optimization that
   * introduces some overhead to reparsing but improves the performance of
   * code-completion operations.
   */
  CXTranslationUnit_CacheCompletionResults = 0x08,

  /**
   * Used to indicate that the translation unit will be serialized with
   * {@link clang_saveTranslationUnit}.
   *
   * This option is typically used when parsing a header with the intent of
   * producing a precompiled header.
   */
  CXTranslationUnit_ForSerialization = 0x10,

  /**
   * DEPRECATED: Enabled chained precompiled preambles in C++.
   *
   * Note: this is a *temporary* option that is available only while
   * we are testing C++ precompiled preamble support. It is deprecated.
   */
  CXTranslationUnit_CXXChainedPCH = 0x20,

  /**
   * Used to indicate that function/method bodies should be skipped while
   * parsing.
   *
   * This option can be used to search for declarations/definitions while
   * ignoring the usages.
   */
  CXTranslationUnit_SkipFunctionBodies = 0x40,

  /**
   * Used to indicate that brief documentation comments should be
   * included into the set of code completions returned from this translation
   * unit.
   */
  CXTranslationUnit_IncludeBriefCommentsInCodeCompletion = 0x80,

  /**
   * Used to indicate that the precompiled preamble should be created on
   * the first parse. Otherwise it will be created on the first reparse. This
   * trades runtime on the first parse (serializing the preamble takes time) for
   * reduced runtime on the second parse (can now reuse the preamble).
   */
  CXTranslationUnit_CreatePreambleOnFirstParse = 0x100,

  /**
   * Do not stop processing when fatal errors are encountered.
   *
   * When fatal errors are encountered while parsing a translation unit,
   * semantic analysis is typically stopped early when compiling code. A common
   * source for fatal errors are unresolvable include files. For the
   * purposes of an IDE, this is undesirable behavior and as much information
   * as possible should be reported. Use this flag to enable this behavior.
   */
  CXTranslationUnit_KeepGoing = 0x200,

  /**
   * Sets the preprocessor in a mode for parsing a single file only.
   */
  CXTranslationUnit_SingleFileParse = 0x400,

  /**
   * Used in combination with CXTranslationUnit_SkipFunctionBodies to
   * constrain the skipping of function bodies to the preamble.
   *
   * The function bodies of the main file are not skipped.
   */
  CXTranslationUnit_LimitSkipFunctionBodiesToPreamble = 0x800,

  /**
   * Used to indicate that attributed types should be included in CXType.
   */
  CXTranslationUnit_IncludeAttributedTypes = 0x1000,

  /**
   * Used to indicate that implicit attributes should be visited.
   */
  CXTranslationUnit_VisitImplicitAttributes = 0x2000,

  /**
   * Used to indicate that non-errors from included files should be ignored.
   *
   * If set, {@link clang_getDiagnosticSetFromTU}() will not report e.g. warnings from
   * included files anymore. This speeds up {@link clang_getDiagnosticSetFromTU}() for
   * the case where these warnings are not of interest, as for an IDE for
   * example, which typically shows only the diagnostics in the main file.
   */
  CXTranslationUnit_IgnoreNonErrorsFromIncludedFiles = 0x4000,

  /**
   * Tells the preprocessor not to skip excluded conditional blocks.
   */
  CXTranslationUnit_RetainExcludedConditionalBlocks = 0x8000,
}

/**
 * Flags that control how translation units are saved.
 *
 * The enumerators in this enumeration type are meant to be bitwise
 * ORed together to specify which options should be used when
 * saving the translation unit.
 */
export enum CXSaveTranslationUnit_Flags {
  /**
   * Used to indicate that no special saving options are needed.
   */
  CXSaveTranslationUnit_None = 0x0,
}

/**
 * Describes the kind of error that occurred (if any) in a call to
 * {@link clang_saveTranslationUnit}().
 */
export enum CXSaveError {
  /**
   * Indicates that no error occurred while saving a translation unit.
   */
  CXSaveError_None = 0,

  /**
   * Indicates that an unknown error occurred while attempting to save
   * the file.
   *
   * This error typically indicates that file I/O failed when attempting to
   * write the file.
   */
  CXSaveError_Unknown = 1,

  /**
   * Indicates that errors during translation prevented this attempt
   * to save the translation unit.
   *
   * Errors that prevent the translation unit from being saved can be
   * extracted using {@link clang_getNumDiagnostics}() and {@link clang_getDiagnostic}().
   */
  CXSaveError_TranslationErrors = 2,

  /**
   * Indicates that the translation unit to be saved was somehow
   * invalid (e.g., NULL).
   */
  CXSaveError_InvalidTU = 3,
}

/**
 * Flags that control the reparsing of translation units.
 *
 * The enumerators in this enumeration type are meant to be bitwise
 * ORed together to specify which options should be used when
 * reparsing the translation unit.
 */
export enum CXReparse_Flags {
  /**
   * Used to indicate that no special reparsing options are needed.
   */
  CXReparse_None = 0x0,
}

/**
 * Categorizes how memory is being used by a translation unit.
 */
export enum CXTUResourceUsageKind {
  CXTUResourceUsage_AST = 1,
  CXTUResourceUsage_Identifiers = 2,
  CXTUResourceUsage_Selectors = 3,
  CXTUResourceUsage_GlobalCompletionResults = 4,
  CXTUResourceUsage_SourceManagerContentCache = 5,
  CXTUResourceUsage_AST_SideTables = 6,
  CXTUResourceUsage_SourceManager_Membuffer_Malloc = 7,
  CXTUResourceUsage_SourceManager_Membuffer_MMap = 8,
  CXTUResourceUsage_ExternalASTSource_Membuffer_Malloc = 9,
  CXTUResourceUsage_ExternalASTSource_Membuffer_MMap = 10,
  CXTUResourceUsage_Preprocessor = 11,
  CXTUResourceUsage_PreprocessingRecord = 12,
  CXTUResourceUsage_SourceManager_DataStructures = 13,
  CXTUResourceUsage_Preprocessor_HeaderSearch = 14,
  CXTUResourceUsage_MEMORY_IN_BYTES_BEGIN = CXTUResourceUsage_AST,
  CXTUResourceUsage_MEMORY_IN_BYTES_END =
    CXTUResourceUsage_Preprocessor_HeaderSearch,

  CXTUResourceUsage_First = CXTUResourceUsage_AST,
  CXTUResourceUsage_Last = CXTUResourceUsage_Preprocessor_HeaderSearch,
}

/**
 * Describes the kind of entity that a cursor refers to.
 */
export enum CXCursorKind {
  /* Declarations */
  /**
   * A declaration whose specific kind is not exposed via this
   * interface.
   *
   * Unexposed declarations have the same operations as any other kind
   * of declaration; one can extract their location information,
   * spelling, find their definitions, etc. However, the specific kind
   * of the declaration is not reported.
   */
  CXCursor_UnexposedDecl = 1,
  /** A C or C++ struct. */
  CXCursor_StructDecl = 2,
  /** A C or C++ union. */
  CXCursor_UnionDecl = 3,
  /** A C++ class. */
  CXCursor_ClassDecl = 4,
  /** An enumeration. */
  CXCursor_EnumDecl = 5,
  /**
   * A field (in C) or non-static data member (in C++) in a
   * struct, union, or C++ class.
   */
  CXCursor_FieldDecl = 6,
  /** An enumerator constant. */
  CXCursor_EnumConstantDecl = 7,
  /** A function. */
  CXCursor_FunctionDecl = 8,
  /** A variable. */
  CXCursor_VarDecl = 9,
  /** A function or method parameter. */
  CXCursor_ParmDecl = 10,
  /** An Objective-C \@interface. */
  CXCursor_ObjCInterfaceDecl = 11,
  /** An Objective-C \@interface for a category. */
  CXCursor_ObjCCategoryDecl = 12,
  /** An Objective-C \@protocol declaration. */
  CXCursor_ObjCProtocolDecl = 13,
  /** An Objective-C \@property declaration. */
  CXCursor_ObjCPropertyDecl = 14,
  /** An Objective-C instance variable. */
  CXCursor_ObjCIvarDecl = 15,
  /** An Objective-C instance method. */
  CXCursor_ObjCInstanceMethodDecl = 16,
  /** An Objective-C class method. */
  CXCursor_ObjCClassMethodDecl = 17,
  /** An Objective-C \@implementation. */
  CXCursor_ObjCImplementationDecl = 18,
  /** An Objective-C \@implementation for a category. */
  CXCursor_ObjCCategoryImplDecl = 19,
  /** A typedef. */
  CXCursor_TypedefDecl = 20,
  /** A C++ class method. */
  CXCursor_CXXMethod = 21,
  /** A C++ namespace. */
  CXCursor_Namespace = 22,
  /** A linkage specification, e.g. 'extern "C"'. */
  CXCursor_LinkageSpec = 23,
  /** A C++ constructor. */
  CXCursor_Constructor = 24,
  /** A C++ destructor. */
  CXCursor_Destructor = 25,
  /** A C++ conversion function. */
  CXCursor_ConversionFunction = 26,
  /** A C++ template type parameter. */
  CXCursor_TemplateTypeParameter = 27,
  /** A C++ non-type template parameter. */
  CXCursor_NonTypeTemplateParameter = 28,
  /** A C++ template template parameter. */
  CXCursor_TemplateTemplateParameter = 29,
  /** A C++ function template. */
  CXCursor_FunctionTemplate = 30,
  /** A C++ class template. */
  CXCursor_ClassTemplate = 31,
  /** A C++ class template partial specialization. */
  CXCursor_ClassTemplatePartialSpecialization = 32,
  /** A C++ namespace alias declaration. */
  CXCursor_NamespaceAlias = 33,
  /** A C++ using directive. */
  CXCursor_UsingDirective = 34,
  /** A C++ using declaration. */
  CXCursor_UsingDeclaration = 35,
  /** A C++ alias declaration */
  CXCursor_TypeAliasDecl = 36,
  /** An Objective-C \@synthesize definition. */
  CXCursor_ObjCSynthesizeDecl = 37,
  /** An Objective-C \@dynamic definition. */
  CXCursor_ObjCDynamicDecl = 38,
  /** An access specifier. */
  CXCursor_CXXAccessSpecifier = 39,

  CXCursor_FirstDecl = CXCursor_UnexposedDecl,
  CXCursor_LastDecl = CXCursor_CXXAccessSpecifier,

  /* References */
  CXCursor_FirstRef = 40,
  /* Decl references */
  CXCursor_ObjCSuperClassRef = 40,
  CXCursor_ObjCProtocolRef = 41,
  CXCursor_ObjCClassRef = 42,
  /**
   * A reference to a type declaration.
   *
   * A type reference occurs anywhere where a type is named but not
   * declared. For example, given:
   *
   * ```c++
   * typedef unsigned size_type;
   * size_type size;
   * ```
   *
   * The typedef is a declaration of size_type (CXCursor_TypedefDecl),
   * while the type of the variable "size" is referenced. The cursor
   * referenced by the type of size is the typedef for size_type.
   */
  CXCursor_TypeRef = 43,
  CXCursor_CXXBaseSpecifier = 44,
  /**
   * A reference to a class template, function template, template
   * template parameter, or class template partial specialization.
   */
  CXCursor_TemplateRef = 45,
  /**
   * A reference to a namespace or namespace alias.
   */
  CXCursor_NamespaceRef = 46,
  /**
   * A reference to a member of a struct, union, or class that occurs in
   * some non-expression context, e.g., a designated initializer.
   */
  CXCursor_MemberRef = 47,
  /**
   * A reference to a labeled statement.
   *
   * This cursor kind is used to describe the jump to "start_over" in the
   * goto statement in the following example:
   *
   * ```c++
   *   start_over:
   *     ++counter;
   *
   *     goto start_over;
   * ```
   *
   * A label reference cursor refers to a label statement.
   */
  CXCursor_LabelRef = 48,

  /**
   * A reference to a set of overloaded functions or function templates
   * that has not yet been resolved to a specific function or function template.
   *
   * An overloaded declaration reference cursor occurs in C++ templates where
   * a dependent name refers to a function. For example:
   *
   * ```c++
   * template<typename T> void swap(T&, T&);
   *
   * struct X { ... };
   * void swap(X&, X&);
   *
   * template<typename T>
   * void reverse(T* first, T* last) {
   *   while (first < last - 1) {
   *     swap(*first, *--last);
   *     ++first;
   *   }
   * }
   *
   * struct Y { };
   * void swap(Y&, Y&);
   * ```
   *
   * Here, the identifier "swap" is associated with an overloaded declaration
   * reference. In the template definition, "swap" refers to either of the two
   * "swap" functions declared above, so both results will be available. At
   * instantiation time, "swap" may also refer to other functions found via
   * argument-dependent lookup (e.g., the "swap" function at the end of the
   * example).
   *
   * The functions {@link clang_getNumOverloadedDecls} and
   * {@link clang_getOverloadedDecl} can be used to retrieve the definitions
   * referenced by this cursor.
   */
  CXCursor_OverloadedDeclRef = 49,

  /**
   * A reference to a variable that occurs in some non-expression
   * context, e.g., a C++ lambda capture list.
   */
  CXCursor_VariableRef = 50,

  CXCursor_LastRef = CXCursor_VariableRef,

  /* Error conditions */
  CXCursor_FirstInvalid = 70,
  CXCursor_InvalidFile = 70,
  CXCursor_NoDeclFound = 71,
  CXCursor_NotImplemented = 72,
  CXCursor_InvalidCode = 73,
  CXCursor_LastInvalid = CXCursor_InvalidCode,

  /* Expressions */
  CXCursor_FirstExpr = 100,

  /**
   * An expression whose specific kind is not exposed via this
   * interface.
   *
   * Unexposed expressions have the same operations as any other kind
   * of expression; one can extract their location information,
   * spelling, children, etc. However, the specific kind of the
   * expression is not reported.
   */
  CXCursor_UnexposedExpr = 100,

  /**
   * An expression that refers to some value declaration, such
   * as a function, variable, or enumerator.
   */
  CXCursor_DeclRefExpr = 101,

  /**
   * An expression that refers to a member of a struct, union,
   * class, Objective-C class, etc.
   */
  CXCursor_MemberRefExpr = 102,

  /** An expression that calls a function. */
  CXCursor_CallExpr = 103,

  /** An expression that sends a message to an Objective-C
    object or class. */
  CXCursor_ObjCMessageExpr = 104,

  /** An expression that represents a block literal. */
  CXCursor_BlockExpr = 105,

  /** An integer literal.
   */
  CXCursor_IntegerLiteral = 106,

  /** A floating point number literal.
   */
  CXCursor_FloatingLiteral = 107,

  /** An imaginary number literal.
   */
  CXCursor_ImaginaryLiteral = 108,

  /** A string literal.
   */
  CXCursor_StringLiteral = 109,

  /** A character literal.
   */
  CXCursor_CharacterLiteral = 110,

  /** A parenthesized expression, e.g. "(1)".
   *
   * This AST node is only formed if full location information is requested.
   */
  CXCursor_ParenExpr = 111,

  /** This represents the unary-expression's (except sizeof and
   * alignof).
   */
  CXCursor_UnaryOperator = 112,

  /** [C99 6.5.2.1] Array Subscripting.
   */
  CXCursor_ArraySubscriptExpr = 113,

  /** A builtin binary operation expression such as "x + y" or
   * "x <= y".
   */
  CXCursor_BinaryOperator = 114,

  /** Compound assignment such as "+=".
   */
  CXCursor_CompoundAssignOperator = 115,

  /** The ?: ternary operator.
   */
  CXCursor_ConditionalOperator = 116,

  /** An explicit cast in C (C99 6.5.4) or a C-style cast in C++
   * (C++ [expr.cast]), which uses the syntax (Type)expr.
   *
   * For example: (int)f.
   */
  CXCursor_CStyleCastExpr = 117,

  /** [C99 6.5.2.5]
   */
  CXCursor_CompoundLiteralExpr = 118,

  /** Describes an C or C++ initializer list.
   */
  CXCursor_InitListExpr = 119,

  /** The GNU address of label extension, representing &&label.
   */
  CXCursor_AddrLabelExpr = 120,

  /** This is the GNU Statement Expression extension: ({int X=4; X;})
   */
  CXCursor_StmtExpr = 121,

  /** Represents a C11 generic selection.
   */
  CXCursor_GenericSelectionExpr = 122,

  /** Implements the GNU __null extension, which is a name for a null
   * pointer constant that has integral type (e.g., int or long) and is the same
   * size and alignment as a pointer.
   *
   * The __null extension is typically only used by system headers, which define
   * NULL as __null in C++ rather than using 0 (which is an integer that may not
   * match the size of a pointer).
   */
  CXCursor_GNUNullExpr = 123,

  /** C++'s static_cast<> expression.
   */
  CXCursor_CXXStaticCastExpr = 124,

  /** C++'s dynamic_cast<> expression.
   */
  CXCursor_CXXDynamicCastExpr = 125,

  /** C++'s reinterpret_cast<> expression.
   */
  CXCursor_CXXReinterpretCastExpr = 126,

  /** C++'s const_cast<> expression.
   */
  CXCursor_CXXConstCastExpr = 127,

  /** Represents an explicit C++ type conversion that uses "functional"
   * notion (C++ [expr.type.conv]).
   *
   * Example:
   * ```c++
   *   x = int(0.5);
   * ```
   */
  CXCursor_CXXFunctionalCastExpr = 128,

  /** A C++ typeid expression (C++ [expr.typeid]).
   */
  CXCursor_CXXTypeidExpr = 129,

  /** [C++ 2.13.5] C++ Boolean Literal.
   */
  CXCursor_CXXBoolLiteralExpr = 130,

  /** [C++0x 2.14.7] C++ Pointer Literal.
   */
  CXCursor_CXXNullPtrLiteralExpr = 131,

  /** Represents the "this" expression in C++
   */
  CXCursor_CXXThisExpr = 132,

  /** [C++ 15] C++ Throw Expression.
   *
   * This handles 'throw' and 'throw' assignment-expression. When
   * assignment-expression isn't present, Op will be null.
   */
  CXCursor_CXXThrowExpr = 133,

  /** A new expression for memory allocation and constructor calls, e.g:
   * "new CXXNewExpr(foo)".
   */
  CXCursor_CXXNewExpr = 134,

  /** A delete expression for memory deallocation and destructor calls,
   * e.g. "delete[] pArray".
   */
  CXCursor_CXXDeleteExpr = 135,

  /** A unary expression. (noexcept, sizeof, or other traits)
   */
  CXCursor_UnaryExpr = 136,

  /** An Objective-C string literal i.e. @"foo".
   */
  CXCursor_ObjCStringLiteral = 137,

  /** An Objective-C \@encode expression.
   */
  CXCursor_ObjCEncodeExpr = 138,

  /** An Objective-C \@selector expression.
   */
  CXCursor_ObjCSelectorExpr = 139,

  /** An Objective-C \@protocol expression.
   */
  CXCursor_ObjCProtocolExpr = 140,

  /** An Objective-C "bridged" cast expression, which casts between
   * Objective-C pointers and C pointers, transferring ownership in the process.
   *
   * ```c++
   *   NSString *str = (__bridge_transfer NSString *)CFCreateString();
   * ```
   */
  CXCursor_ObjCBridgedCastExpr = 141,

  /** Represents a C++0x pack expansion that produces a sequence of
   * expressions.
   *
   * A pack expansion expression contains a pattern (which itself is an
   * expression) followed by an ellipsis. For example:
   *
   * ```c++
   * template<typename F, typename ...Types>
   * void forward(F f, Types &&...args) {
   *  f(static_cast<Types&&>(args)...);
   * }
   * ```
   */
  CXCursor_PackExpansionExpr = 142,

  /** Represents an expression that computes the length of a parameter
   * pack.
   *
   * ```c++
   * template<typename ...Types>
   * struct count {
   *   static const unsigned value = sizeof...(Types);
   * };
   * ```
   */
  CXCursor_SizeOfPackExpr = 143,

  /** Represents a C++ lambda expression that produces a local function
   * object.
   *
   * ```c++
   * void abssort(float *x, unsigned N) {
   *   std::sort(x, x + N,
   *             [](float a, float b) {
   *               return std::abs(a) < std::abs(b);
   *             });
   * }
   * ```
   */
  CXCursor_LambdaExpr = 144,

  /** Objective-c Boolean Literal.
   */
  CXCursor_ObjCBoolLiteralExpr = 145,

  /** Represents the "self" expression in an Objective-C method.
   */
  CXCursor_ObjCSelfExpr = 146,

  /** OpenMP 5.0 [2.1.5, Array Section].
   */
  CXCursor_OMPArraySectionExpr = 147,

  /** Represents an @available(...) check.
   */
  CXCursor_ObjCAvailabilityCheckExpr = 148,

  /**
   * Fixed point literal
   */
  CXCursor_FixedPointLiteral = 149,

  /** OpenMP 5.0 [2.1.4, Array Shaping].
   */
  CXCursor_OMPArrayShapingExpr = 150,

  /**
   * OpenMP 5.0 [2.1.6 Iterators]
   */
  CXCursor_OMPIteratorExpr = 151,

  /** OpenCL's addrspace_cast<> expression.
   */
  CXCursor_CXXAddrspaceCastExpr = 152,

  /**
   * Expression that references a C++20 concept.
   */
  CXCursor_ConceptSpecializationExpr = 153,

  /**
   * Expression that references a C++20 concept.
   */
  CXCursor_RequiresExpr = 154,

  CXCursor_LastExpr = CXCursor_RequiresExpr,

  /** Statements
   */
  CXCursor_FirstStmt = 200,
  /**
   * A statement whose specific kind is not exposed via this
   * interface.
   *
   * Unexposed statements have the same operations as any other kind of
   * statement; one can extract their location information, spelling,
   * children, etc. However, the specific kind of the statement is not
   * reported.
   */
  CXCursor_UnexposedStmt = 200,

  /** A labelled statement in a function.
   *
   * This cursor kind is used to describe the "start_over:" label statement in
   * the following example:
   *
   * ```c++
   *   start_over:
   *     ++counter;
   * ```
   */
  CXCursor_LabelStmt = 201,

  /** A group of statements like { stmt stmt }.
   *
   * This cursor kind is used to describe compound statements, e.g. function
   * bodies.
   */
  CXCursor_CompoundStmt = 202,

  /** A case statement.
   */
  CXCursor_CaseStmt = 203,

  /** A default statement.
   */
  CXCursor_DefaultStmt = 204,

  /** An if statement
   */
  CXCursor_IfStmt = 205,

  /** A switch statement.
   */
  CXCursor_SwitchStmt = 206,

  /** A while statement.
   */
  CXCursor_WhileStmt = 207,

  /** A do statement.
   */
  CXCursor_DoStmt = 208,

  /** A for statement.
   */
  CXCursor_ForStmt = 209,

  /** A goto statement.
   */
  CXCursor_GotoStmt = 210,

  /** An indirect goto statement.
   */
  CXCursor_IndirectGotoStmt = 211,

  /** A continue statement.
   */
  CXCursor_ContinueStmt = 212,

  /** A break statement.
   */
  CXCursor_BreakStmt = 213,

  /** A return statement.
   */
  CXCursor_ReturnStmt = 214,

  /** A GCC inline assembly statement extension.
   */
  CXCursor_GCCAsmStmt = 215,
  CXCursor_AsmStmt = CXCursor_GCCAsmStmt,

  /** Objective-C's overall \@try-\@catch-\@finally statement.
   */
  CXCursor_ObjCAtTryStmt = 216,

  /** Objective-C's \@catch statement.
   */
  CXCursor_ObjCAtCatchStmt = 217,

  /** Objective-C's \@finally statement.
   */
  CXCursor_ObjCAtFinallyStmt = 218,

  /** Objective-C's \@throw statement.
   */
  CXCursor_ObjCAtThrowStmt = 219,

  /** Objective-C's \@synchronized statement.
   */
  CXCursor_ObjCAtSynchronizedStmt = 220,

  /** Objective-C's autorelease pool statement.
   */
  CXCursor_ObjCAutoreleasePoolStmt = 221,

  /** Objective-C's collection statement.
   */
  CXCursor_ObjCForCollectionStmt = 222,

  /** C++'s catch statement.
   */
  CXCursor_CXXCatchStmt = 223,

  /** C++'s try statement.
   */
  CXCursor_CXXTryStmt = 224,

  /** C++'s for (* : *) statement.
   */
  CXCursor_CXXForRangeStmt = 225,

  /** Windows Structured Exception Handling's try statement.
   */
  CXCursor_SEHTryStmt = 226,

  /** Windows Structured Exception Handling's except statement.
   */
  CXCursor_SEHExceptStmt = 227,

  /** Windows Structured Exception Handling's finally statement.
   */
  CXCursor_SEHFinallyStmt = 228,

  /** A MS inline assembly statement extension.
   */
  CXCursor_MSAsmStmt = 229,

  /** The null statement ";": C99 6.8.3p3.
   *
   * This cursor kind is used to describe the null statement.
   */
  CXCursor_NullStmt = 230,

  /** Adaptor class for mixing declarations with statements and
   * expressions.
   */
  CXCursor_DeclStmt = 231,

  /** OpenMP parallel directive.
   */
  CXCursor_OMPParallelDirective = 232,

  /** OpenMP SIMD directive.
   */
  CXCursor_OMPSimdDirective = 233,

  /** OpenMP for directive.
   */
  CXCursor_OMPForDirective = 234,

  /** OpenMP sections directive.
   */
  CXCursor_OMPSectionsDirective = 235,

  /** OpenMP section directive.
   */
  CXCursor_OMPSectionDirective = 236,

  /** OpenMP single directive.
   */
  CXCursor_OMPSingleDirective = 237,

  /** OpenMP parallel for directive.
   */
  CXCursor_OMPParallelForDirective = 238,

  /** OpenMP parallel sections directive.
   */
  CXCursor_OMPParallelSectionsDirective = 239,

  /** OpenMP task directive.
   */
  CXCursor_OMPTaskDirective = 240,

  /** OpenMP master directive.
   */
  CXCursor_OMPMasterDirective = 241,

  /** OpenMP critical directive.
   */
  CXCursor_OMPCriticalDirective = 242,

  /** OpenMP taskyield directive.
   */
  CXCursor_OMPTaskyieldDirective = 243,

  /** OpenMP barrier directive.
   */
  CXCursor_OMPBarrierDirective = 244,

  /** OpenMP taskwait directive.
   */
  CXCursor_OMPTaskwaitDirective = 245,

  /** OpenMP flush directive.
   */
  CXCursor_OMPFlushDirective = 246,

  /** Windows Structured Exception Handling's leave statement.
   */
  CXCursor_SEHLeaveStmt = 247,

  /** OpenMP ordered directive.
   */
  CXCursor_OMPOrderedDirective = 248,

  /** OpenMP atomic directive.
   */
  CXCursor_OMPAtomicDirective = 249,

  /** OpenMP for SIMD directive.
   */
  CXCursor_OMPForSimdDirective = 250,

  /** OpenMP parallel for SIMD directive.
   */
  CXCursor_OMPParallelForSimdDirective = 251,

  /** OpenMP target directive.
   */
  CXCursor_OMPTargetDirective = 252,

  /** OpenMP teams directive.
   */
  CXCursor_OMPTeamsDirective = 253,

  /** OpenMP taskgroup directive.
   */
  CXCursor_OMPTaskgroupDirective = 254,

  /** OpenMP cancellation point directive.
   */
  CXCursor_OMPCancellationPointDirective = 255,

  /** OpenMP cancel directive.
   */
  CXCursor_OMPCancelDirective = 256,

  /** OpenMP target data directive.
   */
  CXCursor_OMPTargetDataDirective = 257,

  /** OpenMP taskloop directive.
   */
  CXCursor_OMPTaskLoopDirective = 258,

  /** OpenMP taskloop simd directive.
   */
  CXCursor_OMPTaskLoopSimdDirective = 259,

  /** OpenMP distribute directive.
   */
  CXCursor_OMPDistributeDirective = 260,

  /** OpenMP target enter data directive.
   */
  CXCursor_OMPTargetEnterDataDirective = 261,

  /** OpenMP target exit data directive.
   */
  CXCursor_OMPTargetExitDataDirective = 262,

  /** OpenMP target parallel directive.
   */
  CXCursor_OMPTargetParallelDirective = 263,

  /** OpenMP target parallel for directive.
   */
  CXCursor_OMPTargetParallelForDirective = 264,

  /** OpenMP target update directive.
   */
  CXCursor_OMPTargetUpdateDirective = 265,

  /** OpenMP distribute parallel for directive.
   */
  CXCursor_OMPDistributeParallelForDirective = 266,

  /** OpenMP distribute parallel for simd directive.
   */
  CXCursor_OMPDistributeParallelForSimdDirective = 267,

  /** OpenMP distribute simd directive.
   */
  CXCursor_OMPDistributeSimdDirective = 268,

  /** OpenMP target parallel for simd directive.
   */
  CXCursor_OMPTargetParallelForSimdDirective = 269,

  /** OpenMP target simd directive.
   */
  CXCursor_OMPTargetSimdDirective = 270,

  /** OpenMP teams distribute directive.
   */
  CXCursor_OMPTeamsDistributeDirective = 271,

  /** OpenMP teams distribute simd directive.
   */
  CXCursor_OMPTeamsDistributeSimdDirective = 272,

  /** OpenMP teams distribute parallel for simd directive.
   */
  CXCursor_OMPTeamsDistributeParallelForSimdDirective = 273,

  /** OpenMP teams distribute parallel for directive.
   */
  CXCursor_OMPTeamsDistributeParallelForDirective = 274,

  /** OpenMP target teams directive.
   */
  CXCursor_OMPTargetTeamsDirective = 275,

  /** OpenMP target teams distribute directive.
   */
  CXCursor_OMPTargetTeamsDistributeDirective = 276,

  /** OpenMP target teams distribute parallel for directive.
   */
  CXCursor_OMPTargetTeamsDistributeParallelForDirective = 277,

  /** OpenMP target teams distribute parallel for simd directive.
   */
  CXCursor_OMPTargetTeamsDistributeParallelForSimdDirective = 278,

  /** OpenMP target teams distribute simd directive.
   */
  CXCursor_OMPTargetTeamsDistributeSimdDirective = 279,

  /** C++2a std::bit_cast expression.
   */
  CXCursor_BuiltinBitCastExpr = 280,

  /** OpenMP master taskloop directive.
   */
  CXCursor_OMPMasterTaskLoopDirective = 281,

  /** OpenMP parallel master taskloop directive.
   */
  CXCursor_OMPParallelMasterTaskLoopDirective = 282,

  /** OpenMP master taskloop simd directive.
   */
  CXCursor_OMPMasterTaskLoopSimdDirective = 283,

  /** OpenMP parallel master taskloop simd directive.
   */
  CXCursor_OMPParallelMasterTaskLoopSimdDirective = 284,

  /** OpenMP parallel master directive.
   */
  CXCursor_OMPParallelMasterDirective = 285,

  /** OpenMP depobj directive.
   */
  CXCursor_OMPDepobjDirective = 286,

  /** OpenMP scan directive.
   */
  CXCursor_OMPScanDirective = 287,

  /** OpenMP tile directive.
   */
  CXCursor_OMPTileDirective = 288,

  /** OpenMP canonical loop.
   */
  CXCursor_OMPCanonicalLoop = 289,

  /** OpenMP interop directive.
   */
  CXCursor_OMPInteropDirective = 290,

  /** OpenMP dispatch directive.
   */
  CXCursor_OMPDispatchDirective = 291,

  /** OpenMP masked directive.
   */
  CXCursor_OMPMaskedDirective = 292,

  /** OpenMP unroll directive.
   */
  CXCursor_OMPUnrollDirective = 293,

  /** OpenMP metadirective directive.
   */
  CXCursor_OMPMetaDirective = 294,

  /** OpenMP loop directive.
   */
  CXCursor_OMPGenericLoopDirective = 295,

  /** OpenMP teams loop directive.
   */
  CXCursor_OMPTeamsGenericLoopDirective = 296,

  /** OpenMP target teams loop directive.
   */
  CXCursor_OMPTargetTeamsGenericLoopDirective = 297,

  /** OpenMP parallel loop directive.
   */
  CXCursor_OMPParallelGenericLoopDirective = 298,

  /** OpenMP target parallel loop directive.
   */
  CXCursor_OMPTargetParallelGenericLoopDirective = 299,

  /** OpenMP parallel masked directive.
   */
  CXCursor_OMPParallelMaskedDirective = 300,

  /** OpenMP masked taskloop directive.
   */
  CXCursor_OMPMaskedTaskLoopDirective = 301,

  /** OpenMP masked taskloop simd directive.
   */
  CXCursor_OMPMaskedTaskLoopSimdDirective = 302,

  /** OpenMP parallel masked taskloop directive.
   */
  CXCursor_OMPParallelMaskedTaskLoopDirective = 303,

  /** OpenMP parallel masked taskloop simd directive.
   */
  CXCursor_OMPParallelMaskedTaskLoopSimdDirective = 304,

  /** OpenMP error directive.
   */
  CXCursor_OMPErrorDirective = 305,

  CXCursor_LastStmt = CXCursor_OMPErrorDirective,

  /**
   * Cursor that represents the translation unit itself.
   *
   * The translation unit cursor exists primarily to act as the root
   * cursor for traversing the contents of a translation unit.
   */
  CXCursor_TranslationUnit = 350,

  /* Attributes */
  CXCursor_FirstAttr = 400,
  /**
   * An attribute whose specific kind is not exposed via this
   * interface.
   */
  CXCursor_UnexposedAttr = 400,

  CXCursor_IBActionAttr = 401,
  CXCursor_IBOutletAttr = 402,
  CXCursor_IBOutletCollectionAttr = 403,
  CXCursor_CXXFinalAttr = 404,
  CXCursor_CXXOverrideAttr = 405,
  CXCursor_AnnotateAttr = 406,
  CXCursor_AsmLabelAttr = 407,
  CXCursor_PackedAttr = 408,
  CXCursor_PureAttr = 409,
  CXCursor_ConstAttr = 410,
  CXCursor_NoDuplicateAttr = 411,
  CXCursor_CUDAConstantAttr = 412,
  CXCursor_CUDADeviceAttr = 413,
  CXCursor_CUDAGlobalAttr = 414,
  CXCursor_CUDAHostAttr = 415,
  CXCursor_CUDASharedAttr = 416,
  CXCursor_VisibilityAttr = 417,
  CXCursor_DLLExport = 418,
  CXCursor_DLLImport = 419,
  CXCursor_NSReturnsRetained = 420,
  CXCursor_NSReturnsNotRetained = 421,
  CXCursor_NSReturnsAutoreleased = 422,
  CXCursor_NSConsumesSelf = 423,
  CXCursor_NSConsumed = 424,
  CXCursor_ObjCException = 425,
  CXCursor_ObjCNSObject = 426,
  CXCursor_ObjCIndependentClass = 427,
  CXCursor_ObjCPreciseLifetime = 428,
  CXCursor_ObjCReturnsInnerPointer = 429,
  CXCursor_ObjCRequiresSuper = 430,
  CXCursor_ObjCRootClass = 431,
  CXCursor_ObjCSubclassingRestricted = 432,
  CXCursor_ObjCExplicitProtocolImpl = 433,
  CXCursor_ObjCDesignatedInitializer = 434,
  CXCursor_ObjCRuntimeVisible = 435,
  CXCursor_ObjCBoxable = 436,
  CXCursor_FlagEnum = 437,
  CXCursor_ConvergentAttr = 438,
  CXCursor_WarnUnusedAttr = 439,
  CXCursor_WarnUnusedResultAttr = 440,
  CXCursor_AlignedAttr = 441,
  CXCursor_LastAttr = CXCursor_AlignedAttr,

  /* Preprocessing */
  CXCursor_PreprocessingDirective = 500,
  CXCursor_MacroDefinition = 501,
  CXCursor_MacroExpansion = 502,
  CXCursor_MacroInstantiation = CXCursor_MacroExpansion,
  CXCursor_InclusionDirective = 503,
  CXCursor_FirstPreprocessing = CXCursor_PreprocessingDirective,
  CXCursor_LastPreprocessing = CXCursor_InclusionDirective,

  /* Extra Declarations */
  /**
   * A module import declaration.
   */
  CXCursor_ModuleImportDecl = 600,
  CXCursor_TypeAliasTemplateDecl = 601,
  /**
   * A static_assert or _Static_assert node
   */
  CXCursor_StaticAssert = 602,
  /**
   * a friend declaration.
   */
  CXCursor_FriendDecl = 603,
  /**
   * a concept declaration.
   */
  CXCursor_ConceptDecl = 604,

  CXCursor_FirstExtraDecl = CXCursor_ModuleImportDecl,
  CXCursor_LastExtraDecl = CXCursor_ConceptDecl,

  /**
   * A code completion overload candidate.
   */
  CXCursor_OverloadCandidate = 700,
}
export const CXCursorKindT = "u32" as const;

/**
 * A cursor representing some element in the abstract syntax tree for
 * a translation unit.
 *
 * The cursor abstraction unifies the different kinds of entities in a
 * program--declaration, statements, expressions, references to declarations,
 * etc.--under a single "cursor" abstraction with a common set of operations.
 * Common operation for a cursor include: getting the physical location in
 * a source file where the cursor points, getting the name associated with a
 * cursor, and retrieving cursors for any child nodes of a particular cursor.
 *
 * Cursors can be produced in two specific ways.
 * clang_getTranslationUnitCursor() produces a cursor for a translation unit,
 * from which one can use clang_visitChildren() to explore the rest of the
 * translation unit. clang_getCursor() maps from a physical source location
 * to the entity that resides at that location, allowing one to map from the
 * source code into the AST.
 * ```cpp
 * typedef struct {
 *   enum CXCursorKind kind;
 *   int xdata;
 *   const void *data[3];
 * } CXCursor;
 * ```
 */
export const CXCursorT = {
  struct: [CXCursorKindT, int, "pointer", "pointer", "pointer"],
} as const;

/**
 * Describe the linkage of the entity referred to by a cursor.
 */
export enum CXLinkageKind {
  /** This value indicates that no linkage information is available
   * for a provided CXCursor. */
  CXLinkage_Invalid,
  /**
   * This is the linkage for variables, parameters, and so on that
   *  have automatic storage.  This covers normal (non-extern) local variables.
   */
  CXLinkage_NoLinkage,
  /** This is the linkage for static variables and static functions. */
  CXLinkage_Internal,
  /** This is the linkage for entities with external linkage that live
   * in C++ anonymous namespaces. */
  CXLinkage_UniqueExternal,
  /** This is the linkage for entities with true, external linkage. */
  CXLinkage_External,
}
export const CXLinkageKindT = "u8" as const;

export enum CXVisibilityKind {
  /** This value indicates that no visibility information is available
   * for a provided CXCursor. */
  CXVisibility_Invalid,

  /** Symbol not seen by the linker. */
  CXVisibility_Hidden,
  /** Symbol seen by the linker but resolves to a symbol inside this object. */
  CXVisibility_Protected,
  /** Symbol seen by the linker and acts like a normal symbol. */
  CXVisibility_Default,
}
export const CXVisibilityKindT = "u8" as const;

/**
 * Describe the "language" of the entity referred to by a cursor.
 */
export enum CXLanguageKind {
  CXLanguage_Invalid = 0,
  CXLanguage_C,
  CXLanguage_ObjC,
  CXLanguage_CPlusPlus,
}
export const CXLanguageKindT = "u8" as const;

/**
 * Describe the "thread-local storage (TLS) kind" of the declaration
 * referred to by a cursor.
 */
export enum CXTLSKind {
  CXTLS_None = 0,
  CXTLS_Dynamic,
  CXTLS_Static,
}
export const CXTLSKindT = "u8" as const;

/**
 * Describes the kind of type
 */
export enum CXTypeKind {
  /**
   * Represents an invalid type (e.g., where no type is available).
   */
  CXType_Invalid = 0,

  /**
   * A type whose specific kind is not exposed via this
   * interface.
   */
  CXType_Unexposed = 1,

  /* Builtin types */
  CXType_Void = 2,
  CXType_Bool = 3,
  CXType_Char_U = 4,
  CXType_UChar = 5,
  CXType_Char16 = 6,
  CXType_Char32 = 7,
  CXType_UShort = 8,
  CXType_UInt = 9,
  CXType_ULong = 10,
  CXType_ULongLong = 11,
  CXType_UInt128 = 12,
  CXType_Char_S = 13,
  CXType_SChar = 14,
  CXType_WChar = 15,
  CXType_Short = 16,
  CXType_Int = 17,
  CXType_Long = 18,
  CXType_LongLong = 19,
  CXType_Int128 = 20,
  CXType_Float = 21,
  CXType_Double = 22,
  CXType_LongDouble = 23,
  CXType_NullPtr = 24,
  CXType_Overload = 25,
  CXType_Dependent = 26,
  CXType_ObjCId = 27,
  CXType_ObjCClass = 28,
  CXType_ObjCSel = 29,
  CXType_Float128 = 30,
  CXType_Half = 31,
  CXType_Float16 = 32,
  CXType_ShortAccum = 33,
  CXType_Accum = 34,
  CXType_LongAccum = 35,
  CXType_UShortAccum = 36,
  CXType_UAccum = 37,
  CXType_ULongAccum = 38,
  CXType_BFloat16 = 39,
  CXType_Ibm128 = 40,
  CXType_FirstBuiltin = CXType_Void,
  CXType_LastBuiltin = CXType_Ibm128,

  CXType_Complex = 100,
  CXType_Pointer = 101,
  CXType_BlockPointer = 102,
  CXType_LValueReference = 103,
  CXType_RValueReference = 104,
  CXType_Record = 105,
  CXType_Enum = 106,
  CXType_Typedef = 107,
  CXType_ObjCInterface = 108,
  CXType_ObjCObjectPointer = 109,
  CXType_FunctionNoProto = 110,
  CXType_FunctionProto = 111,
  CXType_ConstantArray = 112,
  CXType_Vector = 113,
  CXType_IncompleteArray = 114,
  CXType_VariableArray = 115,
  CXType_DependentSizedArray = 116,
  CXType_MemberPointer = 117,
  CXType_Auto = 118,

  /**
   * Represents a type that was referred to using an elaborated type keyword.
   *
   * E.g., struct S, or via a qualified name, e.g., N::M::type, or both.
   */
  CXType_Elaborated = 119,

  /* OpenCL PipeType. */
  CXType_Pipe = 120,

  /* OpenCL builtin types. */
  CXType_OCLImage1dRO = 121,
  CXType_OCLImage1dArrayRO = 122,
  CXType_OCLImage1dBufferRO = 123,
  CXType_OCLImage2dRO = 124,
  CXType_OCLImage2dArrayRO = 125,
  CXType_OCLImage2dDepthRO = 126,
  CXType_OCLImage2dArrayDepthRO = 127,
  CXType_OCLImage2dMSAARO = 128,
  CXType_OCLImage2dArrayMSAARO = 129,
  CXType_OCLImage2dMSAADepthRO = 130,
  CXType_OCLImage2dArrayMSAADepthRO = 131,
  CXType_OCLImage3dRO = 132,
  CXType_OCLImage1dWO = 133,
  CXType_OCLImage1dArrayWO = 134,
  CXType_OCLImage1dBufferWO = 135,
  CXType_OCLImage2dWO = 136,
  CXType_OCLImage2dArrayWO = 137,
  CXType_OCLImage2dDepthWO = 138,
  CXType_OCLImage2dArrayDepthWO = 139,
  CXType_OCLImage2dMSAAWO = 140,
  CXType_OCLImage2dArrayMSAAWO = 141,
  CXType_OCLImage2dMSAADepthWO = 142,
  CXType_OCLImage2dArrayMSAADepthWO = 143,
  CXType_OCLImage3dWO = 144,
  CXType_OCLImage1dRW = 145,
  CXType_OCLImage1dArrayRW = 146,
  CXType_OCLImage1dBufferRW = 147,
  CXType_OCLImage2dRW = 148,
  CXType_OCLImage2dArrayRW = 149,
  CXType_OCLImage2dDepthRW = 150,
  CXType_OCLImage2dArrayDepthRW = 151,
  CXType_OCLImage2dMSAARW = 152,
  CXType_OCLImage2dArrayMSAARW = 153,
  CXType_OCLImage2dMSAADepthRW = 154,
  CXType_OCLImage2dArrayMSAADepthRW = 155,
  CXType_OCLImage3dRW = 156,
  CXType_OCLSampler = 157,
  CXType_OCLEvent = 158,
  CXType_OCLQueue = 159,
  CXType_OCLReserveID = 160,

  CXType_ObjCObject = 161,
  CXType_ObjCTypeParam = 162,
  CXType_Attributed = 163,

  CXType_OCLIntelSubgroupAVCMcePayload = 164,
  CXType_OCLIntelSubgroupAVCImePayload = 165,
  CXType_OCLIntelSubgroupAVCRefPayload = 166,
  CXType_OCLIntelSubgroupAVCSicPayload = 167,
  CXType_OCLIntelSubgroupAVCMceResult = 168,
  CXType_OCLIntelSubgroupAVCImeResult = 169,
  CXType_OCLIntelSubgroupAVCRefResult = 170,
  CXType_OCLIntelSubgroupAVCSicResult = 171,
  CXType_OCLIntelSubgroupAVCImeResultSingleRefStreamout = 172,
  CXType_OCLIntelSubgroupAVCImeResultDualRefStreamout = 173,
  CXType_OCLIntelSubgroupAVCImeSingleRefStreamin = 174,

  CXType_OCLIntelSubgroupAVCImeDualRefStreamin = 175,

  CXType_ExtVector = 176,
  CXType_Atomic = 177,
  CXType_BTFTagAttributed = 178,
}
export const CXTypeKindT = "u32" as const;

/**
 * Describes the calling convention of a function type
 */
export enum CXCallingConv {
  CXCallingConv_Default = 0,
  CXCallingConv_C = 1,
  CXCallingConv_X86StdCall = 2,
  CXCallingConv_X86FastCall = 3,
  CXCallingConv_X86ThisCall = 4,
  CXCallingConv_X86Pascal = 5,
  CXCallingConv_AAPCS = 6,
  CXCallingConv_AAPCS_VFP = 7,
  CXCallingConv_X86RegCall = 8,
  CXCallingConv_IntelOclBicc = 9,
  CXCallingConv_Win64 = 10,
  /* Alias for compatibility with older versions of API. */
  CXCallingConv_X86_64Win64 = CXCallingConv_Win64,
  CXCallingConv_X86_64SysV = 11,
  CXCallingConv_X86VectorCall = 12,
  CXCallingConv_Swift = 13,
  CXCallingConv_PreserveMost = 14,
  CXCallingConv_PreserveAll = 15,
  CXCallingConv_AArch64VectorCall = 16,
  CXCallingConv_SwiftAsync = 17,
  CXCallingConv_AArch64SVEPCS = 18,

  CXCallingConv_Invalid = 100,
  CXCallingConv_Unexposed = 200,
}
export const CXCallingConvT = "u32" as const;

/**
 * The type of an element in the abstract syntax tree.
 *
 * typedef struct {
 *   enum CXTypeKind kind;
 *   void *data[2];
 * } CXType;
 */
export const CXTypeT = {
  struct: [CXTypeKindT, "pointer", "pointer"],
} as const;

/**
 * Describes the kind of a template argument.
 *
 * See the definition of llvm::clang::TemplateArgument::ArgKind for full
 * element descriptions.
 */
export enum CXTemplateArgumentKind {
  CXTemplateArgumentKind_Null,
  CXTemplateArgumentKind_Type,
  CXTemplateArgumentKind_Declaration,
  CXTemplateArgumentKind_NullPtr,
  CXTemplateArgumentKind_Integral,
  CXTemplateArgumentKind_Template,
  CXTemplateArgumentKind_TemplateExpansion,
  CXTemplateArgumentKind_Expression,
  CXTemplateArgumentKind_Pack,
  /** Indicates an error case, preventing the kind from being deduced. */
  CXTemplateArgumentKind_Invalid,
}
export const CXTemplateArgumentKindT = "u8" as const;

export enum CXTypeNullabilityKind {
  /**
   * Values of this type can never be null.
   */
  CXTypeNullability_NonNull = 0,
  /**
   * Values of this type can be null.
   */
  CXTypeNullability_Nullable = 1,
  /**
   * Whether values of this type can be null is (explicitly)
   * unspecified. This captures a (fairly rare) case where we
   * can't conclude anything about the nullability of the type even
   * though it has been considered.
   */
  CXTypeNullability_Unspecified = 2,
  /**
   * Nullability is not applicable to this type.
   */
  CXTypeNullability_Invalid = 3,

  /**
   * Generally behaves like Nullable, except when used in a block parameter that
   * was imported into a swift async method. There, swift will assume that the
   * parameter can get null even if no error occurred. _Nullable parameters are
   * assumed to only get null on error.
   */
  CXTypeNullability_NullableResult = 4,
}
export const CXTypeNullabilityKindT = "u8" as const;

/**
 * List the possible error codes for {@link clang_Type_getSizeOf},
 *   {@link clang_Type_getAlignOf}, {@link clang_Type_getOffsetOf} and
 *   {@link clang_Cursor_getOffsetOf}.
 *
 * A value of this enumeration type can be returned if the target type is not
 * a valid argument to sizeof, alignof or offsetof.
 */
export enum CXTypeLayoutError {
  /**
   * Type is of kind CXType_Invalid.
   */
  CXTypeLayoutError_Invalid = -1,
  /**
   * The type is an incomplete Type.
   */
  CXTypeLayoutError_Incomplete = -2,
  /**
   * The type is a dependent Type.
   */
  CXTypeLayoutError_Dependent = -3,
  /**
   * The type is not a constant size type.
   */
  CXTypeLayoutError_NotConstantSize = -4,
  /**
   * The Field name is not valid for this record.
   */
  CXTypeLayoutError_InvalidFieldName = -5,
  /**
   * The type is undeduced.
   */
  CXTypeLayoutError_Undeduced = -6,
}

export enum CXRefQualifierKindA {
  /** No ref-qualifier was provided. */
  CXRefQualifier_None = 0,
  /** An lvalue ref-qualifier was provided (`$1`. */
  CXRefQualifier_LValue,
  /** An rvalue ref-qualifier was provided (`$1`. */
  CXRefQualifier_RValue,
}
export const CXRefQualifierKind = "u8" as const;

/**
 * Represents the C++ access control level to a base class for a
 * cursor with kind CX_CXXBaseSpecifier.
 */
export enum CX_CXXAccessSpecifier {
  CX_CXXInvalidAccessSpecifier,
  CX_CXXPublic,
  CX_CXXProtected,
  CX_CXXPrivate,
}
export const CX_CXXAccessSpecifierT = "u8" as const;

/**
 * Represents the storage classes as declared in the source. CX_SC_Invalid
 * was added for the case that the passed cursor in not a declaration.
 */
export enum CX_StorageClass {
  CX_SC_Invalid,
  CX_SC_None,
  CX_SC_Extern,
  CX_SC_Static,
  CX_SC_PrivateExtern,
  CX_SC_OpenCLWorkGroupLocal,
  CX_SC_Auto,
  CX_SC_Register,
}
export const CX_StorageClassT = "u8" as const;

/**
 * Describes how the traversal of the children of a particular
 * cursor should proceed after visiting a particular child cursor.
 *
 * A value of this enumeration type should be returned by each
 * {@link CXCursorVisitor} to indicate how clang_visitChildren() proceed.
 */
export enum CXChildVisitResult {
  /**
   * Terminates the cursor traversal.
   */
  CXChildVisit_Break,
  /**
   * Continues the cursor traversal with the next sibling of
   * the cursor just visited, without visiting its children.
   */
  CXChildVisit_Continue,
  /**
   * Recursively traverse the children of this cursor, using
   * the same visitor and client data.
   */
  CXChildVisit_Recurse,
}

/**
 * Property attributes for a {@link CXCursor_ObjCPropertyDecl}.
 */
export enum CXObjCPropertyAttrKind {
  CXObjCPropertyAttr_noattr = 0x00,
  CXObjCPropertyAttr_readonly = 0x01,
  CXObjCPropertyAttr_getter = 0x02,
  CXObjCPropertyAttr_assign = 0x04,
  CXObjCPropertyAttr_readwrite = 0x08,
  CXObjCPropertyAttr_retain = 0x10,
  CXObjCPropertyAttr_copy = 0x20,
  CXObjCPropertyAttr_nonatomic = 0x40,
  CXObjCPropertyAttr_setter = 0x80,
  CXObjCPropertyAttr_atomic = 0x100,
  CXObjCPropertyAttr_weak = 0x200,
  CXObjCPropertyAttr_strong = 0x400,
  CXObjCPropertyAttr_unsafe_unretained = 0x800,
  CXObjCPropertyAttr_class = 0x1000,
}

/**
 * 'Qualifiers' written next to the return and parameter types in
 * Objective-C method declarations.
 */
export enum CXObjCDeclQualifierKind {
  CXObjCDeclQualifier_None = 0x0,
  CXObjCDeclQualifier_In = 0x1,
  CXObjCDeclQualifier_Inout = 0x2,
  CXObjCDeclQualifier_Out = 0x4,
  CXObjCDeclQualifier_Bycopy = 0x8,
  CXObjCDeclQualifier_Byref = 0x10,
  CXObjCDeclQualifier_Oneway = 0x20,
}

export enum CXNameRefFlags {
  /**
   * Include the nested-name-specifier, e.g. Foo:: in x.Foo::y, in the
   * range.
   */
  CXNameRange_WantQualifier = 0x1,

  /**
   * Include the explicit template arguments, e.g. <int> in x.f<int>,
   * in the range.
   */
  CXNameRange_WantTemplateArgs = 0x2,

  /**
   * If the name is non-contiguous, return the full spanning range.
   *
   * Non-contiguous names occur in Objective-C when a selector with two or more
   * parameters is used, or in C++ when using an operator:
   * ```c++
   * [object doSomething:here withValue:there]; // Objective-C
   * return some_vector[1]; // C++
   * ```
   */
  CXNameRange_WantSinglePiece = 0x4,
}

/**
 * Token extraction and manipulation
 *
 * The routines in this group provide access to the tokens within a
 * translation unit, along with a semantic mapping of those tokens to
 * their corresponding cursors.
 */

/**
 * Describes a kind of token.
 */
export enum CXTokenKind {
  /**
   * A token that contains some kind of punctuation.
   */
  CXToken_Punctuation,

  /**
   * A language keyword.
   */
  CXToken_Keyword,

  /**
   * An identifier (that is not a keyword).
   */
  CXToken_Identifier,

  /**
   * A numeric, string, or character literal.
   */
  CXToken_Literal,

  /**
   * A comment.
   */
  CXToken_Comment,
}
export const CXTokenKindT = "u8" as const;

/**
 * Describes a single preprocessing token.
 * ```cpp
 * typedef struct {
 *   unsigned int_data[4];
 *   void *ptr_data;
 * } CXToken;
 * ```
 */
export const CXToken = {
  struct: [unsigned, unsigned, unsigned, unsigned, "pointer"],
} as const;

/**
 * A semantic string that describes a code-completion result.
 *
 * A semantic string that describes the formatting of a code-completion
 * result as a single "template" of text that should be inserted into the
 * source buffer when a particular code-completion result is selected.
 * Each semantic string is made up of some number of "chunks", each of which
 * contains some text along with a description of what that text means, e.g.,
 * the name of the entity being referenced, whether the text chunk is part of
 * the template, or whether it is a "placeholder" that the user should replace
 * with actual code,of a specific kind. See {@link CXCompletionChunkKind} for a
 * description of the different kinds of chunks.
 */
export const CXCompletionString = "pointer" as const;

/**
 * A single result of code completion.
 * ```cpp
 * typedef struct {
 *   // The kind of entity that this completion refers to.
 *   //
 *   // The cursor kind will be a macro, keyword, or a declaration (one of the
 *   // *Decl cursor kinds), describing the entity that the completion is
 *   // referring to.
 *   //
 *   // \todo In the future, we would like to provide a full cursor, to allow
 *   // the client to extract additional information from declaration.
 *   enum CXCursorKind CursorKind;
 *   // The code-completion string that describes how to insert this
 *   // code-completion result into the editing buffer.
 *   CXCompletionString CompletionString;
 * } CXCompletionResult;
 * ```
 */
export const CXCompletionResult = {
  struct: [int, CXCompletionString],
} as const;

/**
 * Describes a single piece of text within a code-completion string.
 *
 * Each "chunk" within a code-completion string ({@link CXCompletionString}) is
 * either a piece of text with a specific "kind" that describes how that text
 * should be interpreted by the client or is another completion string.
 */
export enum CXCompletionChunkKind {
  /**
   * A code-completion string that describes "optional" text that
   * could be a part of the template (but is not required).
   *
   * The Optional chunk is the only kind of chunk that has a code-completion
   * string for its representation, which is accessible via
   * {@link clang_getCompletionChunkCompletionString}(). The code-completion string
   * describes an additional part of the template that is completely optional.
   * For example, optional chunks can be used to describe the placeholders for
   * arguments that match up with defaulted function parameters, e.g. given:
   *
   * ```c++
   * void f(int x, float y = 3.14, double z = 2.71828);
   * ```
   *
   * The code-completion string for this function would contain:
   *   - a TypedText chunk for "f".
   *   - a LeftParen chunk for "(".
   *   - a Placeholder chunk for "int x"
   *   - an Optional chunk containing the remaining defaulted arguments, e.g.,
   *       - a Comma chunk for ","
   *       - a Placeholder chunk for "float y"
   *       - an Optional chunk containing the last defaulted argument:
   *           - a Comma chunk for ","
   *           - a Placeholder chunk for "double z"
   *   - a RightParen chunk for ")"
   *
   * There are many ways to handle Optional chunks. Two simple approaches are:
   *   - Completely ignore optional chunks, in which case the template for the
   *     function "f" would only include the first parameter ("int x").
   *   - Fully expand all optional chunks, in which case the template for the
   *     function "f" would have all of the parameters.
   */
  CXCompletionChunk_Optional,
  /**
   * Text that a user would be expected to type to get this
   * code-completion result.
   *
   * There will be exactly one "typed text" chunk in a semantic string, which
   * will typically provide the spelling of a keyword or the name of a
   * declaration that could be used at the current code point. Clients are
   * expected to filter the code-completion results based on the text in this
   * chunk.
   */
  CXCompletionChunk_TypedText,
  /**
   * Text that should be inserted as part of a code-completion result.
   *
   * A "text" chunk represents text that is part of the template to be
   * inserted into user code should this particular code-completion result
   * be selected.
   */
  CXCompletionChunk_Text,
  /**
   * Placeholder text that should be replaced by the user.
   *
   * A "placeholder" chunk marks a place where the user should insert text
   * into the code-completion template. For example, placeholders might mark
   * the function parameters for a function declaration, to indicate that the
   * user should provide arguments for each of those parameters. The actual
   * text in a placeholder is a suggestion for the text to display before
   * the user replaces the placeholder with real code.
   */
  CXCompletionChunk_Placeholder,
  /**
   * Informative text that should be displayed but never inserted as
   * part of the template.
   *
   * An "informative" chunk contains annotations that can be displayed to
   * help the user decide whether a particular code-completion result is the
   * right option, but which is not part of the actual template to be inserted
   * by code completion.
   */
  CXCompletionChunk_Informative,
  /**
   * Text that describes the current parameter when code-completion is
   * referring to function call, message send, or template specialization.
   *
   * A "current parameter" chunk occurs when code-completion is providing
   * information about a parameter corresponding to the argument at the
   * code-completion point. For example, given a function
   *
   * ```c++
   * int add(int x, int y);
   * ```
   *
   * and the source code `$1`, where the code-completion point is after the
   * "(", the code-completion string will contain a "current parameter" chunk
   * for "int x", indicating that the current argument will initialize that
   * parameter. After typing further, to `$1`, (where the code-completion
   * point is after the ","), the code-completion string will contain a
   * "current parameter" chunk to "int y".
   */
  CXCompletionChunk_CurrentParameter,
  /**
   * A left parenthesis ('('), used to initiate a function call or
   * signal the beginning of a function parameter list.
   */
  CXCompletionChunk_LeftParen,
  /**
   * A right parenthesis (')'), used to finish a function call or
   * signal the end of a function parameter list.
   */
  CXCompletionChunk_RightParen,
  /**
   * A left bracket ('[').
   */
  CXCompletionChunk_LeftBracket,
  /**
   * A right bracket (']').
   */
  CXCompletionChunk_RightBracket,
  /**
   * A left brace ('{').
   */
  CXCompletionChunk_LeftBrace,
  /**
   * A right brace ('}').
   */
  CXCompletionChunk_RightBrace,
  /**
   * A left angle bracket ('<').
   */
  CXCompletionChunk_LeftAngle,
  /**
   * A right angle bracket ('>').
   */
  CXCompletionChunk_RightAngle,
  /**
   * A comma separator (',').
   */
  CXCompletionChunk_Comma,
  /**
   * Text that specifies the result type of a given result.
   *
   * This special kind of informative chunk is not meant to be inserted into
   * the text buffer. Rather, it is meant to illustrate the type that an
   * expression using the given completion string would have.
   */
  CXCompletionChunk_ResultType,
  /**
   * A colon (':').
   */
  CXCompletionChunk_Colon,
  /**
   * A semicolon (';').
   */
  CXCompletionChunk_SemiColon,
  /**
   * An '=' sign.
   */
  CXCompletionChunk_Equal,
  /**
   * Horizontal space (' ').
   */
  CXCompletionChunk_HorizontalSpace,
  /**
   * Vertical space ('\\n'), after which it is generally a good idea to
   * perform indentation.
   */
  CXCompletionChunk_VerticalSpace,
}
export const CXCompletionChunkKindT = "u8" as const;

/**
 * Flags that can be passed to {@link clang_codeCompleteAt}() to
 * modify its behavior.
 *
 * The enumerators in this enumeration can be bitwise-OR'd together to
 * provide multiple options to {@link clang_codeCompleteAt}().
 */
export enum CXCodeComplete_Flags {
  /**
   * Whether to include macros within the set of code
   * completions returned.
   */
  CXCodeComplete_IncludeMacros = 0x01,

  /**
   * Whether to include code patterns for language constructs
   * within the set of code completions, e.g., for loops.
   */
  CXCodeComplete_IncludeCodePatterns = 0x02,

  /**
   * Whether to include brief documentation within the set of code
   * completions returned.
   */
  CXCodeComplete_IncludeBriefComments = 0x04,

  /**
   * Whether to speed up completion by omitting top- or namespace-level entities
   * defined in the preamble. There's no guarantee any particular entity is
   * omitted. This may be useful if the headers are indexed externally.
   */
  CXCodeComplete_SkipPreamble = 0x08,

  /**
   * Whether to include completions with small
   * fix-its, e.g. change '.' to '->' on member access, etc.
   */
  CXCodeComplete_IncludeCompletionsWithFixIts = 0x10,
}

/**
 * Bits that represent the context under which completion is occurring.
 *
 * The enumerators in this enumeration may be bitwise-OR'd together if multiple
 * contexts are occurring simultaneously.
 */
export enum CXCompletionContext {
  /**
   * The context for completions is unexposed, as only Clang results
   * should be included. (This is equivalent to having no context bits set.)
   */
  CXCompletionContext_Unexposed = 0,

  /**
   * Completions for any possible type should be included in the results.
   */
  CXCompletionContext_AnyType = 1 << 0,

  /**
   * Completions for any possible value (variables, function calls, etc.)
   * should be included in the results.
   */
  CXCompletionContext_AnyValue = 1 << 1,
  /**
   * Completions for values that resolve to an Objective-C object should
   * be included in the results.
   */
  CXCompletionContext_ObjCObjectValue = 1 << 2,
  /**
   * Completions for values that resolve to an Objective-C selector
   * should be included in the results.
   */
  CXCompletionContext_ObjCSelectorValue = 1 << 3,
  /**
   * Completions for values that resolve to a C++ class type should be
   * included in the results.
   */
  CXCompletionContext_CXXClassTypeValue = 1 << 4,

  /**
   * Completions for fields of the member being accessed using the dot
   * operator should be included in the results.
   */
  CXCompletionContext_DotMemberAccess = 1 << 5,
  /**
   * Completions for fields of the member being accessed using the arrow
   * operator should be included in the results.
   */
  CXCompletionContext_ArrowMemberAccess = 1 << 6,
  /**
   * Completions for properties of the Objective-C object being accessed
   * using the dot operator should be included in the results.
   */
  CXCompletionContext_ObjCPropertyAccess = 1 << 7,

  /**
   * Completions for enum tags should be included in the results.
   */
  CXCompletionContext_EnumTag = 1 << 8,
  /**
   * Completions for union tags should be included in the results.
   */
  CXCompletionContext_UnionTag = 1 << 9,
  /**
   * Completions for struct tags should be included in the results.
   */
  CXCompletionContext_StructTag = 1 << 10,

  /**
   * Completions for C++ class names should be included in the results.
   */
  CXCompletionContext_ClassTag = 1 << 11,
  /**
   * Completions for C++ namespaces and namespace aliases should be
   * included in the results.
   */
  CXCompletionContext_Namespace = 1 << 12,
  /**
   * Completions for C++ nested name specifiers should be included in
   * the results.
   */
  CXCompletionContext_NestedNameSpecifier = 1 << 13,

  /**
   * Completions for Objective-C interfaces (classes) should be included
   * in the results.
   */
  CXCompletionContext_ObjCInterface = 1 << 14,
  /**
   * Completions for Objective-C protocols should be included in
   * the results.
   */
  CXCompletionContext_ObjCProtocol = 1 << 15,
  /**
   * Completions for Objective-C categories should be included in
   * the results.
   */
  CXCompletionContext_ObjCCategory = 1 << 16,
  /**
   * Completions for Objective-C instance messages should be included
   * in the results.
   */
  CXCompletionContext_ObjCInstanceMessage = 1 << 17,
  /**
   * Completions for Objective-C class messages should be included in
   * the results.
   */
  CXCompletionContext_ObjCClassMessage = 1 << 18,
  /**
   * Completions for Objective-C selector names should be included in
   * the results.
   */
  CXCompletionContext_ObjCSelectorName = 1 << 19,

  /**
   * Completions for preprocessor macro names should be included in
   * the results.
   */
  CXCompletionContext_MacroName = 1 << 20,

  /**
   * Natural language completions should be included in the results.
   */
  CXCompletionContext_NaturalLanguage = 1 << 21,

  /**
   * #include file completions should be included in the results.
   */
  CXCompletionContext_IncludedFile = 1 << 22,

  /**
   * The current context is unknown, so set all contexts.
   */
  CXCompletionContext_Unknown = ((1 << 23) - 1),
}

export enum CXEvalResultKind {
  CXEval_Int = 1,
  CXEval_Float = 2,
  CXEval_ObjCStrLiteral = 3,
  CXEval_StrLiteral = 4,
  CXEval_CFStr = 5,
  CXEval_Other = 6,

  CXEval_UnExposed = 0,
}
export const CXEvalResultKindT = "u8" as const;

/**
 * Evaluation result of a cursor
 */
export const CXEvalResult = "pointer" as const;

export enum CXVisitorResult {
  CXVisit_Break,
  CXVisit_Continue,
}

/**
 * ```cpp
 * typedef struct CXCursorAndRangeVisitor {
 *   void *context;
 *   enum CXVisitorResult (*visit)(void *context, CXCursor, CXSourceRange);
 * } CXCursorAndRangeVisitor;
 * ```
 */
export const CXCursorAndRangeVisitor = {
  struct: ["pointer", "function"],
} as const;

export enum CXResult {
  /**
   * Function returned successfully.
   */
  CXResult_Success = 0,
  /**
   * One of the parameters was invalid for the function.
   */
  CXResult_Invalid = 1,
  /**
   * The function was terminated by a callback (e.g. it returned
   * CXVisit_Break)
   */
  CXResult_VisitBreak = 2,
}
export const CXResultT = "u8" as const;

/**
 * The client's data object that is associated with a CXFile.
 */
export const CXIdxClientFile = "pointer" as const;

/**
 * The client's data object that is associated with a semantic entity.
 */
export const CXIdxClientEntity = "pointer" as const;

/**
 * The client's data object that is associated with a semantic container
 * of entities.
 */
export const CXIdxClientContainer = "pointer" as const;

/**
 * The client's data object that is associated with an AST file (PCH
 * or module).
 */
export const CXIdxClientASTFile = "pointer" as const;

/**
 * Source location passed to index callbacks.
 * ```cpp
 * typedef struct {
 *   void *ptr_data[2];
 *   unsigned int_data;
 * } CXIdxLoc;
 * ```
 */
export const CXIdxLoc = { struct: ["pointer", "pointer", unsigned] } as const;

/**
 * Data for ppIncludedFile callback.
 * ```cpp
 * typedef struct {
 *    // Location of '#' in the \#include/\#import directive.
 *   CXIdxLoc hashLoc;
 *    // Filename as written in the \#include/\#import directive.
 *   const char *filename;
 *    // The actual file that the \#include/\#import directive resolved to.
 *   CXFile file;
 *   int isImport;
 *   int isAngled;
 *    // Non-zero if the directive was automatically turned into a module
 *    // import.
 *   int isModuleImport;
 * } CXIdxIncludedFileInfo;
 * ```
 */
export const CXIdxIncludedFileInfo = {
  struct: [CXIdxLoc, constCharPtr, CXFileT, int, int, int],
} as const;

/**
 * Data for IndexerCallbacks#importedASTFile.
 * ```cpp
 * typedef struct {
 *    // Top level AST file containing the imported PCH, module or submodule.
 *   CXFile file;
 *    // The imported module or NULL if the AST file is a PCH.
 *   CXModule module;
 *    // Location where the file is imported. Applicable only for modules.
 *   CXIdxLoc loc;
 *    // Non-zero if an inclusion directive was automatically turned into
 *    // a module import. Applicable only for modules.
 *   int isImplicit;
 * } CXIdxImportedASTFileInfo;
 * ```
 */
export const CXIdxImportedASTFileInfo = "buffer" as const;

export enum CXIdxEntityKind {
  CXIdxEntity_Unexposed = 0,
  CXIdxEntity_Typedef = 1,
  CXIdxEntity_Function = 2,
  CXIdxEntity_Variable = 3,
  CXIdxEntity_Field = 4,
  CXIdxEntity_EnumConstant = 5,

  CXIdxEntity_ObjCClass = 6,
  CXIdxEntity_ObjCProtocol = 7,
  CXIdxEntity_ObjCCategory = 8,

  CXIdxEntity_ObjCInstanceMethod = 9,
  CXIdxEntity_ObjCClassMethod = 10,
  CXIdxEntity_ObjCProperty = 11,
  CXIdxEntity_ObjCIvar = 12,

  CXIdxEntity_Enum = 13,
  CXIdxEntity_Struct = 14,
  CXIdxEntity_Union = 15,

  CXIdxEntity_CXXClass = 16,
  CXIdxEntity_CXXNamespace = 17,
  CXIdxEntity_CXXNamespaceAlias = 18,
  CXIdxEntity_CXXStaticVariable = 19,
  CXIdxEntity_CXXStaticMethod = 20,
  CXIdxEntity_CXXInstanceMethod = 21,
  CXIdxEntity_CXXConstructor = 22,
  CXIdxEntity_CXXDestructor = 23,
  CXIdxEntity_CXXConversionFunction = 24,
  CXIdxEntity_CXXTypeAlias = 25,
  CXIdxEntity_CXXInterface = 26,
  CXIdxEntity_CXXConcept = 27,
}
export const CXIdxEntityKindT = "u8" as const;

export enum CXIdxEntityLanguage {
  CXIdxEntityLang_None = 0,
  CXIdxEntityLang_C = 1,
  CXIdxEntityLang_ObjC = 2,
  CXIdxEntityLang_CXX = 3,
  CXIdxEntityLang_Swift = 4,
}
export const CXIdxEntityLanguageT = "u8" as const;

/**
 * Extra C++ template information for an entity. This can apply to:
 * CXIdxEntity_Function
 * CXIdxEntity_CXXClass
 * CXIdxEntity_CXXStaticMethod
 * CXIdxEntity_CXXInstanceMethod
 * CXIdxEntity_CXXConstructor
 * CXIdxEntity_CXXConversionFunction
 * CXIdxEntity_CXXTypeAlias
 */
export enum CXIdxEntityCXXTemplateKind {
  CXIdxEntity_NonTemplate = 0,
  CXIdxEntity_Template = 1,
  CXIdxEntity_TemplatePartialSpecialization = 2,
  CXIdxEntity_TemplateSpecialization = 3,
}
export const CXIdxEntityCXXTemplateKindT = "u8" as const;

export enum CXIdxAttrKind {
  CXIdxAttr_Unexposed = 0,
  CXIdxAttr_IBAction = 1,
  CXIdxAttr_IBOutlet = 2,
  CXIdxAttr_IBOutletCollection = 3,
}
export const CXIdxAttrKindT = "u8" as const;

/**
 * ```cpp
 * typedef struct {
 *   CXIdxAttrKind kind;
 *   CXCursor cursor;
 *   CXIdxLoc loc;
 * } CXIdxAttrInfo;
 * ```
 */
export const CXIdxAttrInfoT = "buffer" as const;

/**
 * ```cpp
 * typedef struct {
 *   CXIdxEntityKind kind;
 *   CXIdxEntityCXXTemplateKind templateKind;
 *   CXIdxEntityLanguage lang;
 *   const char *name;
 *   const char *USR;
 *   CXCursor cursor;
 *   const CXIdxAttrInfo *const *attributes;
 *   unsigned numAttributes;
 * } CXIdxEntityInfo;
 * ```
 */
export const CXIdxEntityInfoT = "buffer" as const;

/**
 * ```cpp
 * typedef struct {
 *   CXCursor cursor;
 * } CXIdxContainerInfo;
 * ```
 */
export const CXIdxContainerInfoT = "buffer" as const;

/**
 * ```cpp
 * typedef struct {
 *   const CXIdxAttrInfo *attrInfo;
 *   const CXIdxEntityInfo *objcClass;
 *   CXCursor classCursor;
 *   CXIdxLoc classLoc;
 * } CXIdxIBOutletCollectionAttrInfo;
 * ```
 */
export const CXIdxIBOutletCollectionAttrInfoT = "buffer" as const;

export enum CXIdxDeclInfoFlags {
  CXIdxDeclFlag_Skipped = 0x1,
}
export const CXIdxDeclInfoFlagsT = "u8" as const;

/**
 * ```cpp
 * typedef struct {
 *   const CXIdxEntityInfo *entityInfo;
 *   CXCursor cursor;
 *   CXIdxLoc loc;
 *   const CXIdxContainerInfo *semanticContainer;
 *    // Generally same as #semanticContainer but can be different in
 *    // cases like out-of-line C++ member functions.
 *   const CXIdxContainerInfo *lexicalContainer;
 *   int isRedeclaration;
 *   int isDefinition;
 *   int isContainer;
 *   const CXIdxContainerInfo *declAsContainer;
 *    // Whether the declaration exists in code or was created implicitly
 *    // by the compiler, e.g. implicit Objective-C methods for properties.
 *   int isImplicit;
 *   const CXIdxAttrInfo *const *attributes;
 *   unsigned numAttributes;
 *
 *   unsigned flags;
 * } CXIdxDeclInfo;
 * ```
 */
export const CXIdxDeclInfoT = "buffer" as const;

export enum CXIdxObjCContainerKind {
  CXIdxObjCContainer_ForwardRef = 0,
  CXIdxObjCContainer_Interface = 1,
  CXIdxObjCContainer_Implementation = 2,
}
export const CXIdxObjCContainerKindT = "u8" as const;

/**
 * ```cpp
 * typedef struct {
 *   const CXIdxDeclInfo *declInfo;
 *   CXIdxObjCContainerKind kind;
 * } CXIdxObjCContainerDeclInfo;
 * ```
 */
export const CXIdxObjCContainerDeclInfoT = "buffer" as const;

/**
 * ```cpp
 * typedef struct {
 *   const CXIdxEntityInfo *base;
 *   CXCursor cursor;
 *   CXIdxLoc loc;
 * } CXIdxBaseClassInfo;
 * ```
 */
export const CXIdxBaseClassInfoT = "buffer" as const;

/**
 * ```cpp
 * typedef struct {
 *   const CXIdxEntityInfo *protocol;
 *   CXCursor cursor;
 *   CXIdxLoc loc;
 * } CXIdxObjCProtocolRefInfo;
 * ```
 */
export const CXIdxObjCProtocolRefInfoT = "buffer" as const;

/**
 * ```cpp
 * typedef struct {
 *   const CXIdxObjCProtocolRefInfo *const *protocols;
 *   unsigned numProtocols;
 * } CXIdxObjCProtocolRefListInfo;
 * ```
 */
export const CXIdxObjCProtocolRefListInfoT = "buffer" as const;

/**
 * ```cpp
 * typedef struct {
 *   const CXIdxObjCContainerDeclInfo *containerInfo;
 *   const CXIdxBaseClassInfo *superInfo;
 *   const CXIdxObjCProtocolRefListInfo *protocols;
 * } CXIdxObjCInterfaceDeclInfo;
 * ```
 */
export const CXIdxObjCInterfaceDeclInfo = "buffer" as const;

/**
 * ```cpp
 * typedef struct {
 *   const CXIdxObjCContainerDeclInfo *containerInfo;
 *   const CXIdxEntityInfo *objcClass;
 *   CXCursor classCursor;
 *   CXIdxLoc classLoc;
 *   const CXIdxObjCProtocolRefListInfo *protocols;
 * } CXIdxObjCCategoryDeclInfo;
 * ```
 */
export const CXIdxObjCCategoryDeclInfo = "buffer" as const;

/**
 * ```cpp
 * typedef struct {
 *   const CXIdxDeclInfo *declInfo;
 *   const CXIdxEntityInfo *getter;
 *   const CXIdxEntityInfo *setter;
 * } CXIdxObjCPropertyDeclInfo;
 * ```
 */
export const CXIdxObjCPropertyDeclInfoT = "buffer" as const;

/**
 * ```cpp
 * typedef struct {
 *   const CXIdxDeclInfo *declInfo;
 *   const CXIdxBaseClassInfo *const *bases;
 *   unsigned numBases;
 * } CXIdxCXXClassDeclInfo;
 * ```
 */
export const CXIdxCXXClassDeclInfoT = "buffer" as const;

/**
 * Data for IndexerCallbacks#indexEntityReference.
 *
 * This may be deprecated in a future version as this duplicates
 * the {@link CXSymbolRole_Implicit} bit in {@link CXSymbolRole}.
 */
export enum CXIdxEntityRefKind {
  /**
   * The entity is referenced directly in user's code.
   */
  CXIdxEntityRef_Direct = 1,
  /**
   * An implicit reference, e.g. a reference of an Objective-C method
   * via the dot syntax.
   */
  CXIdxEntityRef_Implicit = 2,
}

/**
 * Roles that are attributed to symbol occurrences.
 *
 * Internal: this currently mirrors low 9 bits of clang::index::SymbolRole with
 * higher bits zeroed. These high bits may be exposed in the future.
 */
export enum CXSymbolRole {
  CXSymbolRole_None = 0,
  CXSymbolRole_Declaration = 1 << 0,
  CXSymbolRole_Definition = 1 << 1,
  CXSymbolRole_Reference = 1 << 2,
  CXSymbolRole_Read = 1 << 3,
  CXSymbolRole_Write = 1 << 4,
  CXSymbolRole_Call = 1 << 5,
  CXSymbolRole_Dynamic = 1 << 6,
  CXSymbolRole_AddressOf = 1 << 7,
  CXSymbolRole_Implicit = 1 << 8,
}

/**
 * Data for IndexerCallbacks#indexEntityReference.
 * ```cpp
 * typedef struct {
 *   CXIdxEntityRefKind kind;
 *    // Reference cursor.
 *   CXCursor cursor;
 *   CXIdxLoc loc;
 *    // The entity that gets referenced.
 *   const CXIdxEntityInfo *referencedEntity;
 *    // Immediate "parent" of the reference. For example:
 *    //
 *    // \code
 *    // Foo *var;
 *    // \endcode
 *    //
 *    // The parent of reference of type 'Foo' is the variable 'var'.
 *    // For references inside statement bodies of functions/methods,
 *    // the parentEntity will be the function/method.
 *   const CXIdxEntityInfo *parentEntity;
 *    // Lexical container context of the reference.
 *   const CXIdxContainerInfo *container;
 *    // Sets of symbol roles of the reference.
 *   CXSymbolRole role;
 * } CXIdxEntityRefInfo;
 * ```
 */
export const CXIdxEntityRefInfo = "buffer" as const;

/**
 * A group of callbacks used by #clang_indexSourceFile and
 * #clang_indexTranslationUnit.
 * ```cpp
 * typedef struct {
 *    // Called periodically to check whether indexing should be aborted.
 *    // Should return 0 to continue, and non-zero to abort.
 *   int (*abortQuery)(CXClientData client_data, void *reserved);
 *
 *    // Called at the end of indexing; passes the complete diagnostic set.
 *   void (*diagnostic)(CXClientData client_data, CXDiagnosticSet, void *reserved);
 *
 *   CXIdxClientFile (*enteredMainFile)(CXClientData client_data, CXFile mainFile, void *reserved);
 *
 *    // Called when a file gets \#included/\#imported.
 *   CXIdxClientFile (*ppIncludedFile)(CXClientData client_data, const CXIdxIncludedFileInfo *);
 *
 *    // Called when a AST file (PCH or module) gets imported.
 *    *
 *    // AST files will not get indexed (there will not be callbacks to index all
 *    // the entities in an AST file). The recommended action is that, if the AST
 *    // file is not already indexed, to initiate a new indexing job specific to
 *    // the AST file.
 *   CXIdxClientASTFile (*importedASTFile)(CXClientData client_data, const CXIdxImportedASTFileInfo *);
 *
 *    // Called at the beginning of indexing a translation unit.
 *   CXIdxClientContainer (*startedTranslationUnit)(CXClientData client_data, void *reserved);
 *
 *   void (*indexDeclaration)(CXClientData client_data, const CXIdxDeclInfo *);
 *
 *    // Called to index a reference of an entity.
 *   void (*indexEntityReference)(CXClientData client_data, const CXIdxEntityRefInfo *);
 *
 * } IndexerCallbacks;
 * ```
 */
export const IndexerCallbacks = "buffer" as const;

export enum CXIndexOptFlags {
  /**
   * Used to indicate that no special indexing options are needed.
   */
  CXIndexOpt_None = 0x0,

  /**
   * Used to indicate that IndexerCallbacks#indexEntityReference should
   * be invoked for only one reference of an entity per source file that does
   * not also include a declaration/definition of the entity.
   */
  CXIndexOpt_SuppressRedundantRefs = 0x1,

  /**
   * Function-local symbols should be indexed. If this is not set
   * function-local symbols will be ignored.
   */
  CXIndexOpt_IndexFunctionLocalSymbols = 0x2,

  /**
   * Implicit function/class template instantiations should be indexed.
   * If this is not set, implicit instantiations will be ignored.
   */
  CXIndexOpt_IndexImplicitTemplateInstantiations = 0x4,

  /**
   * Suppress all compiler warnings when parsing for indexing.
   */
  CXIndexOpt_SuppressWarnings = 0x8,

  /**
   * Skip a function/method body that was already parsed during an
   * indexing session associated with a {@link CXIndexAction} object.
   * Bodies in system headers are always skipped.
   */
  CXIndexOpt_SkipParsedBodiesInSession = 0x10,
}

/**
 * Visitor invoked for each cursor found by a traversal.
 *
 * This visitor function will be invoked for each cursor found by
 * clang_visitCursorChildren(). Its first argument is the cursor being
 * visited, its second argument is the parent visitor for that cursor,
 * and its third argument is the client data provided to
 * clang_visitCursorChildren().
 *
 * The visitor should return one of the {@link CXChildVisitResult} values
 * to direct clang_visitCursorChildren().
 *
 * ```cpp
 *  typedef enum CXChildVisitResult (*CXCursorVisitor)(CXCursor cursor,
 *    CXCursor parent,
 *    CXClientData client_data);
 * ```
 *
 * @param cursor {@link CXCursor}
 * @param parent {@link CXCursor}
 * @param client_data {@link CXClientData}
 * @returns CXChildVisitResult {@link CXChildVisitResult}
 */
export const CXCursorVisitorCallbackDefinition = {
  parameters: [CXCursorT, CXCursorT, CXClientDataT],
  result: "u8",
} as const;
export const CXCursorVisitor = "function" as const;

//  #ifdef __has_feature
//  #if __has_feature(blocks)
/**
 * Visitor invoked for each cursor found by a traversal.
 *
 * This visitor block will be invoked for each cursor found by
 * clang_visitChildrenWithBlock(). Its first argument is the cursor being
 * visited, its second argument is the parent visitor for that cursor.
 *
 * The visitor should return one of the {@link CXChildVisitResult} values
 * to direct clang_visitChildrenWithBlock().
 * ```cpp
 * typedef enum CXChildVisitResult (^CXCursorVisitorBlock)(CXCursor cursor,
 *                                                         CXCursor parent);
 * ```
 *
 * @param cursor {@link CXCursor}
 * @param parent {@link CXCursor}
 * @returns CXChildVisitResult {@link CXChildVisitResult}
 */
export const CXCursorVisitorBlockCallbackDefinition = {
  parameters: [CXCursorT, CXCursorT],
  result: "u8",
} as const;
export const CXCursorVisitorBlock = "function" as const;

/**
 * Properties for the printing policy.
 *
 * See `$1` for more information.
 */
export enum CXPrintingPolicyProperty {
  CXPrintingPolicy_Indentation,
  CXPrintingPolicy_SuppressSpecifiers,
  CXPrintingPolicy_SuppressTagKeyword,
  CXPrintingPolicy_IncludeTagDefinition,
  CXPrintingPolicy_SuppressScope,
  CXPrintingPolicy_SuppressUnwrittenScope,
  CXPrintingPolicy_SuppressInitializers,
  CXPrintingPolicy_ConstantArraySizeAsWritten,
  CXPrintingPolicy_AnonymousTagLocations,
  CXPrintingPolicy_SuppressStrongLifetime,
  CXPrintingPolicy_SuppressLifetimeQualifiers,
  CXPrintingPolicy_SuppressTemplateArgsInCXXConstructors,
  CXPrintingPolicy_Bool,
  CXPrintingPolicy_Restrict,
  CXPrintingPolicy_Alignof,
  CXPrintingPolicy_UnderscoreAlignof,
  CXPrintingPolicy_UseVoidForZeroParams,
  CXPrintingPolicy_TerseOutput,
  CXPrintingPolicy_PolishForDeclaration,
  CXPrintingPolicy_Half,
  CXPrintingPolicy_MSWChar,
  CXPrintingPolicy_IncludeNewlines,
  CXPrintingPolicy_MSVCFormatting,
  CXPrintingPolicy_ConstantsAsWritten,
  CXPrintingPolicy_SuppressImplicitBase,
  CXPrintingPolicy_FullyQualifiedName,

  CXPrintingPolicy_LastProperty = CXPrintingPolicy_FullyQualifiedName,
}
export const CXPrintingPolicyPropertyT = "i32" as const;

/**
 * Opaque pointer representing a policy that controls pretty printing
 * for {@link clang_getCursorPrettyPrinted}.
 */
export const CXPrintingPolicyT = "pointer" as const;

/**
 * Module introspection
 *
 * The functions in this group provide access to information about modules.
 */
export const CXModule = "pointer" as const;

/**
 * Contains the results of code-completion.
 *
 * This data structure contains the results of code completion, as
 * produced by {@link clang_codeCompleteAt}(). Its contents must be freed by
 * {@link clang_disposeCodeCompleteResults}.
 * ```cpp
 * typedef struct {
 *    // The code-completion results.
 *   CXCompletionResult *Results;
 *
 *    // The number of code-completion results stored in the
 *    // `$1` array.
 *   unsigned NumResults;
 * } CXCodeCompleteResults;
 * ```
 */
export const CXCodeCompleteResults = {
  struct: [ptr(CXCompletionResult), unsigned],
} as const;

/**
 * Visitor invoked for each file in a translation unit
 *        (used with clang_getInclusions()).
 *
 * This visitor function will be invoked by clang_getInclusions() for each
 * file included (either at the top-level or by \#include directives) within
 * a translation unit.  The first argument is the file being included, and
 * the second and third arguments provide the inclusion stack.  The
 * array is sorted in order of immediate inclusion.  For example,
 * the first element refers to the location that included 'included_file'.
 * @param included_file {@link CXFile}
 * @param inclusion_stack (`CXSourceLocation *`) {@link CXSourceLocation}
 * @param include_len `unsigned`
 * @param client_data {@link CXClientData}
 *
 * ```cpp
 * typedef void (*CXInclusionVisitor)(CXFile included_file, CXSourceLocation *inclusion_stack, unsigned include_len, CXClientData client_data);
 * ```
 */
export const CXInclusionVisitorCallbackDefinition = {
  parameters: [],
  result: "void",
} as const;
export const CXInclusionVisitor = "function" as const;

/**
 * A remapping of original source files and their translated files.
 */
export const CXRemapping = "pointer" as const;

//  #ifdef __has_feature
//  #if __has_feature(blocks)

/**
 * ```cpp
 * typedef enum CXVisitorResult (^CXCursorAndRangeVisitorBlock)(CXCursor, CXSourceRange);
 * ```
 */
export const CXCursorAndRangeVisitorBlock = "buffer" as const;

//  #endif
//  #endif

/**
 * An indexing action/session, to be applied to one or multiple
 * translation units.
 */
export const CXIndexAction = "pointer" as const;

/**
 * Visitor invoked for each field found by a traversal.
 *
 * This visitor function will be invoked for each field found by
 * {@link clang_Type_visitFields}. Its first argument is the cursor being
 * visited, its second argument is the client data provided to
 * {@link clang_Type_visitFields}.
 *
 * The visitor should return one of the {@link CXVisitorResult} values
 * to direct {@link clang_Type_visitFields}.
 */
//typedef enum CXVisitorResult (*CXFieldVisitor)(CXCursor C, CXClientData client_data);
export const CXFieldVisitor = "function" as const;

/**
 * Identifies a specific source location within a translation
 * unit.
 *
 * Use clang_getExpansionLocation() or clang_getSpellingLocation()
 * to map a source location to a particular file, line, and column.
 *
 * ```cpp
 * typedef struct {
 *   const void *ptr_data[2];
 *   unsigned int_data;
 * } CXSourceLocation;
 * ```
 */
export const CXSourceLocationT = {
  struct: ["pointer", "pointer", unsigned],
} as const;

/**
 * Identifies a half-open character range in the source code.
 *
 * Use clang_getRangeStart() and clang_getRangeEnd() to retrieve the
 * starting and end locations from a source range, respectively.
 * ```cpp
 * typedef struct {
 *   const void *ptr_data[2];
 *   unsigned begin_int_data;
 *   unsigned end_int_data;
 * } CXSourceRange;
 * ```
 */
export const CXSourceRangeT = {
  struct: ["pointer", "pointer", unsigned, unsigned],
} as const;

/**
 * ```cpp
 * typedef struct {
 *   CXString *Strings;
 *   unsigned Count;
 * } CXStringSet;
 * ```
 *
 * Used always as a pointer.
 */
export const CXStringSetT = "pointer" as const;

/**
 * A parsed comment.
 * ```cpp
 * typedef struct {
 *   const void *ASTNode;
 *   CXTranslationUnit TranslationUnit;
 * } CXComment;
 * ```
 */
export const CXComment = { struct: ["pointer", CXTranslationUnitT] } as const;

/**
 * Describes the type of the comment AST node ({@link CXComment}).  A comment
 * node can be considered block content (e. g., paragraph), inline content
 * (plain text) or neither (the root AST node).
 */
export const enum CXCommentKind {
  /**
   * Null comment.  No AST node is constructed at the requested location
   * because there is no text or a syntax error.
   */
  CXComment_Null = 0,

  /**
   * Plain text.  Inline content.
   */
  CXComment_Text = 1,

  /**
   * A command with word-like arguments that is considered inline content.
   *
   * For example: \`$1`.
   */
  CXComment_InlineCommand = 2,

  /**
   * HTML start tag with attributes (name-value pairs).  Considered
   * inline content.
   *
   * For example:
   * \verbatim
   * <br> <br /> <a href="http://example.org/">
   * \endverbatim
   */
  CXComment_HTMLStartTag = 3,

  /**
   * HTML end tag.  Considered inline content.
   *
   * For example:
   * \verbatim
   * </a>
   * \endverbatim
   */
  CXComment_HTMLEndTag = 4,

  /**
   * A paragraph, contains inline comment.  The paragraph itself is
   * block content.
   */
  CXComment_Paragraph = 5,

  /**
   * A command that has zero or more word-like arguments (number of
   * word-like arguments depends on command name) and a paragraph as an
   * argument.  Block command is block content.
   *
   * Paragraph argument is also a child of the block command.
   *
   * For example: \has 0 word-like arguments and a paragraph argument.
   *
   * AST nodes of special kinds that parser knows about (e. g., \\param
   * command) have their own node kinds.
   */
  CXComment_BlockCommand = 6,

  /**
   * A \\param or \\arg command that describes the function parameter
   * (name, passing direction, description).
   *
   * For example: \\param [in] ParamName description.
   */
  CXComment_ParamCommand = 7,

  /**
   * A \\tparam command that describes a template parameter (name and
   * description).
   *
   * For example: \\tparam T description.
   */
  CXComment_TParamCommand = 8,

  /**
   * A verbatim block command (e. g., preformatted code).  Verbatim
   * block has an opening and a closing command and contains multiple lines of
   * text ({@link CXComment_VerbatimBlockLine} child nodes).
   *
   * For example:
   * \\verbatim
   * aaa
   * \\endverbatim
   */
  CXComment_VerbatimBlockCommand = 9,

  /**
   * A line of text that is contained within a
   * CXComment_VerbatimBlockCommand node.
   */
  CXComment_VerbatimBlockLine = 10,

  /**
   * A verbatim line command.  Verbatim line has an opening command,
   * a single line of text (up to the newline after the opening command) and
   * has no closing command.
   */
  CXComment_VerbatimLine = 11,

  /**
   * A full comment attached to a declaration, contains block content.
   */
  CXComment_FullComment = 12,
}
/**
 * {@link CXCommentKind}
 *
 * Describes the type of the comment AST node ({@link CXComment}).  A comment
 * node can be considered block content (e. g., paragraph), inline content
 * (plain text) or neither (the root AST node).
 */
export const CXCommentKindT = "u8" as const;

/**
 * The most appropriate rendering mode for an inline command, chosen on
 * command semantics in Doxygen.
 */
export const enum CXCommentInlineCommandRenderKind {
  /**
   * Command argument should be rendered in a normal font.
   */
  CXCommentInlineCommandRenderKind_Normal,

  /**
   * Command argument should be rendered in a bold font.
   */
  CXCommentInlineCommandRenderKind_Bold,

  /**
   * Command argument should be rendered in a monospaced font.
   */
  CXCommentInlineCommandRenderKind_Monospaced,

  /**
   * Command argument should be rendered emphasized (typically italic
   * font).
   */
  CXCommentInlineCommandRenderKind_Emphasized,

  /**
   * Command argument should not be rendered (since it only defines an anchor).
   */
  CXCommentInlineCommandRenderKind_Anchor,
}
/**
 * {@link CXCommentInlineCommandRenderKind}
 * The most appropriate rendering mode for an inline command, chosen on
 * command semantics in Doxygen.
 */
export const CXCommentInlineCommandRenderKindT = "u8" as const;

/**
 * Describes parameter passing direction for \\param or \\arg command.
 */
export enum CXCommentParamPassDirection {
  /**
   * The parameter is an input parameter.
   */
  CXCommentParamPassDirection_In,

  /**
   * The parameter is an output parameter.
   */
  CXCommentParamPassDirection_Out,

  /**
   * The parameter is an input and output parameter.
   */
  CXCommentParamPassDirection_InOut,
}
/**
 * {@link CXCommentParamPassDirection}
 *
 * Describes parameter passing direction for `param` or `arg` command.
 */
export const CXCommentParamPassDirectionT = "u8" as const;

/**
 * Identifies an array of ranges.
 * ```cpp
 * typedef struct {
 *   // The number of ranges in the `ranges` array.
 *   unsigned count;
 *   // An array of `CXSourceRanges`.
 *   CXSourceRange *ranges;
 * } CXSourceRangeList;
 * ```
 */
export const CXSourceRangeList = {
  struct: [unsigned, ptr(CXSourceRangeT)],
} as const;

/**
 * A compilation database holds all information used to compile files in a
 * project. For each file in the database, it can be queried for the working
 * directory or the command line used for the compiler invocation.
 *
 * Must be freed by {@link clang_CompilationDatabase_dispose}
 */
export const CXCompilationDatabase = "pointer";

/**
 * Contains the results of a search in the compilation database
 *
 * When searching for the compile command for a file, the compilation db can
 * return several commands, as the file may have been compiled with
 * different options in different places of the project. This choice of compile
 * commands is wrapped in this opaque data structure. It must be freed by
 * {@link clang_CompileCommands_dispose}.
 */
export const CXCompileCommands = "pointer";

/**
 * Represents the command line invocation to compile a specific file.
 */
export const CXCompileCommand = "pointer";

/**
 * Error codes for Compilation Database
 */
export enum CXCompilationDatabase_Error {
  /**
   * No error occurred
   */
  CXCompilationDatabase_NoError = 0,

  /**
   * Database can not be loaded
   */
  CXCompilationDatabase_CanNotLoadDatabase = 1,
}
export const CXCompilationDatabase_ErrorT = "u8" as const;

export const CXRewriter = "pointer" as const;
