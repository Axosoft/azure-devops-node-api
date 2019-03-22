﻿/*
 * ---------------------------------------------------------
 * Copyright(C) Microsoft Corporation. All rights reserved.
 * ---------------------------------------------------------
 *
 * ---------------------------------------------------------
 * Generated file, DO NOT EDIT
 * ---------------------------------------------------------
 */

"use strict";

import SystemData = require("../interfaces/common/SystemDataInterfaces");
import SystemInterfaces = require("../interfaces/common/System");
import TfsCoreInterfaces = require("../interfaces/CoreInterfaces");
import VSSInterfaces = require("../interfaces/common/VSSInterfaces");


export interface AbortTestRunRequest {
    options?: number;
    projectName?: string;
    revision?: number;
    testRunId?: number;
}

export interface AfnStrip {
    /**
     * Auxiliary Url to be consumed by MTM
     */
    auxiliaryUrl?: string;
    /**
     * Creation date of the AfnStrip
     */
    creationDate?: Date;
    /**
     * File name of the attachment created
     */
    fileName?: string;
    /**
     * ID of AfnStrip. This is same as the attachment ID.
     */
    id?: number;
    /**
     * Project identifier which contains AfnStrip
     */
    project?: string;
    /**
     * Service in which this attachment is stored in
     */
    storedIn?: string;
    /**
     * Afn strip stream.
     */
    stream?: string;
    /**
     * ID of the testcase.
     */
    testCaseId?: number;
    /**
     * Backing test result id.
     */
    testResultId?: number;
    /**
     * Backing test run id.
     */
    testRunId?: number;
    /**
     * Byte stream (uncompressed) length of Afn strip.
     */
    unCompressedStreamLength?: number;
    /**
     * Url of the attachment created.
     */
    url?: string;
}

export interface AggregatedDataForResultTrend {
    /**
     * This is tests execution duration.
     */
    duration?: any;
    resultsByOutcome?: { [key: number] : AggregatedResultsByOutcome; };
    runSummaryByState?: { [key: number] : AggregatedRunsByState; };
    testResultsContext: TestResultsContext;
    totalTests?: number;
}

export interface AggregatedResultsAnalysis {
    duration?: any;
    notReportedResultsByOutcome?: { [key: number] : AggregatedResultsByOutcome; };
    previousContext?: TestResultsContext;
    resultsByOutcome?: { [key: number] : AggregatedResultsByOutcome; };
    resultsDifference?: AggregatedResultsDifference;
    runSummaryByOutcome?: { [key: number] : AggregatedRunsByOutcome; };
    runSummaryByState?: { [key: number] : AggregatedRunsByState; };
    totalTests?: number;
}

export interface AggregatedResultsByOutcome {
    count?: number;
    duration?: any;
    groupByField?: string;
    groupByValue?: any;
    outcome?: TestOutcome;
    rerunResultCount?: number;
}

export interface AggregatedResultsDifference {
    increaseInDuration?: any;
    increaseInFailures?: number;
    increaseInOtherTests?: number;
    increaseInPassedTests?: number;
    increaseInTotalTests?: number;
}

export interface AggregatedRunsByOutcome {
    outcome?: TestRunOutcome;
    runsCount?: number;
}

export interface AggregatedRunsByState {
    resultsByOutcome?: { [key: number] : AggregatedResultsByOutcome; };
    runsCount?: number;
    state?: TestRunState;
}

/**
 * The types of test attachments.
 */
export enum AttachmentType {
    GeneralAttachment = 0,
    AfnStrip = 1,
    BugFilingData = 2,
    CodeCoverage = 3,
    IntermediateCollectorData = 4,
    RunConfig = 5,
    TestImpactDetails = 6,
    TmiTestRunDeploymentFiles = 7,
    TmiTestRunReverseDeploymentFiles = 8,
    TmiTestResultDetail = 9,
    TmiTestRunSummary = 10,
    ConsoleLog = 11,
}

export interface BatchResponse {
    error: string;
    responses?: Response[];
    status: string;
}

export interface BuildConfiguration {
    branchName?: string;
    buildDefinitionId?: number;
    buildSystem?: string;
    creationDate?: Date;
    flavor?: string;
    id?: number;
    number?: string;
    platform?: string;
    project?: ShallowReference;
    repositoryGuid?: string;
    repositoryId?: number;
    repositoryType?: string;
    sourceVersion?: string;
    targetBranchName?: string;
    uri?: string;
}

/**
 * Build Coverage Detail
 */
export interface BuildCoverage {
    /**
     * Code Coverage File Url
     */
    codeCoverageFileUrl?: string;
    /**
     * Build Configuration
     */
    configuration?: BuildConfiguration;
    /**
     * Last Error
     */
    lastError?: string;
    /**
     * List of Modules
     */
    modules?: ModuleCoverage[];
    /**
     * State
     */
    state?: string;
}

/**
 * Reference to a build.
 */
export interface BuildReference {
    /**
     * Branch name.
     */
    branchName?: string;
    /**
     * Build system.
     */
    buildSystem?: string;
    /**
     * Build Definition ID.
     */
    definitionId?: number;
    /**
     * Build ID.
     */
    id?: number;
    /**
     * Build Number.
     */
    number?: string;
    /**
     * Repository ID.
     */
    repositoryId?: string;
    /**
     * Build URI.
     */
    uri?: string;
}

export interface BuildReference2 {
    branchName?: string;
    buildConfigurationId?: number;
    buildDefinitionId?: number;
    buildDeleted?: boolean;
    buildFlavor?: string;
    buildId?: number;
    buildNumber?: string;
    buildPlatform?: string;
    buildSystem?: string;
    buildUri?: string;
    coverageId?: number;
    createdDate?: Date;
    projectId?: string;
    repoId?: string;
    repoType?: string;
    sourceVersion?: string;
}

export interface BulkResultUpdateRequest {
    projectName?: string;
    requests?: ResultUpdateRequest[];
}

/**
 * Detail About Clone Operation.
 */
export interface CloneOperationInformation {
    /**
     * Clone Statistics
     */
    cloneStatistics?: CloneStatistics;
    /**
     * If the operation is complete, the DateTime of completion. If operation is not complete, this is DateTime.MaxValue
     */
    completionDate?: Date;
    /**
     * DateTime when the operation was started
     */
    creationDate?: Date;
    /**
     * Shallow reference of the destination
     */
    destinationObject?: ShallowReference;
    /**
     * Shallow reference of the destination
     */
    destinationPlan?: ShallowReference;
    /**
     * Shallow reference of the destination
     */
    destinationProject?: ShallowReference;
    /**
     * If the operation has Failed, Message contains the reason for failure. Null otherwise.
     */
    message?: string;
    /**
     * The ID of the operation
     */
    opId?: number;
    /**
     * The type of the object generated as a result of the Clone operation
     */
    resultObjectType?: ResultObjectType;
    /**
     * Shallow reference of the source
     */
    sourceObject?: ShallowReference;
    /**
     * Shallow reference of the source
     */
    sourcePlan?: ShallowReference;
    /**
     * Shallow reference of the source
     */
    sourceProject?: ShallowReference;
    /**
     * Current state of the operation. When State reaches Suceeded or Failed, the operation is complete
     */
    state?: CloneOperationState;
    /**
     * Url for geting the clone information
     */
    url?: string;
}

/**
 * Enum of type Clone Operation Type.
 */
export enum CloneOperationState {
    /**
     * value for Failed State
     */
    Failed = 2,
    /**
     * value for Inprogress state
     */
    InProgress = 1,
    /**
     * Value for Queued State
     */
    Queued = 0,
    /**
     * value for Success state
     */
    Succeeded = 3,
}

export interface CloneOptions {
    /**
     * If set to true requirements will be cloned
     */
    cloneRequirements?: boolean;
    /**
     * copy all suites from a source plan
     */
    copyAllSuites?: boolean;
    /**
     * copy ancestor hieracrchy
     */
    copyAncestorHierarchy?: boolean;
    /**
     * Name of the workitem type of the clone
     */
    destinationWorkItemType?: string;
    /**
     * Key value pairs where the key value is overridden by the value.
     */
    overrideParameters?: { [key: string] : string; };
    /**
     * Comment on the link that will link the new clone  test case to the original Set null for no comment
     */
    relatedLinkComment?: string;
}

export interface CloneStatistics {
    /**
     * Number of Requirments cloned so far.
     */
    clonedRequirementsCount?: number;
    /**
     * Number of shared steps cloned so far.
     */
    clonedSharedStepsCount?: number;
    /**
     * Number of test cases cloned so far
     */
    clonedTestCasesCount?: number;
    /**
     * Total number of requirements to be cloned
     */
    totalRequirementsCount?: number;
    /**
     * Total number of test cases to be cloned
     */
    totalTestCasesCount?: number;
}

/**
 * Represents the build configuration (platform, flavor) and coverage data for the build
 */
export interface CodeCoverageData {
    /**
     * Flavor of build for which data is retrieved/published
     */
    buildFlavor: string;
    /**
     * Platform of build for which data is retrieved/published
     */
    buildPlatform: string;
    /**
     * List of coverage data for the build
     */
    coverageStats: CodeCoverageStatistics[];
}

/**
 * Represents the code coverage statistics for a particular coverage label (modules, statements, blocks, etc.)
 */
export interface CodeCoverageStatistics {
    /**
     * Covered units
     */
    covered: number;
    /**
     * Delta of coverage
     */
    delta?: number;
    /**
     * Is delta valid
     */
    isDeltaAvailable?: boolean;
    /**
     * Label of coverage data ("Blocks", "Statements", "Modules", etc.)
     */
    label: string;
    /**
     * Position of label
     */
    position: number;
    /**
     * Total units
     */
    total: number;
}

/**
 * Represents the code coverage summary results Used to publish or retrieve code coverage summary against a build
 */
export interface CodeCoverageSummary {
    /**
     * Uri of build for which data is retrieved/published
     */
    build: ShallowReference;
    /**
     * List of coverage data and details for the build
     */
    coverageData?: CodeCoverageData[];
    /**
     * Uri of build against which difference in coverage is computed
     */
    deltaBuild?: ShallowReference;
    /**
     * Uri of build against which difference in coverage is computed
     */
    status?: CoverageSummaryStatus;
}

export interface CodeCoverageSummary2 {
    buildConfigurationId?: number;
    covered?: number;
    label?: string;
    position?: number;
    projectId?: string;
    total?: number;
}

export interface Coverage2 {
    coverageId?: number;
    dateCreated?: Date;
    dateModified?: Date;
    lastError?: string;
    state?: number;
}

/**
 * Used to choose which coverage data is returned by a QueryXXXCoverage() call.
 */
export enum CoverageQueryFlags {
    /**
     * If set, the Coverage.Modules property will be populated.
     */
    Modules = 1,
    /**
     * If set, the ModuleCoverage.Functions properties will be populated.
     */
    Functions = 2,
    /**
     * If set, the ModuleCoverage.CoverageData field will be populated.
     */
    BlockData = 4,
}

export interface CoverageStatistics {
    blocksCovered?: number;
    blocksNotCovered?: number;
    linesCovered?: number;
    linesNotCovered?: number;
    linesPartiallyCovered?: number;
}

export enum CoverageStatus {
    Covered = 0,
    NotCovered = 1,
    PartiallyCovered = 2,
}

/**
 * Represents status of code coverage summary for a build
 */
export enum CoverageSummaryStatus {
    /**
     * No coverage status
     */
    None = 0,
    /**
     * The summary evaluation is in progress
     */
    Pending = 1,
    /**
     * The summary evaluation for the previous request is completed. Summary can change in future
     */
    Completed = 2,
    /**
     * The summary evaluation is finalized and won't change
     */
    Finalized = 3,
}

export interface CreateTestMessageLogEntryRequest {
    projectName?: string;
    testMessageLogEntry?: TestMessageLogEntry[];
    testRunId?: number;
}

export interface CreateTestResultsRequest {
    projectName?: string;
    results?: LegacyTestCaseResult[];
}

export interface CreateTestRunRequest {
    projectName?: string;
    results?: LegacyTestCaseResult[];
    testRun?: LegacyTestRun;
    testSettings?: LegacyTestSettings;
}

/**
 * A custom field information.
 */
export interface CustomTestField {
    /**
     * Field Name.
     */
    fieldName: string;
    /**
     * Field value.
     */
    value: any;
}

export interface CustomTestFieldDefinition {
    fieldId?: number;
    fieldName: string;
    fieldType: CustomTestFieldType;
    scope: CustomTestFieldScope;
}

export enum CustomTestFieldScope {
    None = 0,
    TestRun = 1,
    TestResult = 2,
    System = 4,
    All = 7,
}

export enum CustomTestFieldType {
    Bit = 2,
    DateTime = 4,
    Int = 8,
    Float = 6,
    String = 12,
    Guid = 14,
}

export interface DatedTestFieldData {
    date?: Date;
    value?: TestFieldData;
}

export interface DefaultAfnStripBinding {
    testCaseId?: number;
    testResultId?: number;
    testRunId?: number;
}

export interface DeleteTestRunRequest {
    projectName?: string;
    testRunIds?: number[];
}

export interface DownloadAttachmentsRequest {
    ids?: number[];
    lengths?: number[];
}

/**
 * This is a temporary class to provide the details for the test run environment.
 */
export interface DtlEnvironmentDetails {
    csmContent: string;
    csmParameters?: string;
    subscriptionName?: string;
}

/**
 * Failing since information of a test result.
 */
export interface FailingSince {
    /**
     * Build reference since failing.
     */
    build?: BuildReference;
    /**
     * Time since failing.
     */
    date: Date;
    /**
     * Release reference since failing.
     */
    release?: ReleaseReference;
}

export interface FetchTestResultsRequest {
    idAndRevs?: TestCaseResultIdAndRev[];
    includeActionResults?: boolean;
    projectName?: string;
}

export interface FetchTestResultsResponse {
    actionResults?: TestActionResult[];
    attachments?: TestResultAttachment[];
    deletedIds?: LegacyTestCaseResultIdentifier[];
    results?: LegacyTestCaseResult[];
    testParameters?: TestResultParameter[];
}

export interface FieldDetailsForTestResults {
    /**
     * Group by field name
     */
    fieldName?: string;
    /**
     * Group by field values
     */
    groupsForField?: any[];
}

export interface FileCoverage {
    /**
     * List of line blocks along with their coverage status
     */
    lineBlocksCoverage?: LineBlockCoverage[];
    /**
     * File path for which coverage information is sought for
     */
    path: string;
}

export interface FileCoverageRequest {
    filePath: string;
    pullRequestBaseIterationId: number;
    pullRequestId: number;
    pullRequestIterationId: number;
    repoId: string;
}

export interface FilterPointQuery {
    planId: number;
    pointIds: number[];
    pointOutcome: number[];
    resultState: number[];
}

export interface FunctionCoverage {
    class?: string;
    name?: string;
    namespace?: string;
    sourceFile?: string;
    statistics?: CoverageStatistics;
}

export interface FunctionCoverage2 {
    blocksCovered?: number;
    blocksNotCovered?: number;
    class?: string;
    coverageId?: number;
    functionId?: number;
    linesCovered?: number;
    linesNotCovered?: number;
    linesPartiallyCovered?: number;
    moduleId?: number;
    name?: string;
    namespace?: string;
    sourceFile?: string;
}

export interface HttpPostedTcmAttachment {
    attachmentContent?: string;
    contentLength?: number;
    contentType?: string;
    fileName?: string;
}

export interface LastResultDetails {
    dateCompleted?: Date;
    duration?: number;
    runBy?: VSSInterfaces.IdentityRef;
}

export interface LegacyBuildConfiguration {
    branchName?: string;
    buildConfigurationId?: number;
    buildDefinitionId?: number;
    buildDefinitionName?: string;
    buildFlavor?: string;
    buildId?: number;
    buildNumber?: string;
    buildPlatform?: string;
    buildQuality?: string;
    buildSystem?: string;
    buildUri?: string;
    completedDate?: Date;
    createdDate?: Date;
    oldBuildConfigurationId?: number;
    repositoryId?: string;
    repositoryType?: string;
    sourceVersion?: string;
    teamProjectName?: string;
}

export interface LegacyReleaseReference {
    attempt?: number;
    environmentCreationDate?: Date;
    primaryArtifactBuildId?: number;
    primaryArtifactProjectId?: string;
    primaryArtifactType?: string;
    releaseCreationDate?: Date;
    releaseDefId?: number;
    releaseEnvDefId?: number;
    releaseEnvId?: number;
    releaseEnvName?: string;
    releaseEnvUri?: string;
    releaseId?: number;
    releaseName?: string;
    releaseRefId?: number;
    releaseUri?: string;
}

export interface LegacyTestCaseResult {
    afnStripId?: number;
    areaId?: number;
    areaUri?: string;
    automatedTestId?: string;
    automatedTestName?: string;
    automatedTestStorage?: string;
    automatedTestType?: string;
    automatedTestTypeId?: string;
    buildNumber?: string;
    buildReference?: LegacyBuildConfiguration;
    comment?: string;
    computerName?: string;
    configurationId?: number;
    configurationName?: string;
    creationDate?: Date;
    customFields?: TestExtensionField[];
    dateCompleted?: Date;
    dateStarted?: Date;
    duration?: number;
    errorMessage?: string;
    failingSince?: FailingSince;
    failureType?: number;
    id?: LegacyTestCaseResultIdentifier;
    isRerun?: boolean;
    lastUpdated?: Date;
    lastUpdatedBy?: string;
    lastUpdatedByName?: string;
    outcome?: number;
    owner?: string;
    ownerName?: string;
    priority?: number;
    releaseReference?: LegacyReleaseReference;
    resetCount?: number;
    resolutionStateId?: number;
    resultGroupType?: ResultGroupType;
    revision?: number;
    runBy?: string;
    runByName?: string;
    sequenceId?: number;
    stackTrace?: TestExtensionField;
    state?: number;
    subResultCount?: number;
    suiteName?: string;
    testCaseArea?: string;
    testCaseAreaUri?: string;
    testCaseId?: number;
    testCaseReferenceId?: number;
    testCaseRevision?: number;
    testCaseTitle?: string;
    testPlanId?: number;
    testPointId?: number;
    testResultId?: number;
    testRunId?: number;
    testRunTitle?: string;
    testSuiteId?: number;
}

export interface LegacyTestCaseResultIdentifier {
    areaUri?: string;
    testResultId?: number;
    testRunId?: number;
}

export interface LegacyTestRun {
    bugsCount?: number;
    buildConfigurationId?: number;
    buildFlavor?: string;
    buildNumber?: string;
    buildPlatform?: string;
    buildReference?: LegacyBuildConfiguration;
    buildUri?: string;
    comment?: string;
    completeDate?: Date;
    configurationIds?: number[];
    controller?: string;
    creationDate?: Date;
    csmContent?: string;
    csmParameters?: string;
    customFields?: TestExtensionField[];
    dropLocation?: string;
    dtlAutEnvironment?: ShallowReference;
    dtlTestEnvironment?: ShallowReference;
    dueDate?: Date;
    errorMessage?: string;
    filter?: RunFilter;
    incompleteTests?: number;
    isAutomated?: boolean;
    isBvt?: boolean;
    iteration?: string;
    iterationId?: number;
    lastUpdated?: Date;
    lastUpdatedBy?: string;
    lastUpdatedByName?: string;
    legacySharePath?: string;
    notApplicableTests?: number;
    owner?: string;
    ownerName?: string;
    passedTests?: number;
    postProcessState?: number;
    publicTestSettingsId?: number;
    releaseEnvironmentUri?: string;
    releaseReference?: LegacyReleaseReference;
    releaseUri?: string;
    revision?: number;
    rowVersion?: number[];
    runHasDtlEnvironment?: boolean;
    runTimeout?: any;
    serviceVersion?: string;
    sourceWorkflow?: string;
    startDate?: Date;
    state?: number;
    subscriptionName?: string;
    substate?: number;
    teamProject?: string;
    teamProjectUri?: string;
    testConfigurationsMapping?: string;
    testEnvironmentId?: string;
    testMessageLogEntries?: TestMessageLogDetails[];
    testMessageLogId?: number;
    testPlanId?: number;
    testRunId?: number;
    testRunStatistics?: LegacyTestRunStatistic[];
    testSettingsId?: number;
    title?: string;
    totalTests?: number;
    type?: number;
    unanalyzedTests?: number;
    version?: number;
}

export interface LegacyTestRunStatistic {
    count?: number;
    outcome?: number;
    resolutionState?: TestResolutionState;
    state?: number;
    testRunId?: number;
}

export interface LegacyTestSettings {
    areaId?: number;
    areaPath?: string;
    createdBy?: string;
    createdByName?: string;
    createdDate?: Date;
    description?: string;
    id?: number;
    isAutomated?: boolean;
    isPublic?: boolean;
    lastUpdated?: Date;
    lastUpdatedBy?: string;
    lastUpdatedByName?: string;
    machineRoles?: TestSettingsMachineRole[];
    name?: string;
    revision?: number;
    settings?: string;
    teamProjectUri?: string;
}

export interface LineBlockCoverage {
    /**
     * End of line block
     */
    end: number;
    /**
     * Start of line block
     */
    start: number;
    /**
     * Coverage status. Covered: 0, NotCovered: 1,  PartiallyCovered: 2
     */
    status: number;
}

export interface LinkedWorkItemsQuery {
    automatedTestNames?: string[];
    planId?: number;
    pointIds?: number[];
    suiteIds?: number[];
    testCaseIds?: number[];
    workItemCategory?: string;
}

export interface LinkedWorkItemsQueryResult {
    automatedTestName?: string;
    planId?: number;
    pointId?: number;
    suiteId?: number;
    testCaseId?: number;
    workItems?: WorkItemReference[];
}

export interface ModuleCoverage {
    blockCount?: number;
    blockData?: number[];
    /**
     * Code Coverage File Url
     */
    fileUrl?: string;
    functions?: FunctionCoverage[];
    name?: string;
    signature?: string;
    signatureAge?: number;
    statistics?: CoverageStatistics;
}

export interface ModuleCoverage2 {
    blockCount?: number;
    blockData?: number[];
    blockDataLength?: number;
    blocksCovered?: number;
    blocksNotCovered?: number;
    coverageFileUrl?: string;
    coverageId?: number;
    linesCovered?: number;
    linesNotCovered?: number;
    linesPartiallyCovered?: number;
    moduleId?: number;
    name?: string;
    signature?: string;
    signatureAge?: number;
}

/**
 * Name value pair
 */
export interface NameValuePair {
    /**
     * Name
     */
    name?: string;
    /**
     * Value
     */
    value?: string;
}

export enum OperationType {
    Add = 1,
    Delete = 2,
}

/**
 * A model class used for creating and updating test plans.
 */
export interface PlanUpdateModel {
    /**
     * Area path to which the test plan belongs. This should be set to area path of the team that works on this test plan.
     */
    area?: ShallowReference;
    automatedTestEnvironment?: TestEnvironment;
    automatedTestSettings?: TestSettings;
    /**
     * Build ID of the build whose quality is tested by the tests in this test plan. For automated testing, this build ID is used to find the test binaries that contain automated test methods.
     */
    build?: ShallowReference;
    /**
     * The Build Definition that generates a build associated with this test plan.
     */
    buildDefinition?: ShallowReference;
    /**
     * IDs of configurations to be applied when new test suites and test cases are added to the test plan.
     */
    configurationIds?: number[];
    /**
     * Description of the test plan.
     */
    description?: string;
    /**
     * End date for the test plan.
     */
    endDate?: string;
    /**
     * Iteration path assigned to the test plan. This indicates when the target iteration by which the testing in this plan is supposed to be complete and the product is ready to be released.
     */
    iteration?: string;
    manualTestEnvironment?: TestEnvironment;
    manualTestSettings?: TestSettings;
    /**
     * Name of the test plan.
     */
    name?: string;
    /**
     * Owner of the test plan.
     */
    owner?: VSSInterfaces.IdentityRef;
    /**
     * Release Environment to be used to deploy the build and run automated tests from this test plan.
     */
    releaseEnvironmentDefinition?: ReleaseEnvironmentDefinitionReference;
    /**
     * Start date for the test plan.
     */
    startDate?: string;
    /**
     * State of the test plan.
     */
    state?: string;
    status?: string;
    /**
     * Test Outcome settings
     */
    testOutcomeSettings?: TestOutcomeSettings;
}

/**
 * Adding test cases to a suite creates one of more test points based on the default configurations and testers assigned to the test suite. PointAssignment is the list of test points that were created for each of the test cases that were added to the test suite.
 */
export interface PointAssignment {
    /**
     * Configuration that was assigned to the test case.
     */
    configuration?: ShallowReference;
    /**
     * Tester that was assigned to the test case
     */
    tester?: VSSInterfaces.IdentityRef;
}

export interface PointLastResult {
    lastUpdatedDate?: Date;
    pointId?: number;
}

/**
 * Filter class for test point.
 */
export interface PointsFilter {
    /**
     * List of Configurations for filtering.
     */
    configurationNames?: string[];
    /**
     * List of test case id for filtering.
     */
    testcaseIds?: number[];
    /**
     * List of tester for filtering.
     */
    testers?: VSSInterfaces.IdentityRef[];
}

export interface PointsResults2 {
    changeNumber?: number;
    lastFailureType?: number;
    lastResolutionStateId?: number;
    lastResultOutcome?: number;
    lastResultState?: number;
    lastTestResultId?: number;
    lastTestRunId?: number;
    lastUpdated?: Date;
    planId?: number;
    pointId?: number;
}

/**
 * Model to update test point.
 */
export interface PointUpdateModel {
    /**
     * Outcome to update.
     */
    outcome?: string;
    /**
     * Reset test point to active.
     */
    resetToActive?: boolean;
    /**
     * Tester to update. Type IdentityRef.
     */
    tester?: VSSInterfaces.IdentityRef;
}

/**
 * Test point workitem property.
 */
export interface PointWorkItemProperty {
    /**
     * key value pair of test point work item property.
     */
    workItem: { key: string; value: any };
}

export interface PropertyBag {
    /**
     * Generic store for test session data
     */
    bag?: { [key: string] : string; };
}

export interface QueryByPointRequest {
    projectName?: string;
    testPlanId?: number;
    testPointId?: number;
}

export interface QueryByRunRequest {
    includeActionResults?: boolean;
    outcome?: number;
    owner?: string;
    pageSize?: number;
    projectName?: string;
    state?: number;
    testRunId?: number;
}

export interface QueryModel {
    query: string;
}

export interface QueryTestActionResultRequest {
    identifier?: LegacyTestCaseResultIdentifier;
    projectName?: string;
}

export interface QueryTestActionResultResponse {
    testActionResults?: TestActionResult[];
    testAttachments?: TestResultAttachment[];
    testResultParameters?: TestResultParameter[];
}

export interface QueryTestMessageLogEntryRequest {
    projectName?: string;
    testMessageLogId?: number;
    testRunId?: number;
}

export interface QueryTestRuns2Request {
    includeStatistics?: boolean;
    query?: ResultsStoreQuery;
}

export interface QueryTestRunsRequest {
    buildUri?: string;
    owner?: string;
    planId?: number;
    skip?: number;
    teamProjectName?: string;
    testRunId?: number;
    top?: number;
}

export interface QueryTestRunStatsRequest {
    teamProjectName?: string;
    testRunId?: number;
}

/**
 * Reference to release environment resource.
 */
export interface ReleaseEnvironmentDefinitionReference {
    /**
     * ID of the release definition that contains the release environment definition.
     */
    definitionId?: number;
    /**
     * ID of the release environment definition.
     */
    environmentDefinitionId?: number;
}

/**
 * Reference to a release.
 */
export interface ReleaseReference {
    attempt?: number;
    creationDate?: Date;
    /**
     * Release definition ID.
     */
    definitionId?: number;
    environmentCreationDate?: Date;
    /**
     * Release environment definition ID.
     */
    environmentDefinitionId?: number;
    /**
     * Release environment definition name.
     */
    environmentDefinitionName?: string;
    /**
     * Release environment ID.
     */
    environmentId?: number;
    /**
     * Release environment name.
     */
    environmentName?: string;
    /**
     * Release ID.
     */
    id?: number;
    /**
     * Release name.
     */
    name?: string;
}

export interface ReleaseReference2 {
    attempt?: number;
    environmentCreationDate?: Date;
    projectId?: string;
    releaseCreationDate?: Date;
    releaseDefId?: number;
    releaseEnvDefId?: number;
    releaseEnvId?: number;
    releaseEnvName?: string;
    releaseEnvUri?: string;
    releaseId?: number;
    releaseName?: string;
    releaseRefId?: number;
    releaseUri?: string;
}

export interface RequirementsToTestsMapping2 {
    createdBy?: string;
    creationDate?: Date;
    deletedBy?: string;
    deletionDate?: Date;
    isMigratedToWIT?: boolean;
    projectId?: string;
    testMetadataId?: number;
    workItemId?: number;
}

export interface ResetTestResultsRequest {
    ids?: LegacyTestCaseResultIdentifier[];
    projectName?: string;
}

export interface Response {
    error?: string;
    id?: string;
    status?: string;
    url?: string;
}

/**
 * Additional details with test result
 */
export enum ResultDetails {
    /**
     * Core fields of test result. Core fields includes State, Outcome, Priority, AutomatedTestName, AutomatedTestStorage, Comments, ErrorMessage etc.
     */
    None = 0,
    /**
     * Test iteration details in a test result.
     */
    Iterations = 1,
    /**
     * Workitems associated with a test result.
     */
    WorkItems = 2,
    /**
     * Subresults in a test result.
     */
    SubResults = 4,
    /**
     * Point and plan detail in a test result.
     */
    Point = 8,
}

/**
 * Hierarchy type of the result/subresults.
 */
export enum ResultGroupType {
    /**
     * Leaf node of test result.
     */
    None = 0,
    /**
     * Hierarchy type of test result.
     */
    Rerun = 1,
    /**
     * Hierarchy type of test result.
     */
    DataDriven = 2,
    /**
     * Hierarchy type of test result.
     */
    OrderedTest = 3,
    /**
     * Unknown hierarchy type.
     */
    Generic = 4,
}

/**
 * The top level entity that is being cloned as part of a Clone operation
 */
export enum ResultObjectType {
    /**
     * Suite Clone
     */
    TestSuite = 0,
    /**
     * Plan Clone
     */
    TestPlan = 1,
}

/**
 * Test result retention settings
 */
export interface ResultRetentionSettings {
    /**
     * Automated test result retention duration in days
     */
    automatedResultsRetentionDuration: number;
    /**
     * Last Updated by identity
     */
    lastUpdatedBy?: VSSInterfaces.IdentityRef;
    /**
     * Last updated date
     */
    lastUpdatedDate?: Date;
    /**
     * Manual test result retention duration in days
     */
    manualResultsRetentionDuration: number;
}

export interface ResultsByQueryRequest {
    pageSize?: number;
    query?: ResultsStoreQuery;
}

export interface ResultsByQueryResponse {
    excessIds?: LegacyTestCaseResultIdentifier[];
    testResults?: LegacyTestCaseResult[];
}

export interface ResultsFilter {
    automatedTestName: string;
    branch?: string;
    executedIn?: Service;
    groupBy?: string;
    maxCompleteDate?: Date;
    resultsCount?: number;
    testCaseId?: number;
    testCaseReferenceIds?: number[];
    testPlanId?: number;
    testPointIds?: number[];
    testResultsContext?: TestResultsContext;
    trendDays?: number;
}

export interface ResultsStoreQuery {
    dayPrecision?: boolean;
    queryText?: string;
    teamProjectName?: string;
    timeZone?: string;
}

export interface ResultUpdateRequest {
    actionResultDeletes?: TestActionResult[];
    actionResults?: TestActionResult[];
    attachmentDeletes?: TestResultAttachmentIdentity[];
    attachments?: TestResultAttachment[];
    parameterDeletes?: TestResultParameter[];
    parameters?: TestResultParameter[];
    testCaseResult?: LegacyTestCaseResult;
    testResultId?: number;
    testRunId?: number;
}

export interface ResultUpdateRequestModel {
    actionResultDeletes: TestActionResultModel[];
    actionResults: TestActionResultModel[];
    parameterDeletes: TestResultParameterModel[];
    parameters: TestResultParameterModel[];
    testCaseResult: TestCaseResultUpdateModel;
}

export interface ResultUpdateResponse {
    attachmentIds?: number[];
    lastUpdated?: Date;
    lastUpdatedBy?: string;
    lastUpdatedByName?: string;
    maxReservedSubResultId?: number;
    revision?: number;
    testResultId?: number;
}

export interface ResultUpdateResponseModel {
    revision: number;
}

/**
 * Test run create details.
 */
export interface RunCreateModel {
    /**
     * true if test run is automated, false otherwise. By default it will be false.
     */
    automated?: boolean;
    /**
     * An abstracted reference to the build that it belongs.
     */
    build?: ShallowReference;
    /**
     * Drop location of the build used for test run.
     */
    buildDropLocation?: string;
    /**
     * Flavor of the build used for test run. (E.g: Release, Debug)
     */
    buildFlavor?: string;
    /**
     * Platform of the build used for test run. (E.g.: x86, amd64)
     */
    buildPlatform?: string;
    buildReference?: BuildConfiguration;
    /**
     * Comments entered by those analyzing the run.
     */
    comment?: string;
    /**
     * Completed date time of the run.
     */
    completeDate?: string;
    /**
     * IDs of the test configurations associated with the run.
     */
    configurationIds: number[];
    /**
     * Name of the test controller used for automated run.
     */
    controller?: string;
    customTestFields?: CustomTestField[];
    /**
     * An abstracted reference to DtlAutEnvironment.
     */
    dtlAutEnvironment?: ShallowReference;
    /**
     * An abstracted reference to DtlTestEnvironment.
     */
    dtlTestEnvironment?: ShallowReference;
    /**
     * Due date and time for test run.
     */
    dueDate?: string;
    environmentDetails?: DtlEnvironmentDetails;
    /**
     * Error message associated with the run.
     */
    errorMessage?: string;
    filter?: RunFilter;
    /**
     * The iteration in which to create the run. Root iteration of the team project will be default
     */
    iteration?: string;
    /**
     * Name of the test run.
     */
    name: string;
    /**
     * Display name of the owner of the run.
     */
    owner?: VSSInterfaces.IdentityRef;
    /**
     * An abstracted reference to the plan that it belongs.
     */
    plan: ShallowReference;
    /**
     * IDs of the test points to use in the run.
     */
    pointIds?: number[];
    /**
     * URI of release environment associated with the run.
     */
    releaseEnvironmentUri?: string;
    releaseReference?: ReleaseReference;
    /**
     * URI of release associated with the run.
     */
    releaseUri?: string;
    /**
     * Run summary for run Type = NoConfigRun.
     */
    runSummary?: RunSummaryModel[];
    runTimeout?: any;
    sourceWorkflow?: string;
    /**
     * Start date time of the run.
     */
    startDate?: string;
    /**
     * The state of the run. Valid states - NotStarted, InProgress, Waiting
     */
    state?: string;
    /**
     * Tags to attach with the test run, maximum of 5 tags can be added to run.
     */
    tags?: TestTag[];
    testConfigurationsMapping?: string;
    /**
     * ID of the test environment associated with the run.
     */
    testEnvironmentId?: string;
    /**
     * An abstracted reference to the test settings resource.
     */
    testSettings?: ShallowReference;
    /**
     * Type of the run(RunType)
     */
    type?: string;
}

/**
 * This class is used to provide the filters used for discovery
 */
export interface RunFilter {
    /**
     * filter for the test case sources (test containers)
     */
    sourceFilter: string;
    /**
     * filter for the test cases
     */
    testCaseFilter?: string;
}

/**
 * Test run statistics.
 */
export interface RunStatistic {
    count: number;
    /**
     * Test run outcome
     */
    outcome: string;
    resolutionState?: TestResolutionState;
    /**
     * State of the test run
     */
    state: string;
}

/**
 * Run summary for each output type of test.
 */
export interface RunSummaryModel {
    /**
     * Total time taken in milliseconds.
     */
    duration?: number;
    /**
     * Number of results for Outcome TestOutcome
     */
    resultCount: number;
    /**
     * Summary is based on outcome
     */
    testOutcome: TestOutcome;
}

export enum RunType {
    /**
     * Only used during an update to preserve the existing value.
     */
    Unspecified = 0,
    /**
     * Normal test run.
     */
    Normal = 1,
    /**
     * Test run created for the blocked result when a test point is blocked.
     */
    Blocking = 2,
    /**
     * Test run created from Web.
     */
    Web = 4,
    /**
     * Run initiated from web through MTR
     */
    MtrRunInitiatedFromWeb = 8,
    /**
     * These test run would require DTL environment. These could be either of automated or manual test run.
     */
    RunWithDtlEnv = 16,
    /**
     * These test run may or may not have published test results but it will have summary like total test, passed test, failed test etc. These are automated tests.
     */
    NoConfigRun = 32,
}

export interface RunUpdateModel {
    /**
     * An abstracted reference to the build that it belongs.
     */
    build?: ShallowReference;
    buildDropLocation?: string;
    buildFlavor?: string;
    buildPlatform?: string;
    /**
     * Comments entered by those analyzing the run.
     */
    comment?: string;
    /**
     * Completed date time of the run.
     */
    completedDate?: string;
    /**
     * Name of the test controller used for automated run.
     */
    controller?: string;
    deleteInProgressResults?: boolean;
    /**
     * An abstracted reference to DtlAutEnvironment.
     */
    dtlAutEnvironment?: ShallowReference;
    /**
     * An abstracted reference to DtlEnvironment.
     */
    dtlEnvironment?: ShallowReference;
    dtlEnvironmentDetails?: DtlEnvironmentDetails;
    /**
     * Due date and time for test run.
     */
    dueDate?: string;
    /**
     * Error message associated with the run.
     */
    errorMessage?: string;
    /**
     * The iteration in which to create the run.
     */
    iteration?: string;
    /**
     * Log entries associated with the run. Use a comma-separated list of multiple log entry objects. { logEntry }, { logEntry }, ...
     */
    logEntries?: TestMessageLogDetails[];
    /**
     * Name of the test run.
     */
    name?: string;
    releaseEnvironmentUri?: string;
    releaseUri?: string;
    /**
     * Run summary for run Type = NoConfigRun.
     */
    runSummary?: RunSummaryModel[];
    sourceWorkflow?: string;
    /**
     * Start date time of the run.
     */
    startedDate?: string;
    /**
     * The state of the test run Below are the valid values - NotStarted, InProgress, Completed, Aborted, Waiting
     */
    state?: string;
    substate?: TestRunSubstate;
    /**
     * Tags to attach with the test run.
     */
    tags?: TestTag[];
    testEnvironmentId?: string;
    /**
     * An abstracted reference to test setting resource.
     */
    testSettings?: ShallowReference;
}

export enum Service {
    Any = 0,
    Tcm = 1,
    Tfs = 2,
}

/**
 * An abstracted reference to some other resource. This class is used to provide the build data contracts with a uniform way to reference other resources in a way that provides easy traversal through links.
 */
export interface ShallowReference {
    /**
     * ID of the resource
     */
    id?: string;
    /**
     * Name of the linked resource (definition name, controller name, etc.)
     */
    name?: string;
    /**
     * Full http link to the resource
     */
    url?: string;
}

export interface ShallowTestCaseResult {
    automatedTestName?: string;
    automatedTestStorage?: string;
    durationInMs?: number;
    id?: number;
    isReRun?: boolean;
    outcome?: string;
    owner?: string;
    priority?: number;
    refId?: number;
    runId?: number;
    tags?: string[];
    testCaseTitle?: string;
}

/**
 * Reference to shared step workitem.
 */
export interface SharedStepModel {
    /**
     * WorkItem shared step ID.
     */
    id: number;
    /**
     * Shared step workitem revision.
     */
    revision: number;
}

/**
 * Suite create model
 */
export interface SuiteCreateModel {
    /**
     * Name of test suite.
     */
    name?: string;
    /**
     * For query based suites, query string that defines the suite.
     */
    queryString?: string;
    /**
     * For requirements test suites, the IDs of the requirements.
     */
    requirementIds?: number[];
    /**
     * Type of test suite to create. It can have value from DynamicTestSuite, StaticTestSuite and RequirementTestSuite.
     */
    suiteType?: string;
}

/**
 * A suite entry defines properties for a test suite.
 */
export interface SuiteEntry {
    /**
     * Id of child suite in the test suite.
     */
    childSuiteId?: number;
    /**
     * Sequence number for the test case or child test suite in the test suite.
     */
    sequenceNumber?: number;
    /**
     * Id for the test suite.
     */
    suiteId?: number;
    /**
     * Id of a test case in the test suite.
     */
    testCaseId?: number;
}

/**
 * A model to define sequence of test suite entries in a test suite.
 */
export interface SuiteEntryUpdateModel {
    /**
     * Id of the child suite in the test suite.
     */
    childSuiteId?: number;
    /**
     * Updated sequence number for the test case or child test suite in the test suite.
     */
    sequenceNumber?: number;
    /**
     * Id of the test case in the test suite.
     */
    testCaseId?: number;
}

/**
 * Option to get details in response
 */
export enum SuiteExpand {
    /**
     * Include children in response.
     */
    Children = 1,
    /**
     * Include default testers in response.
     */
    DefaultTesters = 2,
}

/**
 * Test case for the suite.
 */
export interface SuiteTestCase {
    /**
     * Point Assignment for test suite's test case.
     */
    pointAssignments?: PointAssignment[];
    /**
     * Test case workItem reference.
     */
    testCase?: WorkItemReference;
}

/**
 * Test suite update model.
 */
export interface SuiteTestCaseUpdateModel {
    /**
     * Shallow reference of configurations for the test cases in the suite.
     */
    configurations?: ShallowReference[];
}

/**
 * Test suite update model.
 */
export interface SuiteUpdateModel {
    /**
     * Shallow reference of default configurations for the suite.
     */
    defaultConfigurations?: ShallowReference[];
    /**
     * Shallow reference of test suite.
     */
    defaultTesters?: ShallowReference[];
    /**
     * Specifies if the default configurations have to be inherited from the parent test suite in which the test suite is created.
     */
    inheritDefaultConfigurations?: boolean;
    /**
     * Test suite name
     */
    name?: string;
    /**
     * Shallow reference of the parent.
     */
    parent?: ShallowReference;
    /**
     * For query based suites, the new query string.
     */
    queryString?: string;
}

export interface TCMPropertyBag2 {
    artifactId?: number;
    artifactType?: number;
    name?: string;
    value?: string;
}

export enum TCMServiceDataMigrationStatus {
    /**
     * Migration Not Started
     */
    NotStarted = 0,
    /**
     * Migration InProgress
     */
    InProgress = 1,
    /**
     * Migration Completed
     */
    Completed = 2,
    /**
     * Migration Failed
     */
    Failed = 3,
}

export interface TestActionResult {
    actionPath?: string;
    comment?: string;
    creationDate?: Date;
    dateCompleted?: Date;
    dateStarted?: Date;
    duration?: number;
    errorMessage?: string;
    id?: LegacyTestCaseResultIdentifier;
    iterationId?: number;
    lastUpdated?: Date;
    lastUpdatedBy?: string;
    outcome?: number;
    sharedStepId?: number;
    sharedStepRevision?: number;
}

export interface TestActionResult2 {
    actionPath?: string;
    comment?: string;
    creationDate?: Date;
    dateCompleted?: Date;
    dateStarted?: Date;
    duration?: number;
    errorMessage?: string;
    iterationId?: number;
    lastUpdated?: Date;
    outcome?: number;
    sharedStepId?: number;
    sharedStepRevision?: number;
    testResultId?: number;
    testRunId?: number;
}

/**
 * Represents a test step result.
 */
export interface TestActionResultModel extends TestResultModelBase {
    /**
     * Path identifier test step in test case workitem.
     */
    actionPath?: string;
    /**
     * Iteration ID of test action result.
     */
    iterationId?: number;
    /**
     * Reference to shared step workitem.
     */
    sharedStepModel?: SharedStepModel;
    /**
     * This is step Id of test case. For shared step, it is step Id of shared step in test case workitem; step Id in shared step. Example: TestCase workitem has two steps: 1) Normal step with Id = 1 2) Shared Step with Id = 2. Inside shared step: a) Normal Step with Id = 1 Value for StepIdentifier for First step: "1" Second step: "2;1"
     */
    stepIdentifier?: string;
    /**
     * Url of test action result.
     */
    url?: string;
}

export interface TestAttachment {
    /**
     * Attachment type.
     */
    attachmentType?: AttachmentType;
    /**
     * Comment associated with attachment.
     */
    comment?: string;
    /**
     * Attachment created date.
     */
    createdDate?: Date;
    /**
     * Attachment file name
     */
    fileName?: string;
    /**
     * ID of the attachment.
     */
    id: number;
    /**
     * Attachment size.
     */
    size?: number;
    /**
     * Attachment Url.
     */
    url?: string;
}

/**
 * Reference to test attachment.
 */
export interface TestAttachmentReference {
    /**
     * ID of the attachment.
     */
    id: number;
    /**
     * Url to download the attachment.
     */
    url: string;
}

/**
 * Test attachment request model
 */
export interface TestAttachmentRequestModel {
    /**
     * Attachment type By Default it will be GeneralAttachment. It can be one of the following type. { GeneralAttachment, AfnStrip, BugFilingData, CodeCoverage, IntermediateCollectorData, RunConfig, TestImpactDetails, TmiTestRunDeploymentFiles, TmiTestRunReverseDeploymentFiles, TmiTestResultDetail, TmiTestRunSummary }
     */
    attachmentType?: string;
    /**
     * Comment associated with attachment
     */
    comment?: string;
    /**
     * Attachment filename
     */
    fileName: string;
    /**
     * Base64 encoded file stream
     */
    stream: string;
}

export interface TestAuthoringDetails {
    configurationId?: number;
    isAutomated?: boolean;
    lastUpdated?: Date;
    pointId?: number;
    priority?: number;
    runBy?: string;
    state?: TestPointState;
    suiteId?: number;
    testerId?: string;
}

export interface TestCaseMetadata2 {
    container?: string;
    name?: string;
    projectId?: string;
    testMetadataId?: number;
}

export interface TestCaseReference2 {
    areaId?: number;
    automatedTestId?: string;
    automatedTestName?: string;
    automatedTestNameHash?: number[];
    automatedTestStorage?: string;
    automatedTestStorageHash?: number[];
    automatedTestType?: string;
    configurationId?: number;
    createdBy?: string;
    creationDate?: Date;
    lastRefTestRunDate?: Date;
    owner?: string;
    priority?: number;
    projectId?: string;
    testCaseId?: number;
    testCaseRefId?: number;
    testCaseRevision?: number;
    testCaseTitle?: string;
    testPointId?: number;
}

/**
 * Represents a test result.
 */
export interface TestCaseResult {
    /**
     * Test attachment ID of action recording.
     */
    afnStripId?: number;
    /**
     * Reference to area path of test.
     */
    area?: ShallowReference;
    /**
     * Reference to bugs linked to test result.
     */
    associatedBugs?: ShallowReference[];
    /**
     * ID representing test method in a dll.
     */
    automatedTestId?: string;
    /**
     * Fully qualified name of test executed.
     */
    automatedTestName?: string;
    /**
     * Container to which test belongs.
     */
    automatedTestStorage?: string;
    /**
     * Type of automated test.
     */
    automatedTestType?: string;
    automatedTestTypeId?: string;
    /**
     * Shallow reference to build associated with test result.
     */
    build?: ShallowReference;
    /**
     * Reference to build associated with test result.
     */
    buildReference?: BuildReference;
    /**
     * Comment in a test result.
     */
    comment?: string;
    /**
     * Time when test execution completed.
     */
    completedDate?: Date;
    /**
     * Machine name where test executed.
     */
    computerName?: string;
    /**
     * Test configuration of a test result.
     */
    configuration?: ShallowReference;
    /**
     * Timestamp when test result created.
     */
    createdDate?: Date;
    /**
     * Additional properties of test result.
     */
    customFields?: CustomTestField[];
    /**
     * Duration of test execution in milliseconds.
     */
    durationInMs?: number;
    /**
     * Error message in test execution.
     */
    errorMessage?: string;
    /**
     * Information when test results started failing.
     */
    failingSince?: FailingSince;
    /**
     * Failure type of test result.
     */
    failureType?: string;
    /**
     * ID of a test result.
     */
    id?: number;
    /**
     * Test result details of test iterations.
     */
    iterationDetails?: TestIterationDetailsModel[];
    /**
     * Reference to identity last updated test result.
     */
    lastUpdatedBy?: VSSInterfaces.IdentityRef;
    /**
     * Last updated datetime of test result.
     */
    lastUpdatedDate?: Date;
    /**
     * Test outcome of test result.
     */
    outcome?: string;
    /**
     * Reference to test owner.
     */
    owner?: VSSInterfaces.IdentityRef;
    /**
     * Priority of test executed.
     */
    priority?: number;
    /**
     * Reference to team project.
     */
    project?: ShallowReference;
    /**
     * Shallow reference to release associated with test result.
     */
    release?: ShallowReference;
    /**
     * Reference to release associated with test result.
     */
    releaseReference?: ReleaseReference;
    resetCount?: number;
    /**
     * Resolution state of test result.
     */
    resolutionState?: string;
    /**
     * ID of resolution state.
     */
    resolutionStateId?: number;
    /**
     * Hierarchy type of the result, default value of None means its leaf node.
     */
    resultGroupType?: ResultGroupType;
    /**
     * Revision number of test result.
     */
    revision?: number;
    /**
     * Reference to identity executed the test.
     */
    runBy?: VSSInterfaces.IdentityRef;
    /**
     * Stacktrace.
     */
    stackTrace?: string;
    /**
     * Time when test execution started.
     */
    startedDate?: Date;
    /**
     * State of test result.
     */
    state?: string;
    /**
     * List of sub results inside a test result, if ResultGroupType is not None, it holds corresponding type sub results.
     */
    subResults?: TestSubResult[];
    /**
     * Reference to the test executed.
     */
    testCase?: ShallowReference;
    /**
     * Reference ID of test used by test result.
     */
    testCaseReferenceId?: number;
    /**
     * Name of test.
     */
    testCaseRevision?: number;
    /**
     * Name of test.
     */
    testCaseTitle?: string;
    /**
     * Reference to test plan test case workitem is part of.
     */
    testPlan?: ShallowReference;
    /**
     * Reference to the test point executed.
     */
    testPoint?: ShallowReference;
    /**
     * Reference to test run.
     */
    testRun?: ShallowReference;
    /**
     * Reference to test suite test case workitem is part of.
     */
    testSuite?: ShallowReference;
    /**
     * Url of test result.
     */
    url?: string;
}

/**
 * Test attachment information in a test iteration.
 */
export interface TestCaseResultAttachmentModel {
    /**
     * Path identifier test step in test case workitem.
     */
    actionPath?: string;
    /**
     * Attachment ID.
     */
    id: number;
    /**
     * Iteration ID.
     */
    iterationId: number;
    /**
     * Name of attachment.
     */
    name: string;
    /**
     * Attachment size.
     */
    size: number;
    /**
     * Url to attachment.
     */
    url: string;
}

export interface TestCaseResultIdAndRev {
    id?: LegacyTestCaseResultIdentifier;
    revision?: number;
}

/**
 * Reference to a test result.
 */
export interface TestCaseResultIdentifier {
    /**
     * Test result ID.
     */
    testResultId: number;
    /**
     * Test run ID.
     */
    testRunId: number;
}

export interface TestCaseResultUpdateModel {
    associatedWorkItems?: number[];
    automatedTestTypeId?: string;
    comment?: string;
    completedDate?: string;
    computerName?: string;
    customFields?: CustomTestField[];
    durationInMs?: string;
    errorMessage?: string;
    failureType?: string;
    outcome?: string;
    owner?: VSSInterfaces.IdentityRef;
    resolutionState?: string;
    runBy?: VSSInterfaces.IdentityRef;
    stackTrace?: string;
    startedDate?: string;
    state?: string;
    testCasePriority?: string;
    testResult?: ShallowReference;
}

/**
 * Test configuration
 */
export interface TestConfiguration {
    /**
     * Area of the configuration
     */
    area?: ShallowReference;
    /**
     * Description of the configuration
     */
    description?: string;
    /**
     * Id of the configuration
     */
    id: number;
    /**
     * Is the configuration a default for the test plans
     */
    isDefault?: boolean;
    /**
     * Last Updated By  Reference
     */
    lastUpdatedBy?: VSSInterfaces.IdentityRef;
    /**
     * Last Updated Data
     */
    lastUpdatedDate?: Date;
    /**
     * Name of the configuration
     */
    name: string;
    /**
     * Project to which the configuration belongs
     */
    project?: ShallowReference;
    /**
     * Revision of the the configuration
     */
    revision?: number;
    /**
     * State of the configuration
     */
    state?: TestConfigurationState;
    /**
     * Url of Configuration Resource
     */
    url?: string;
    /**
     * Dictionary of Test Variable, Selected Value
     */
    values?: NameValuePair[];
}

/**
 * Represents the state of an ITestConfiguration object.
 */
export enum TestConfigurationState {
    /**
     * The configuration can be used for new test runs.
     */
    Active = 1,
    /**
     * The configuration has been retired and should not be used for new test runs.
     */
    Inactive = 2,
}

export interface TestEnvironment {
    environmentId: string;
    environmentName: string;
}

export interface TestExecutionReportData {
    reportData?: DatedTestFieldData[];
}

export interface TestExtensionField {
    field?: TestExtensionFieldDetails;
    value?: any;
}

export interface TestExtensionFieldDetails {
    id?: number;
    isResultScoped?: boolean;
    isRunScoped?: boolean;
    isSystemField?: boolean;
    name?: string;
    type?: SystemData.SqlDbType;
}

export interface TestFailureDetails {
    count?: number;
    testResults?: TestCaseResultIdentifier[];
}

export interface TestFailuresAnalysis {
    existingFailures?: TestFailureDetails;
    fixedTests?: TestFailureDetails;
    newFailures?: TestFailureDetails;
    previousContext?: TestResultsContext;
}

export interface TestFailureType {
    id: number;
    name: string;
    project: ShallowReference;
}

export interface TestFieldData {
    dimensions?: { [key: string] : any; };
    measure?: number;
}

export interface TestFieldsEx2 {
    fieldId?: number;
    fieldName?: string;
    fieldType?: number;
    isResultScoped?: boolean;
    isRunScoped?: boolean;
    isSystemField?: boolean;
    projectId?: string;
}

/**
 * Test Flaky Identifier
 */
export interface TestFlakyIdentifier {
    /**
     * Branch Name where Flakiness has to be Marked/Unmarked
     */
    branchName: string;
    /**
     * State for Flakiness
     */
    isFlaky: boolean;
}

/**
 * Filter to get TestCase result history.
 */
export interface TestHistoryQuery {
    /**
     * Automated test name of the TestCase.
     */
    automatedTestName: string;
    /**
     * Results to be get for a particular branches.
     */
    branch?: string;
    /**
     * Get the results history only for this BuildDefinationId. This to get used in query GroupBy should be Branch. If this is provided, Branch will have no use.
     */
    buildDefinitionId?: number;
    /**
     * It will be filled by server. If not null means there are some results still to be get, and we need to call this REST API with this ContinuousToken. It is not supposed to be created (or altered, if received from server in last batch) by user.
     */
    continuationToken?: string;
    /**
     * Group the result on the basis of TestResultGroupBy. This can be Branch, Environment or null(if results are fetched by BuildDefinitionId)
     */
    groupBy: TestResultGroupBy;
    /**
     * History to get between time interval MaxCompleteDate and  (MaxCompleteDate - TrendDays). Default is current date time.
     */
    maxCompleteDate?: Date;
    /**
     * Get the results history only for this ReleaseEnvDefinitionId. This to get used in query GroupBy should be Environment.
     */
    releaseEnvDefinitionId?: number;
    /**
     * List of TestResultHistoryForGroup which are grouped by GroupBy
     */
    resultsForGroup?: TestResultHistoryForGroup[];
    /**
     * Get the results history only for this testCaseId. This to get used in query to filter the result along with automatedtestname
     */
    testCaseId?: number;
    /**
     * Number of days for which history to collect. Maximum supported value is 7 days. Default is 7 days.
     */
    trendDays?: number;
}

/**
 * Represents a test iteration result.
 */
export interface TestIterationDetailsModel {
    /**
     * Test step results in an iteration.
     */
    actionResults?: TestActionResultModel[];
    /**
     * Refence to attachments in test iteration result.
     */
    attachments?: TestCaseResultAttachmentModel[];
    /**
     * Comment in test iteration result.
     */
    comment?: string;
    /**
     * Time when execution completed.
     */
    completedDate?: Date;
    /**
     * Duration of execution.
     */
    durationInMs?: number;
    /**
     * Error message in test iteration result execution.
     */
    errorMessage?: string;
    /**
     * ID of test iteration result.
     */
    id?: number;
    /**
     * Test outcome if test iteration result.
     */
    outcome?: string;
    /**
     * Test parameters in an iteration.
     */
    parameters?: TestResultParameterModel[];
    /**
     * Time when execution started.
     */
    startedDate?: Date;
    /**
     * Url to test iteration result.
     */
    url?: string;
}

/**
 * Represents Test Log Result object.
 */
export interface TestLog {
    /**
     * Test Log Context run, build
     */
    logReference: TestLogReference;
    metaData?: { [key: string] : string; };
    /**
     * LastUpdatedDate for Log file
     */
    modifiedOn?: Date;
    /**
     * Size in Bytes for Log file
     */
    size?: number;
}

export interface TestLogReference {
    /**
     * BuildId for test log, if context is build
     */
    buildId: number;
    /**
     * FileName for log file
     */
    filePath: string;
    /**
     * ReleaseEnvId for test log, if context is Release
     */
    releaseEnvId?: number;
    /**
     * ReleaseId for test log, if context is Release
     */
    releaseId?: number;
    /**
     * Resultid for test log, if context is run and log is related to result
     */
    resultId: number;
    /**
     * runid for test log, if context is run
     */
    runId: number;
    /**
     * Test Log Reference object
     */
    scope: TestLogScope;
    /**
     * SubResultid for test log, if context is run and log is related to subresult
     */
    subResultId: number;
    /**
     * Log Type
     */
    type: TestLogType;
}

/**
 * Test Log Context
 */
export enum TestLogScope {
    /**
     * Log file is associated with Run, result, subresult
     */
    Run = 0,
    /**
     * Log File associated with Build
     */
    Build = 1,
    /**
     * Log File associated with Release
     */
    Release = 2,
}

/**
 * Represents Test Log Status object.
 */
export interface TestLogStatus {
    /**
     * Exception message
     */
    exception: string;
    /**
     * Test Log Status code
     */
    status: TestLogStatusCode;
    /**
     * Blob Transfer Error code
     */
    transferFailureType: string;
}

/**
 * Test Log Status codes.
 */
export enum TestLogStatusCode {
    Success = 0,
    Failed = 1,
    FileAlreadyExists = 2,
    InvalidInput = 3,
    InvalidFileName = 4,
    InvalidContainer = 5,
    TransferFailed = 6,
    FeatureDisabled = 7,
    BuildDoesNotExist = 8,
    RunDoesNotExist = 9,
    ContainerNotCreated = 10,
    APINotSupported = 11,
    FileSizeExceeds = 12,
    ContainerNotFound = 13,
}

/**
 * Represents Test Log store endpoint details.
 */
export interface TestLogStoreEndpointDetails {
    /**
     * Test log store connection Uri.
     */
    endpointSASUri?: string;
    /**
     * Test log store endpoint type.
     */
    endpointType?: TestLogStoreEndpointType;
    /**
     * Test log store status code
     */
    status?: TestLogStatusCode;
}

export enum TestLogStoreEndpointType {
    Root = 1,
    File = 2,
}

export enum TestLogStoreOperationType {
    Read = 1,
    Create = 2,
    ReadAndCreate = 3,
}

/**
 * Test Log Types
 */
export enum TestLogType {
    /**
     * Any gereric attachment.
     */
    GeneralAttachment = 1,
    /**
     * Code Coverage files
     */
    CodeCoverage = 2,
    /**
     * Test Impact details.
     */
    TestImpact = 3,
    /**
     * Temporary files
     */
    Intermediate = 4,
}

export interface TestMessageLog2 {
    testMessageLogId?: number;
}

/**
 * An abstracted reference to some other resource. This class is used to provide the build data contracts with a uniform way to reference other resources in a way that provides easy traversal through links.
 */
export interface TestMessageLogDetails {
    /**
     * Date when the resource is created
     */
    dateCreated?: Date;
    /**
     * Id of the resource
     */
    entryId?: number;
    /**
     * Message of the resource
     */
    message?: string;
}

export interface TestMessageLogEntry {
    dateCreated?: Date;
    entryId?: number;
    logLevel?: number;
    logUser?: string;
    logUserName?: string;
    message?: string;
    testMessageLogId?: number;
}

export interface TestMessageLogEntry2 {
    dateCreated?: Date;
    entryId?: number;
    logLevel?: number;
    logUser?: string;
    message?: string;
    testMessageLogId?: number;
}

export interface TestMethod {
    container?: string;
    name: string;
}

/**
 * Class representing a reference to an operation.
 */
export interface TestOperationReference {
    id?: string;
    status?: string;
    url?: string;
}

export enum TestOutcome {
    /**
     * Only used during an update to preserve the existing value.
     */
    Unspecified = 0,
    /**
     * Test has not been completed, or the test type does not report pass/failure.
     */
    None = 1,
    /**
     * Test was executed w/o any issues.
     */
    Passed = 2,
    /**
     * Test was executed, but there were issues. Issues may involve exceptions or failed assertions.
     */
    Failed = 3,
    /**
     * Test has completed, but we can't say if it passed or failed. May be used for aborted tests...
     */
    Inconclusive = 4,
    /**
     * The test timed out
     */
    Timeout = 5,
    /**
     * Test was aborted. This was not caused by a user gesture, but rather by a framework decision.
     */
    Aborted = 6,
    /**
     * Test had it chance for been executed but was not, as ITestElement.IsRunnable == false.
     */
    Blocked = 7,
    /**
     * Test was not executed. This was caused by a user gesture - e.g. user hit stop button.
     */
    NotExecuted = 8,
    /**
     * To be used by Run level results. This is not a failure.
     */
    Warning = 9,
    /**
     * There was a system error while we were trying to execute a test.
     */
    Error = 10,
    /**
     * Test is Not Applicable for execution.
     */
    NotApplicable = 11,
    /**
     * Test is paused.
     */
    Paused = 12,
    /**
     * Test is currently executing. Added this for TCM charts
     */
    InProgress = 13,
    /**
     * Test is not impacted. Added fot TIA.
     */
    NotImpacted = 14,
    MaxValue = 14,
}

/**
 * Test outcome settings
 */
export interface TestOutcomeSettings {
    /**
     * Value to configure how test outcomes for the same tests across suites are shown
     */
    syncOutcomeAcrossSuites?: boolean;
}

export interface TestParameter2 {
    actionPath?: string;
    actual?: number[];
    creationDate?: Date;
    dataType?: number;
    dateModified?: Date;
    expected?: number[];
    iterationId?: number;
    parameterName?: string;
    testResultId?: number;
    testRunId?: number;
}

/**
 * The test plan resource.
 */
export interface TestPlan {
    /**
     * Area of the test plan.
     */
    area?: ShallowReference;
    automatedTestEnvironment?: TestEnvironment;
    automatedTestSettings?: TestSettings;
    /**
     * Build to be tested.
     */
    build?: ShallowReference;
    /**
     * The Build Definition that generates a build associated with this test plan.
     */
    buildDefinition?: ShallowReference;
    clientUrl: string;
    /**
     * Description of the test plan.
     */
    description?: string;
    /**
     * End date for the test plan.
     */
    endDate?: Date;
    /**
     * ID of the test plan.
     */
    id: number;
    /**
     * Iteration path of the test plan.
     */
    iteration: string;
    manualTestEnvironment?: TestEnvironment;
    manualTestSettings?: TestSettings;
    /**
     * Name of the test plan.
     */
    name: string;
    /**
     * Owner of the test plan.
     */
    owner?: VSSInterfaces.IdentityRef;
    previousBuild?: ShallowReference;
    /**
     * Project which contains the test plan.
     */
    project?: ShallowReference;
    /**
     * Release Environment to be used to deploy the build and run automated tests from this test plan.
     */
    releaseEnvironmentDefinition?: ReleaseEnvironmentDefinitionReference;
    /**
     * Revision of the test plan.
     */
    revision?: number;
    /**
     * Root test suite of the test plan.
     */
    rootSuite: ShallowReference;
    /**
     * Start date for the test plan.
     */
    startDate?: Date;
    /**
     * State of the test plan.
     */
    state?: string;
    /**
     * Value to configure how same tests across test suites under a test plan need to behave
     */
    testOutcomeSettings?: TestOutcomeSettings;
    updatedBy?: VSSInterfaces.IdentityRef;
    updatedDate?: Date;
    /**
     * URL of the test plan resource.
     */
    url?: string;
}

export interface TestPlanCloneRequest {
    destinationTestPlan?: TestPlan;
    options?: CloneOptions;
    suiteIds?: number[];
}

export interface TestPlanHubData {
    selectedSuiteId: number;
    testPlan: TestPlan;
    testPoints: TestPoint[];
    testSuites: TestSuite[];
    totalTestPoints: number;
}

export interface TestPlansWithSelection {
    lastSelectedPlan?: number;
    lastSelectedSuite?: number;
    plans: TestPlan[];
}

/**
 * Test point.
 */
export interface TestPoint {
    /**
     * AssignedTo. Type IdentityRef.
     */
    assignedTo?: VSSInterfaces.IdentityRef;
    /**
     * Automated.
     */
    automated?: boolean;
    /**
     * Comment associated with test point.
     */
    comment?: string;
    /**
     * Configuration. Type ShallowReference.
     */
    configuration: ShallowReference;
    /**
     * Failure type of test point.
     */
    failureType?: string;
    /**
     * ID of the test point.
     */
    id: number;
    /**
     * Last date when test point was reset to Active.
     */
    lastResetToActive?: Date;
    /**
     * Last resolution state id of test point.
     */
    lastResolutionStateId?: number;
    /**
     * Last result of test point. Type ShallowReference.
     */
    lastResult?: ShallowReference;
    /**
     * Last result details of test point. Type LastResultDetails.
     */
    lastResultDetails?: LastResultDetails;
    /**
     * Last result state of test point.
     */
    lastResultState?: string;
    /**
     * LastRun build number of test point.
     */
    lastRunBuildNumber?: string;
    /**
     * Last testRun of test point. Type ShallowReference.
     */
    lastTestRun?: ShallowReference;
    /**
     * Test point last updated by. Type IdentityRef.
     */
    lastUpdatedBy?: VSSInterfaces.IdentityRef;
    /**
     * Last updated date of test point.
     */
    lastUpdatedDate?: Date;
    /**
     * Outcome of test point.
     */
    outcome: string;
    /**
     * Revision number.
     */
    revision?: number;
    /**
     * State of test point.
     */
    state?: string;
    /**
     * Suite of test point. Type ShallowReference.
     */
    suite?: ShallowReference;
    /**
     * TestCase associated to test point. Type WorkItemReference.
     */
    testCase: WorkItemReference;
    /**
     * TestPlan of test point. Type ShallowReference.
     */
    testPlan?: ShallowReference;
    /**
     * Test point Url.
     */
    url: string;
    /**
     * Work item properties of test point.
     */
    workItemProperties: any[];
}

export interface TestPointReference {
    id: number;
    state?: TestPointState;
}

export interface TestPointsEvent {
    projectName?: string;
    testPoints: TestPointReference[];
}

/**
 * Test point query class.
 */
export interface TestPointsQuery {
    /**
     * Order by results.
     */
    orderBy?: string;
    /**
     * List of test points
     */
    points?: TestPoint[];
    /**
     * Filter
     */
    pointsFilter?: PointsFilter;
    /**
     * List of workitem fields to get.
     */
    witFields?: string[];
}

export enum TestPointState {
    /**
     * Default
     */
    None = 0,
    /**
     * The test point needs to be executed in order for the test pass to be considered complete.  Either the test has not been run before or the previous run failed.
     */
    Ready = 1,
    /**
     * The test has passed successfully and does not need to be re-run for the test pass to be considered complete.
     */
    Completed = 2,
    /**
     * The test point needs to be executed but is not able to.
     */
    NotReady = 3,
    /**
     * The test is being executed.
     */
    InProgress = 4,
    MaxValue = 4,
}

export interface TestPointsUpdatedEvent extends TestPointsEvent {
}

export interface TestResolutionState {
    id: number;
    name: string;
    project: ShallowReference;
}

export interface TestResult2 {
    afnStripId?: number;
    computerName?: string;
    creationDate?: Date;
    dateCompleted?: Date;
    dateStarted?: Date;
    effectivePointState?: number;
    failureType?: number;
    lastUpdated?: Date;
    lastUpdatedBy?: string;
    outcome?: number;
    owner?: string;
    projectId?: string;
    resetCount?: number;
    resolutionStateId?: number;
    revision?: number;
    runBy?: string;
    state?: number;
    testCaseRefId?: number;
    testResultId?: number;
    testRunId?: number;
}

export interface TestResultAcrossProjectResponse {
    projectName?: string;
    testResult?: LegacyTestCaseResult;
}

export interface TestResultAttachment {
    actionPath?: string;
    attachmentType?: AttachmentType;
    comment?: string;
    creationDate?: Date;
    downloadQueryString?: string;
    fileName?: string;
    id?: number;
    isComplete?: boolean;
    iterationId?: number;
    length?: number;
    sessionId?: number;
    testResultId?: number;
    testRunId?: number;
    tmiRunId?: string;
}

export interface TestResultAttachmentIdentity {
    attachmentId?: number;
    sessionId?: number;
    testResultId?: number;
    testRunId?: number;
}

export interface TestResultCreateModel {
    area?: ShallowReference;
    associatedWorkItems?: number[];
    automatedTestId?: string;
    automatedTestName?: string;
    automatedTestStorage?: string;
    automatedTestType?: string;
    automatedTestTypeId?: string;
    comment?: string;
    completedDate?: string;
    computerName?: string;
    configuration?: ShallowReference;
    customFields?: CustomTestField[];
    durationInMs?: string;
    errorMessage?: string;
    failureType?: string;
    outcome?: string;
    owner?: VSSInterfaces.IdentityRef;
    resolutionState?: string;
    runBy?: VSSInterfaces.IdentityRef;
    stackTrace?: string;
    startedDate?: string;
    state?: string;
    testCase?: ShallowReference;
    testCasePriority?: string;
    testCaseTitle?: string;
    testPoint?: ShallowReference;
}

export interface TestResultDocument {
    operationReference?: TestOperationReference;
    payload?: TestResultPayload;
}

/**
 * Group by for results
 */
export enum TestResultGroupBy {
    /**
     * Group the results by branches
     */
    Branch = 1,
    /**
     * Group the results by environment
     */
    Environment = 2,
}

export interface TestResultHistory {
    groupByField?: string;
    resultsForGroup?: TestResultHistoryDetailsForGroup[];
}

export interface TestResultHistoryDetailsForGroup {
    groupByValue?: any;
    latestResult?: TestCaseResult;
}

/**
 * List of test results filtered on the basis of GroupByValue
 */
export interface TestResultHistoryForGroup {
    /**
     * Display name of the group.
     */
    displayName?: string;
    /**
     * Name or Id of the group identifier by which results are grouped together.
     */
    groupByValue: string;
    /**
     * List of results for GroupByValue
     */
    results?: TestCaseResult[];
}

/**
 * Represents a Meta Data of a test result.
 */
export interface TestResultMetaData {
    /**
     * AutomatedTestName of test result.
     */
    automatedTestName?: string;
    /**
     * AutomatedTestStorage of test result.
     */
    automatedTestStorage?: string;
    /**
     * List of Flaky Identifier for TestCaseReferenceId
     */
    flakyIdentifiers?: TestFlakyIdentifier[];
    /**
     * Owner of test result.
     */
    owner?: string;
    /**
     * Priority of test result.
     */
    priority?: number;
    /**
     * ID of TestCaseReference.
     */
    testCaseReferenceId?: number;
    /**
     * TestCaseTitle of test result.
     */
    testCaseTitle?: string;
}

/**
 * Represents a TestResultMetaData Input
 */
export interface TestResultMetaDataUpdateInput {
    /**
     * List of Flaky Identifiers
     */
    flakyIdentifiers?: TestFlakyIdentifier[];
}

export interface TestResultMetaDataUpdateResponse {
    status?: string;
}

export interface TestResultModelBase {
    /**
     * Comment in result.
     */
    comment?: string;
    /**
     * Time when execution completed.
     */
    completedDate?: Date;
    /**
     * Duration of execution.
     */
    durationInMs?: number;
    /**
     * Error message in result.
     */
    errorMessage?: string;
    /**
     * Test outcome of result.
     */
    outcome?: string;
    /**
     * Time when execution started.
     */
    startedDate?: Date;
}

export interface TestResultParameter {
    actionPath?: string;
    actual?: number[];
    expected?: number[];
    iterationId?: number;
    parameterName?: string;
    testResultId?: number;
    testRunId?: number;
}

/**
 * Test parameter information in a test iteration.
 */
export interface TestResultParameterModel {
    /**
     * Test step path where parameter is referenced.
     */
    actionPath?: string;
    /**
     * Iteration ID.
     */
    iterationId?: number;
    /**
     * Name of parameter.
     */
    parameterName?: string;
    /**
     * This is step Id of test case. For shared step, it is step Id of shared step in test case workitem; step Id in shared step. Example: TestCase workitem has two steps: 1) Normal step with Id = 1 2) Shared Step with Id = 2. Inside shared step: a) Normal Step with Id = 1 Value for StepIdentifier for First step: "1" Second step: "2;1"
     */
    stepIdentifier?: string;
    /**
     * Url of test parameter.
     */
    url?: string;
    /**
     * Value of parameter.
     */
    value?: string;
}

export interface TestResultPayload {
    comment?: string;
    name?: string;
    stream?: string;
}

export interface TestResultReset2 {
    auditIdentity?: string;
    dateModified?: Date;
    projectId?: string;
    revision?: number;
    testResultId?: number;
    testResultRV?: number[];
    testRunId?: number;
}

export interface TestResultsContext {
    build?: BuildReference;
    contextType?: TestResultsContextType;
    release?: ReleaseReference;
}

export enum TestResultsContextType {
    Build = 1,
    Release = 2,
}

export interface TestResultsDetails {
    groupByField?: string;
    resultsForGroup?: TestResultsDetailsForGroup[];
}

export interface TestResultsDetailsForGroup {
    groupByValue?: any;
    results?: TestCaseResult[];
    resultsCountByOutcome?: { [key: number] : AggregatedResultsByOutcome; };
    tags?: string[];
}

export interface TestResultsEx2 {
    bitValue?: boolean;
    creationDate?: Date;
    dateTimeValue?: Date;
    fieldId?: number;
    fieldName?: string;
    floatValue?: number;
    guidValue?: string;
    intValue?: number;
    projectId?: string;
    stringValue?: string;
    testResultId?: number;
    testRunId?: number;
}

export interface TestResultsGroupsForBuild {
    /**
     * BuildId for which groupby result is fetched.
     */
    buildId: number;
    /**
     * The group by results
     */
    fields?: FieldDetailsForTestResults[];
}

export interface TestResultsGroupsForRelease {
    /**
     * The group by results
     */
    fields?: FieldDetailsForTestResults[];
    /**
     * Release Environment Id for which groupby result is fetched.
     */
    releaseEnvId?: number;
    /**
     * ReleaseId for which groupby result is fetched.
     */
    releaseId: number;
}

export interface TestResultsQuery {
    fields?: string[];
    results?: TestCaseResult[];
    resultsFilter?: ResultsFilter;
}

export interface TestResultSummary {
    aggregatedResultsAnalysis?: AggregatedResultsAnalysis;
    noConfigRunsCount?: number;
    teamProject?: TfsCoreInterfaces.TeamProjectReference;
    testFailures?: TestFailuresAnalysis;
    testResultsContext?: TestResultsContext;
    totalRunsCount?: number;
}

export interface TestResultTrendFilter {
    branchNames?: string[];
    buildCount?: number;
    definitionIds: number[];
    envDefinitionIds?: number[];
    maxCompleteDate?: Date;
    publishContext?: string;
    testRunTitles?: string[];
    trendDays?: number;
}

/**
 * Test run details.
 */
export interface TestRun {
    /**
     * Build associated with this test run.
     */
    build?: ShallowReference;
    /**
     * Build configuration details associated with this test run.
     */
    buildConfiguration?: BuildConfiguration;
    /**
     * Comments entered by those analyzing the run.
     */
    comment?: string;
    /**
     * Completed date time of the run.
     */
    completedDate?: Date;
    controller?: string;
    createdDate?: Date;
    customFields?: CustomTestField[];
    dropLocation?: string;
    dtlAutEnvironment?: ShallowReference;
    dtlEnvironment?: ShallowReference;
    dtlEnvironmentCreationDetails?: DtlEnvironmentDetails;
    /**
     * Due date and time for test run.
     */
    dueDate?: Date;
    /**
     * Error message associated with the run.
     */
    errorMessage?: string;
    filter?: RunFilter;
    /**
     * ID of the test run.
     */
    id: number;
    incompleteTests?: number;
    /**
     * true if test run is automated, false otherwise.
     */
    isAutomated: boolean;
    /**
     * The iteration to which the run belongs.
     */
    iteration?: string;
    /**
     * Team foundation ID of the last updated the test run.
     */
    lastUpdatedBy?: VSSInterfaces.IdentityRef;
    /**
     * Last updated date and time
     */
    lastUpdatedDate?: Date;
    /**
     * Name of the test run.
     */
    name: string;
    notApplicableTests?: number;
    /**
     * Team Foundation ID of the owner of the runs.
     */
    owner?: VSSInterfaces.IdentityRef;
    /**
     * Number of passed tests in the run
     */
    passedTests?: number;
    phase?: string;
    /**
     * Test plan associated with this test run.
     */
    plan?: ShallowReference;
    postProcessState?: string;
    /**
     * Project associated with this run.
     */
    project?: ShallowReference;
    release?: ReleaseReference;
    releaseEnvironmentUri?: string;
    releaseUri?: string;
    revision?: number;
    runStatistics?: RunStatistic[];
    /**
     * Start date time of the run.
     */
    startedDate?: Date;
    /**
     * The state of the run. { NotStarted, InProgress, Waiting }
     */
    state?: string;
    substate?: TestRunSubstate;
    /**
     * Tags attached with this test run.
     */
    tags?: TestTag[];
    /**
     * Test environment associated with the run.
     */
    testEnvironment?: TestEnvironment;
    testMessageLogId?: number;
    testSettings?: ShallowReference;
    /**
     * Total tests in the run
     */
    totalTests?: number;
    unanalyzedTests?: number;
    /**
     * Url of the test run
     */
    url: string;
    webAccessUrl?: string;
}

export interface TestRun2 {
    buildConfigurationId?: number;
    buildNumber?: string;
    comment?: string;
    completeDate?: Date;
    controller?: string;
    coverageId?: number;
    creationDate?: Date;
    deletedOn?: Date;
    dropLocation?: string;
    dueDate?: Date;
    errorMessage?: string;
    incompleteTests?: number;
    isAutomated?: boolean;
    isBvt?: boolean;
    isMigrated?: boolean;
    iterationId?: number;
    lastUpdated?: Date;
    lastUpdatedBy?: string;
    legacySharePath?: string;
    maxReservedResultId?: number;
    notApplicableTests?: number;
    owner?: string;
    passedTests?: number;
    postProcessState?: number;
    projectId?: string;
    publicTestSettingsId?: number;
    releaseEnvironmentUri?: string;
    releaseUri?: string;
    revision?: number;
    startDate?: Date;
    state?: number;
    testEnvironmentId?: string;
    testMessageLogId?: number;
    testPlanId?: number;
    testRunContextId?: number;
    testRunId?: number;
    testSettingsId?: number;
    title?: string;
    totalTests?: number;
    type?: number;
    unanalyzedTests?: number;
    version?: number;
}

export interface TestRunCanceledEvent extends TestRunEvent {
}

export interface TestRunContext2 {
    buildRefId?: number;
    projectId?: string;
    releaseRefId?: number;
    sourceWorkflow?: string;
    testRunContextId?: number;
}

/**
 * Test Run Code Coverage Details
 */
export interface TestRunCoverage {
    /**
     * Last Error
     */
    lastError?: string;
    /**
     * List of Modules Coverage
     */
    modules?: ModuleCoverage[];
    /**
     * State
     */
    state?: string;
    /**
     * Reference of test Run.
     */
    testRun?: ShallowReference;
}

export interface TestRunCreatedEvent extends TestRunEvent {
}

export interface TestRunEvent {
    testRun: TestRun;
}

export interface TestRunEx2 {
    bitValue?: boolean;
    createdDate?: Date;
    dateTimeValue?: Date;
    fieldId?: number;
    fieldName?: string;
    floatValue?: number;
    guidValue?: string;
    intValue?: number;
    projectId?: string;
    stringValue?: string;
    testRunId?: number;
}

export interface TestRunExtended2 {
    autEnvironmentUrl?: string;
    csmContent?: string;
    csmParameters?: string;
    projectId?: string;
    sourceFilter?: string;
    subscriptionName?: string;
    substate?: number;
    testCaseFilter?: string;
    testEnvironmentUrl?: string;
    testRunId?: number;
}

/**
 * The types of outcomes for test run.
 */
export enum TestRunOutcome {
    /**
     * Run with zero failed tests and has atleast one impacted test
     */
    Passed = 0,
    /**
     * Run with at-least one failed test.
     */
    Failed = 1,
    /**
     * Run with no impacted tests.
     */
    NotImpacted = 2,
    /**
     * Runs with All tests in other category.
     */
    Others = 3,
}

/**
 * The types of publish context for run.
 */
export enum TestRunPublishContext {
    /**
     * Run is published for Build Context.
     */
    Build = 1,
    /**
     * Run is published for Release Context.
     */
    Release = 2,
    /**
     * Run is published for any Context.
     */
    All = 3,
}

export interface TestRunStartedEvent extends TestRunEvent {
}

/**
 * The types of states for test run.
 */
export enum TestRunState {
    /**
     * Only used during an update to preserve the existing value.
     */
    Unspecified = 0,
    /**
     * The run is still being created.  No tests have started yet.
     */
    NotStarted = 1,
    /**
     * Tests are running.
     */
    InProgress = 2,
    /**
     * All tests have completed or been skipped.
     */
    Completed = 3,
    /**
     * Run is stopped and remaing tests have been aborted
     */
    Aborted = 4,
    /**
     * Run is currently initializing This is a legacy state and should not be used any more
     */
    Waiting = 5,
    /**
     * Run requires investigation because of a test point failure This is a legacy state and should not be used any more
     */
    NeedsInvestigation = 6,
}

/**
 * Test run statistics.
 */
export interface TestRunStatistic {
    run: ShallowReference;
    runStatistics?: RunStatistic[];
}

/**
 * The types of sub states for test run. It gives the user more info about the test run beyond the high level test run state
 */
export enum TestRunSubstate {
    None = 0,
    CreatingEnvironment = 1,
    RunningTests = 2,
    CanceledByUser = 3,
    AbortedBySystem = 4,
    TimedOut = 5,
    PendingAnalysis = 6,
    Analyzed = 7,
    CancellationInProgress = 8,
}

export interface TestRunSummary2 {
    isRerun?: boolean;
    projectId?: string;
    resultCount?: number;
    resultDuration?: number;
    runDuration?: number;
    testOutcome?: number;
    testRunCompletedDate?: Date;
    testRunContextId?: number;
    testRunId?: number;
    testRunStatsId?: number;
}

export interface TestRunWithDtlEnvEvent extends TestRunEvent {
    configurationIds: number[];
    mappedTestRunEventType: string;
    runTimeout: any;
    testConfigurationsMapping: string;
}

/**
 * Test Session
 */
export interface TestSession {
    /**
     * Area path of the test session
     */
    area?: ShallowReference;
    /**
     * Comments in the test session
     */
    comment?: string;
    /**
     * Duration of the session
     */
    endDate?: Date;
    /**
     * Id of the test session
     */
    id: number;
    /**
     * Last Updated By  Reference
     */
    lastUpdatedBy?: VSSInterfaces.IdentityRef;
    /**
     * Last updated date
     */
    lastUpdatedDate?: Date;
    /**
     * Owner of the test session
     */
    owner?: VSSInterfaces.IdentityRef;
    /**
     * Project to which the test session belongs
     */
    project?: ShallowReference;
    /**
     * Generic store for test session data
     */
    propertyBag?: PropertyBag;
    /**
     * Revision of the test session
     */
    revision?: number;
    /**
     * Source of the test session
     */
    source?: TestSessionSource;
    /**
     * Start date
     */
    startDate?: Date;
    /**
     * State of the test session
     */
    state?: TestSessionState;
    /**
     * Title of the test session
     */
    title: string;
    /**
     * Url of Test Session Resource
     */
    url?: string;
}

export interface TestSessionExploredWorkItemReference extends TestSessionWorkItemReference {
    /**
     * Workitem references of workitems filed as a part of the current workitem exploration.
     */
    associatedWorkItems?: TestSessionWorkItemReference[];
    /**
     * Time when exploration of workitem ended.
     */
    endTime?: Date;
    /**
     * Time when explore of workitem was started.
     */
    startTime?: Date;
}

/**
 * Represents the source from which the test session was created
 */
export enum TestSessionSource {
    /**
     * Source of test session uncertain as it is stale
     */
    Unknown = 0,
    /**
     * The session was created from Microsoft Test Manager exploratory desktop tool.
     */
    XTDesktop = 1,
    /**
     * The session was created from feedback client.
     */
    FeedbackDesktop = 2,
    /**
     * The session was created from browser extension.
     */
    XTWeb = 3,
    /**
     * The session was created from browser extension.
     */
    FeedbackWeb = 4,
    /**
     * The session was created from web access using Microsoft Test Manager exploratory desktop tool.
     */
    XTDesktop2 = 5,
    /**
     * To show sessions from all supported sources.
     */
    SessionInsightsForAll = 6,
}

/**
 * Represents the state of the test session.
 */
export enum TestSessionState {
    /**
     * Only used during an update to preserve the existing value.
     */
    Unspecified = 0,
    /**
     * The session is still being created.
     */
    NotStarted = 1,
    /**
     * The session is running.
     */
    InProgress = 2,
    /**
     * The session has paused.
     */
    Paused = 3,
    /**
     * The session has completed.
     */
    Completed = 4,
    /**
     * This is required for Feedback session which are declined
     */
    Declined = 5,
}

export interface TestSessionWorkItemReference {
    /**
     * Id of the workitem
     */
    id: number;
    /**
     * Type of the workitem
     */
    type?: string;
}

/**
 * Represents the test settings of the run. Used to create test settings and fetch test settings
 */
export interface TestSettings {
    /**
     * Area path required to create test settings
     */
    areaPath?: string;
    /**
     * Description of the test settings. Used in create test settings.
     */
    description?: string;
    /**
     * Indicates if the tests settings is public or private.Used in create test settings.
     */
    isPublic?: boolean;
    /**
     * Xml string of machine roles. Used in create test settings.
     */
    machineRoles?: string;
    /**
     * Test settings content.
     */
    testSettingsContent: string;
    /**
     * Test settings id.
     */
    testSettingsId?: number;
    /**
     * Test settings name.
     */
    testSettingsName: string;
}

/**
 * Represents the test settings of the run. Used to create test settings and fetch test settings
 */
export interface TestSettings2 {
    /**
     * Area path required to create test settings
     */
    areaPath?: string;
    createdBy?: VSSInterfaces.IdentityRef;
    createdDate?: Date;
    /**
     * Description of the test settings. Used in create test settings.
     */
    description?: string;
    /**
     * Indicates if the tests settings is public or private.Used in create test settings.
     */
    isPublic?: boolean;
    lastUpdatedBy?: VSSInterfaces.IdentityRef;
    lastUpdatedDate?: Date;
    /**
     * Xml string of machine roles. Used in create test settings.
     */
    machineRoles?: string;
    /**
     * Test settings content.
     */
    testSettingsContent: string;
    /**
     * Test settings id.
     */
    testSettingsId?: number;
    /**
     * Test settings name.
     */
    testSettingsName: string;
}

export interface TestSettingsMachineRole {
    isExecution?: boolean;
    name?: string;
}

/**
 * Represents a sub result of a test result.
 */
export interface TestSubResult {
    /**
     * Comment in sub result.
     */
    comment?: string;
    /**
     * Time when test execution completed.
     */
    completedDate?: Date;
    /**
     * Machine where test executed.
     */
    computerName?: string;
    /**
     * Reference to test configuration.
     */
    configuration?: ShallowReference;
    /**
     * Additional properties of sub result.
     */
    customFields?: CustomTestField[];
    /**
     * Name of sub result.
     */
    displayName?: string;
    /**
     * Duration of test execution.
     */
    durationInMs?: number;
    /**
     * Error message in sub result.
     */
    errorMessage?: string;
    /**
     * ID of sub result.
     */
    id?: number;
    /**
     * Time when result last updated.
     */
    lastUpdatedDate?: Date;
    /**
     * Outcome of sub result.
     */
    outcome?: string;
    /**
     * Immediate parent ID of sub result.
     */
    parentId?: number;
    /**
     * Hierarchy type of the result, default value of None means its leaf node.
     */
    resultGroupType?: ResultGroupType;
    /**
     * Index number of sub result.
     */
    sequenceId?: number;
    /**
     * Stacktrace.
     */
    stackTrace?: string;
    /**
     * Time when test execution started.
     */
    startedDate?: Date;
    /**
     * List of sub results inside a sub result, if ResultGroupType is not None, it holds corresponding type sub results.
     */
    subResults?: TestSubResult[];
    /**
     * Reference to test result.
     */
    testResult?: TestCaseResultIdentifier;
    /**
     * Url of sub result.
     */
    url?: string;
}

/**
 * Test suite
 */
export interface TestSuite {
    /**
     * Area uri of the test suite.
     */
    areaUri?: string;
    /**
     * Child test suites of current test suite.
     */
    children?: TestSuite[];
    /**
     * Test suite default configuration.
     */
    defaultConfigurations?: ShallowReference[];
    /**
     * Test suite default testers.
     */
    defaultTesters?: ShallowReference[];
    /**
     * Id of test suite.
     */
    id: number;
    /**
     * Default configuration was inherited or not.
     */
    inheritDefaultConfigurations?: boolean;
    /**
     * Last error for test suite.
     */
    lastError?: string;
    /**
     * Last populated date.
     */
    lastPopulatedDate?: Date;
    /**
     * IdentityRef of user who has updated test suite recently.
     */
    lastUpdatedBy?: VSSInterfaces.IdentityRef;
    /**
     * Last update date.
     */
    lastUpdatedDate?: Date;
    /**
     * Name of test suite.
     */
    name: string;
    /**
     * Test suite parent shallow reference.
     */
    parent?: ShallowReference;
    /**
     * Test plan to which the test suite belongs.
     */
    plan: ShallowReference;
    /**
     * Test suite project shallow reference.
     */
    project?: ShallowReference;
    /**
     * Test suite query string, for dynamic suites.
     */
    queryString?: string;
    /**
     * Test suite requirement id.
     */
    requirementId?: number;
    /**
     * Test suite revision.
     */
    revision?: number;
    /**
     * State of test suite.
     */
    state?: string;
    /**
     * List of shallow reference of suites.
     */
    suites?: ShallowReference[];
    /**
     * Test suite type.
     */
    suiteType?: string;
    /**
     * Test cases count.
     */
    testCaseCount?: number;
    /**
     * Test case url.
     */
    testCasesUrl?: string;
    /**
     * Used in tree view. If test suite is root suite then, it is name of plan otherwise title of the suite.
     */
    text?: string;
    /**
     * Url of test suite.
     */
    url?: string;
}

/**
 * Test suite clone request
 */
export interface TestSuiteCloneRequest {
    /**
     * Clone options for cloning the test suite.
     */
    cloneOptions?: CloneOptions;
    /**
     * Suite id under which, we have to clone the suite.
     */
    destinationSuiteId?: number;
    /**
     * Destination suite project name.
     */
    destinationSuiteProjectName?: string;
}

export interface TestSummaryForWorkItem {
    summary?: AggregatedDataForResultTrend;
    workItem: WorkItemReference;
}

/**
 * Tag attached to a run or result.
 */
export interface TestTag {
    /**
     * Name of the tag, alphanumeric value less than 30 chars
     */
    name: string;
}

/**
 * Test tag summary for build or release grouped by test run.
 */
export interface TestTagSummary {
    /**
     * Dictionary which contains tags associated with a test run.
     */
    tagsGroupByTestArtifact?: { [key: number] : TestTag[]; };
}

/**
 * Tags to update to a run or result.
 */
export interface TestTagsUpdateModel {
    tags?: { key: OperationType; value: TestTag[] }[];
}

export interface TestToWorkItemLinks {
    test: TestMethod;
    workItems?: WorkItemReference[];
}

export interface TestVariable {
    /**
     * Description of the test variable
     */
    description?: string;
    /**
     * Id of the test variable
     */
    id: number;
    /**
     * Name of the test variable
     */
    name: string;
    /**
     * Project to which the test variable belongs
     */
    project?: ShallowReference;
    /**
     * Revision
     */
    revision?: number;
    /**
     * Url of the test variable
     */
    url?: string;
    /**
     * List of allowed values
     */
    values?: string[];
}

export interface UpdatedProperties {
    id?: number;
    lastUpdated?: Date;
    lastUpdatedBy?: string;
    lastUpdatedByName?: string;
    revision?: number;
}

export interface UpdateTestRunRequest {
    attachmentsToAdd?: TestResultAttachment[];
    attachmentsToDelete?: TestResultAttachmentIdentity[];
    projectName?: string;
    shouldHyderate?: boolean;
    testRun?: LegacyTestRun;
}

export interface UpdateTestRunResponse {
    attachmentIds?: number[];
    updatedProperties?: UpdatedProperties;
}

export interface UploadAttachmentsRequest {
    attachments?: HttpPostedTcmAttachment[];
    requestParams?: { [key: string] : string; };
}

export interface WorkItemReference {
    id?: string;
    name?: string;
    type?: string;
    url?: string;
    webUrl?: string;
}

export interface WorkItemToTestLinks {
    executedIn?: Service;
    tests?: TestMethod[];
    workItem: WorkItemReference;
}

export var TypeInfo = {
    AfnStrip: <any>{
    },
    AggregatedDataForResultTrend: <any>{
    },
    AggregatedResultsAnalysis: <any>{
    },
    AggregatedResultsByOutcome: <any>{
    },
    AggregatedRunsByOutcome: <any>{
    },
    AggregatedRunsByState: <any>{
    },
    AttachmentType: {
        enumValues: {
            "generalAttachment": 0,
            "afnStrip": 1,
            "bugFilingData": 2,
            "codeCoverage": 3,
            "intermediateCollectorData": 4,
            "runConfig": 5,
            "testImpactDetails": 6,
            "tmiTestRunDeploymentFiles": 7,
            "tmiTestRunReverseDeploymentFiles": 8,
            "tmiTestResultDetail": 9,
            "tmiTestRunSummary": 10,
            "consoleLog": 11
        }
    },
    BatchResponse: <any>{
    },
    BuildConfiguration: <any>{
    },
    BuildCoverage: <any>{
    },
    BuildReference2: <any>{
    },
    BulkResultUpdateRequest: <any>{
    },
    CloneOperationInformation: <any>{
    },
    CloneOperationState: {
        enumValues: {
            "failed": 2,
            "inProgress": 1,
            "queued": 0,
            "succeeded": 3
        }
    },
    CodeCoverageSummary: <any>{
    },
    Coverage2: <any>{
    },
    CoverageQueryFlags: {
        enumValues: {
            "modules": 1,
            "functions": 2,
            "blockData": 4
        }
    },
    CoverageStatus: {
        enumValues: {
            "covered": 0,
            "notCovered": 1,
            "partiallyCovered": 2
        }
    },
    CoverageSummaryStatus: {
        enumValues: {
            "none": 0,
            "pending": 1,
            "completed": 2,
            "finalized": 3
        }
    },
    CreateTestMessageLogEntryRequest: <any>{
    },
    CreateTestResultsRequest: <any>{
    },
    CreateTestRunRequest: <any>{
    },
    CustomTestFieldDefinition: <any>{
    },
    CustomTestFieldScope: {
        enumValues: {
            "none": 0,
            "testRun": 1,
            "testResult": 2,
            "system": 4,
            "all": 7
        }
    },
    CustomTestFieldType: {
        enumValues: {
            "bit": 2,
            "dateTime": 4,
            "int": 8,
            "float": 6,
            "string": 12,
            "guid": 14
        }
    },
    DatedTestFieldData: <any>{
    },
    FailingSince: <any>{
    },
    FetchTestResultsResponse: <any>{
    },
    LastResultDetails: <any>{
    },
    LegacyBuildConfiguration: <any>{
    },
    LegacyReleaseReference: <any>{
    },
    LegacyTestCaseResult: <any>{
    },
    LegacyTestRun: <any>{
    },
    LegacyTestSettings: <any>{
    },
    OperationType: {
        enumValues: {
            "add": 1,
            "delete": 2
        }
    },
    PointLastResult: <any>{
    },
    PointsResults2: <any>{
    },
    QueryTestActionResultResponse: <any>{
    },
    ReleaseReference: <any>{
    },
    ReleaseReference2: <any>{
    },
    RequirementsToTestsMapping2: <any>{
    },
    Response: <any>{
    },
    ResultDetails: {
        enumValues: {
            "none": 0,
            "iterations": 1,
            "workItems": 2,
            "subResults": 4,
            "point": 8
        }
    },
    ResultGroupType: {
        enumValues: {
            "none": 0,
            "rerun": 1,
            "dataDriven": 2,
            "orderedTest": 3,
            "generic": 4
        }
    },
    ResultObjectType: {
        enumValues: {
            "testSuite": 0,
            "testPlan": 1
        }
    },
    ResultRetentionSettings: <any>{
    },
    ResultsByQueryResponse: <any>{
    },
    ResultsFilter: <any>{
    },
    ResultUpdateRequest: <any>{
    },
    ResultUpdateRequestModel: <any>{
    },
    ResultUpdateResponse: <any>{
    },
    RunCreateModel: <any>{
    },
    RunSummaryModel: <any>{
    },
    RunType: {
        enumValues: {
            "unspecified": 0,
            "normal": 1,
            "blocking": 2,
            "web": 4,
            "mtrRunInitiatedFromWeb": 8,
            "runWithDtlEnv": 16,
            "noConfigRun": 32
        }
    },
    RunUpdateModel: <any>{
    },
    Service: {
        enumValues: {
            "any": 0,
            "tcm": 1,
            "tfs": 2
        }
    },
    SuiteExpand: {
        enumValues: {
            "children": 1,
            "defaultTesters": 2
        }
    },
    TCMServiceDataMigrationStatus: {
        enumValues: {
            "notStarted": 0,
            "inProgress": 1,
            "completed": 2,
            "failed": 3
        }
    },
    TestActionResult: <any>{
    },
    TestActionResult2: <any>{
    },
    TestActionResultModel: <any>{
    },
    TestAttachment: <any>{
    },
    TestAuthoringDetails: <any>{
    },
    TestCaseReference2: <any>{
    },
    TestCaseResult: <any>{
    },
    TestConfiguration: <any>{
    },
    TestConfigurationState: {
        enumValues: {
            "active": 1,
            "inactive": 2
        }
    },
    TestExecutionReportData: <any>{
    },
    TestExtensionField: <any>{
    },
    TestExtensionFieldDetails: <any>{
    },
    TestFailuresAnalysis: <any>{
    },
    TestHistoryQuery: <any>{
    },
    TestIterationDetailsModel: <any>{
    },
    TestLog: <any>{
    },
    TestLogReference: <any>{
    },
    TestLogScope: {
        enumValues: {
            "run": 0,
            "build": 1,
            "release": 2
        }
    },
    TestLogStatus: <any>{
    },
    TestLogStatusCode: {
        enumValues: {
            "success": 0,
            "failed": 1,
            "fileAlreadyExists": 2,
            "invalidInput": 3,
            "invalidFileName": 4,
            "invalidContainer": 5,
            "transferFailed": 6,
            "featureDisabled": 7,
            "buildDoesNotExist": 8,
            "runDoesNotExist": 9,
            "containerNotCreated": 10,
            "apiNotSupported": 11,
            "fileSizeExceeds": 12,
            "containerNotFound": 13
        }
    },
    TestLogStoreEndpointDetails: <any>{
    },
    TestLogStoreEndpointType: {
        enumValues: {
            "root": 1,
            "file": 2
        }
    },
    TestLogStoreOperationType: {
        enumValues: {
            "read": 1,
            "create": 2,
            "readAndCreate": 3
        }
    },
    TestLogType: {
        enumValues: {
            "generalAttachment": 1,
            "codeCoverage": 2,
            "testImpact": 3,
            "intermediate": 4
        }
    },
    TestMessageLogDetails: <any>{
    },
    TestMessageLogEntry: <any>{
    },
    TestMessageLogEntry2: <any>{
    },
    TestOutcome: {
        enumValues: {
            "unspecified": 0,
            "none": 1,
            "passed": 2,
            "failed": 3,
            "inconclusive": 4,
            "timeout": 5,
            "aborted": 6,
            "blocked": 7,
            "notExecuted": 8,
            "warning": 9,
            "error": 10,
            "notApplicable": 11,
            "paused": 12,
            "inProgress": 13,
            "notImpacted": 14,
            "maxValue": 14
        }
    },
    TestParameter2: <any>{
    },
    TestPlan: <any>{
    },
    TestPlanCloneRequest: <any>{
    },
    TestPlanHubData: <any>{
    },
    TestPlansWithSelection: <any>{
    },
    TestPoint: <any>{
    },
    TestPointReference: <any>{
    },
    TestPointsEvent: <any>{
    },
    TestPointsQuery: <any>{
    },
    TestPointState: {
        enumValues: {
            "none": 0,
            "ready": 1,
            "completed": 2,
            "notReady": 3,
            "inProgress": 4,
            "maxValue": 4
        }
    },
    TestPointsUpdatedEvent: <any>{
    },
    TestResult2: <any>{
    },
    TestResultAcrossProjectResponse: <any>{
    },
    TestResultAttachment: <any>{
    },
    TestResultGroupBy: {
        enumValues: {
            "branch": 1,
            "environment": 2
        }
    },
    TestResultHistory: <any>{
    },
    TestResultHistoryDetailsForGroup: <any>{
    },
    TestResultHistoryForGroup: <any>{
    },
    TestResultModelBase: <any>{
    },
    TestResultReset2: <any>{
    },
    TestResultsContext: <any>{
    },
    TestResultsContextType: {
        enumValues: {
            "build": 1,
            "release": 2
        }
    },
    TestResultsDetails: <any>{
    },
    TestResultsDetailsForGroup: <any>{
    },
    TestResultsEx2: <any>{
    },
    TestResultsQuery: <any>{
    },
    TestResultSummary: <any>{
    },
    TestResultTrendFilter: <any>{
    },
    TestRun: <any>{
    },
    TestRun2: <any>{
    },
    TestRunCanceledEvent: <any>{
    },
    TestRunCreatedEvent: <any>{
    },
    TestRunEvent: <any>{
    },
    TestRunEx2: <any>{
    },
    TestRunOutcome: {
        enumValues: {
            "passed": 0,
            "failed": 1,
            "notImpacted": 2,
            "others": 3
        }
    },
    TestRunPublishContext: {
        enumValues: {
            "build": 1,
            "release": 2,
            "all": 3
        }
    },
    TestRunStartedEvent: <any>{
    },
    TestRunState: {
        enumValues: {
            "unspecified": 0,
            "notStarted": 1,
            "inProgress": 2,
            "completed": 3,
            "aborted": 4,
            "waiting": 5,
            "needsInvestigation": 6
        }
    },
    TestRunSubstate: {
        enumValues: {
            "none": 0,
            "creatingEnvironment": 1,
            "runningTests": 2,
            "canceledByUser": 3,
            "abortedBySystem": 4,
            "timedOut": 5,
            "pendingAnalysis": 6,
            "analyzed": 7,
            "cancellationInProgress": 8
        }
    },
    TestRunSummary2: <any>{
    },
    TestRunWithDtlEnvEvent: <any>{
    },
    TestSession: <any>{
    },
    TestSessionExploredWorkItemReference: <any>{
    },
    TestSessionSource: {
        enumValues: {
            "unknown": 0,
            "xtDesktop": 1,
            "feedbackDesktop": 2,
            "xtWeb": 3,
            "feedbackWeb": 4,
            "xtDesktop2": 5,
            "sessionInsightsForAll": 6
        }
    },
    TestSessionState: {
        enumValues: {
            "unspecified": 0,
            "notStarted": 1,
            "inProgress": 2,
            "paused": 3,
            "completed": 4,
            "declined": 5
        }
    },
    TestSettings2: <any>{
    },
    TestSubResult: <any>{
    },
    TestSuite: <any>{
    },
    TestSummaryForWorkItem: <any>{
    },
    UpdatedProperties: <any>{
    },
    UpdateTestRunRequest: <any>{
    },
    UpdateTestRunResponse: <any>{
    },
    WorkItemToTestLinks: <any>{
    },
};

TypeInfo.AfnStrip.fields = {
    creationDate: {
        isDate: true,
    }
};

TypeInfo.AggregatedDataForResultTrend.fields = {
    resultsByOutcome: {
        isDictionary: true,
        dictionaryKeyEnumType: TypeInfo.TestOutcome,
        dictionaryValueTypeInfo: TypeInfo.AggregatedResultsByOutcome
    },
    runSummaryByState: {
        isDictionary: true,
        dictionaryKeyEnumType: TypeInfo.TestRunState,
        dictionaryValueTypeInfo: TypeInfo.AggregatedRunsByState
    },
    testResultsContext: {
        typeInfo: TypeInfo.TestResultsContext
    }
};

TypeInfo.AggregatedResultsAnalysis.fields = {
    notReportedResultsByOutcome: {
        isDictionary: true,
        dictionaryKeyEnumType: TypeInfo.TestOutcome,
        dictionaryValueTypeInfo: TypeInfo.AggregatedResultsByOutcome
    },
    previousContext: {
        typeInfo: TypeInfo.TestResultsContext
    },
    resultsByOutcome: {
        isDictionary: true,
        dictionaryKeyEnumType: TypeInfo.TestOutcome,
        dictionaryValueTypeInfo: TypeInfo.AggregatedResultsByOutcome
    },
    runSummaryByOutcome: {
        isDictionary: true,
        dictionaryKeyEnumType: TypeInfo.TestRunOutcome,
        dictionaryValueTypeInfo: TypeInfo.AggregatedRunsByOutcome
    },
    runSummaryByState: {
        isDictionary: true,
        dictionaryKeyEnumType: TypeInfo.TestRunState,
        dictionaryValueTypeInfo: TypeInfo.AggregatedRunsByState
    }
};

TypeInfo.AggregatedResultsByOutcome.fields = {
    outcome: {
        enumType: TypeInfo.TestOutcome
    }
};

TypeInfo.AggregatedRunsByOutcome.fields = {
    outcome: {
        enumType: TypeInfo.TestRunOutcome
    }
};

TypeInfo.AggregatedRunsByState.fields = {
    resultsByOutcome: {
        isDictionary: true,
        dictionaryKeyEnumType: TypeInfo.TestOutcome,
        dictionaryValueTypeInfo: TypeInfo.AggregatedResultsByOutcome
    },
    state: {
        enumType: TypeInfo.TestRunState
    }
};

TypeInfo.BatchResponse.fields = {
    responses: {
        isArray: true,
        typeInfo: TypeInfo.Response
    },
};

TypeInfo.BuildConfiguration.fields = {
    creationDate: {
        isDate: true,
    }
};

TypeInfo.BuildCoverage.fields = {
    configuration: {
        typeInfo: TypeInfo.BuildConfiguration
    }
};

TypeInfo.BuildReference2.fields = {
    createdDate: {
        isDate: true,
    }
};

TypeInfo.BulkResultUpdateRequest.fields = {
    requests: {
        isArray: true,
        typeInfo: TypeInfo.ResultUpdateRequest
    }
};

TypeInfo.CloneOperationInformation.fields = {
    completionDate: {
        isDate: true,
    },
    creationDate: {
        isDate: true,
    },
    resultObjectType: {
        enumType: TypeInfo.ResultObjectType
    },
    state: {
        enumType: TypeInfo.CloneOperationState
    }
};

TypeInfo.CodeCoverageSummary.fields = {
    status: {
        enumType: TypeInfo.CoverageSummaryStatus
    }
};

TypeInfo.Coverage2.fields = {
    dateCreated: {
        isDate: true,
    },
    dateModified: {
        isDate: true,
    }
};

TypeInfo.CreateTestMessageLogEntryRequest.fields = {
    testMessageLogEntry: {
        isArray: true,
        typeInfo: TypeInfo.TestMessageLogEntry
    }
};

TypeInfo.CreateTestResultsRequest.fields = {
    results: {
        isArray: true,
        typeInfo: TypeInfo.LegacyTestCaseResult
    }
};

TypeInfo.CreateTestRunRequest.fields = {
    results: {
        isArray: true,
        typeInfo: TypeInfo.LegacyTestCaseResult
    },
    testRun: {
        typeInfo: TypeInfo.LegacyTestRun
    },
    testSettings: {
        typeInfo: TypeInfo.LegacyTestSettings
    }
};

TypeInfo.CustomTestFieldDefinition.fields = {
    fieldType: {
        enumType: TypeInfo.CustomTestFieldType
    },
    scope: {
        enumType: TypeInfo.CustomTestFieldScope
    }
};

TypeInfo.DatedTestFieldData.fields = {
    date: {
        isDate: true,
    }
};

TypeInfo.FailingSince.fields = {
    date: {
        isDate: true,
    },
    release: {
        typeInfo: TypeInfo.ReleaseReference
    }
};

TypeInfo.FetchTestResultsResponse.fields = {
    actionResults: {
        isArray: true,
        typeInfo: TypeInfo.TestActionResult
    },
    attachments: {
        isArray: true,
        typeInfo: TypeInfo.TestResultAttachment
    },
    results: {
        isArray: true,
        typeInfo: TypeInfo.LegacyTestCaseResult
    }
};

TypeInfo.LastResultDetails.fields = {
    dateCompleted: {
        isDate: true,
    }
};

TypeInfo.LegacyBuildConfiguration.fields = {
    completedDate: {
        isDate: true,
    },
    createdDate: {
        isDate: true,
    }
};

TypeInfo.LegacyReleaseReference.fields = {
    environmentCreationDate: {
        isDate: true,
    },
    releaseCreationDate: {
        isDate: true,
    }
};

TypeInfo.LegacyTestCaseResult.fields = {
    buildReference: {
        typeInfo: TypeInfo.LegacyBuildConfiguration
    },
    creationDate: {
        isDate: true,
    },
    customFields: {
        isArray: true,
        typeInfo: TypeInfo.TestExtensionField
    },
    dateCompleted: {
        isDate: true,
    },
    dateStarted: {
        isDate: true,
    },
    failingSince: {
        typeInfo: TypeInfo.FailingSince
    },
    lastUpdated: {
        isDate: true,
    },
    releaseReference: {
        typeInfo: TypeInfo.LegacyReleaseReference
    },
    resultGroupType: {
        enumType: TypeInfo.ResultGroupType
    },
    stackTrace: {
        typeInfo: TypeInfo.TestExtensionField
    }
};

TypeInfo.LegacyTestRun.fields = {
    buildReference: {
        typeInfo: TypeInfo.LegacyBuildConfiguration
    },
    completeDate: {
        isDate: true,
    },
    creationDate: {
        isDate: true,
    },
    customFields: {
        isArray: true,
        typeInfo: TypeInfo.TestExtensionField
    },
    dueDate: {
        isDate: true,
    },
    lastUpdated: {
        isDate: true,
    },
    releaseReference: {
        typeInfo: TypeInfo.LegacyReleaseReference
    },
    startDate: {
        isDate: true,
    },
    testMessageLogEntries: {
        isArray: true,
        typeInfo: TypeInfo.TestMessageLogDetails
    }
};

TypeInfo.LegacyTestSettings.fields = {
    createdDate: {
        isDate: true,
    },
    lastUpdated: {
        isDate: true,
    }
};

TypeInfo.PointLastResult.fields = {
    lastUpdatedDate: {
        isDate: true,
    }
};

TypeInfo.PointsResults2.fields = {
    lastUpdated: {
        isDate: true,
    }
};

TypeInfo.QueryTestActionResultResponse.fields = {
    testActionResults: {
        isArray: true,
        typeInfo: TypeInfo.TestActionResult
    },
    testAttachments: {
        isArray: true,
        typeInfo: TypeInfo.TestResultAttachment
    }
};

TypeInfo.ReleaseReference.fields = {
    creationDate: {
        isDate: true,
    },
    environmentCreationDate: {
        isDate: true,
    }
};

TypeInfo.ReleaseReference2.fields = {
    environmentCreationDate: {
        isDate: true,
    },
    releaseCreationDate: {
        isDate: true,
    }
};

TypeInfo.RequirementsToTestsMapping2.fields = {
    creationDate: {
        isDate: true,
    },
    deletionDate: {
        isDate: true,
    }
};

TypeInfo.Response.fields = {
};

TypeInfo.ResultRetentionSettings.fields = {
    lastUpdatedDate: {
        isDate: true,
    }
};

TypeInfo.ResultsByQueryResponse.fields = {
    testResults: {
        isArray: true,
        typeInfo: TypeInfo.LegacyTestCaseResult
    }
};

TypeInfo.ResultsFilter.fields = {
    executedIn: {
        enumType: TypeInfo.Service
    },
    maxCompleteDate: {
        isDate: true,
    },
    testResultsContext: {
        typeInfo: TypeInfo.TestResultsContext
    }
};

TypeInfo.ResultUpdateRequest.fields = {
    actionResultDeletes: {
        isArray: true,
        typeInfo: TypeInfo.TestActionResult
    },
    actionResults: {
        isArray: true,
        typeInfo: TypeInfo.TestActionResult
    },
    attachments: {
        isArray: true,
        typeInfo: TypeInfo.TestResultAttachment
    },
    testCaseResult: {
        typeInfo: TypeInfo.LegacyTestCaseResult
    }
};

TypeInfo.ResultUpdateRequestModel.fields = {
    actionResultDeletes: {
        isArray: true,
        typeInfo: TypeInfo.TestActionResultModel
    },
    actionResults: {
        isArray: true,
        typeInfo: TypeInfo.TestActionResultModel
    }
};

TypeInfo.ResultUpdateResponse.fields = {
    lastUpdated: {
        isDate: true,
    }
};

TypeInfo.RunCreateModel.fields = {
    buildReference: {
        typeInfo: TypeInfo.BuildConfiguration
    },
    releaseReference: {
        typeInfo: TypeInfo.ReleaseReference
    },
    runSummary: {
        isArray: true,
        typeInfo: TypeInfo.RunSummaryModel
    }
};

TypeInfo.RunSummaryModel.fields = {
    testOutcome: {
        enumType: TypeInfo.TestOutcome
    }
};

TypeInfo.RunUpdateModel.fields = {
    logEntries: {
        isArray: true,
        typeInfo: TypeInfo.TestMessageLogDetails
    },
    runSummary: {
        isArray: true,
        typeInfo: TypeInfo.RunSummaryModel
    },
    substate: {
        enumType: TypeInfo.TestRunSubstate
    }
};

TypeInfo.TestActionResult.fields = {
    creationDate: {
        isDate: true,
    },
    dateCompleted: {
        isDate: true,
    },
    dateStarted: {
        isDate: true,
    },
    lastUpdated: {
        isDate: true,
    }
};

TypeInfo.TestActionResult2.fields = {
    creationDate: {
        isDate: true,
    },
    dateCompleted: {
        isDate: true,
    },
    dateStarted: {
        isDate: true,
    },
    lastUpdated: {
        isDate: true,
    }
};

TypeInfo.TestActionResultModel.fields = {
    completedDate: {
        isDate: true,
    },
    startedDate: {
        isDate: true,
    }
};

TypeInfo.TestAttachment.fields = {
    attachmentType: {
        enumType: TypeInfo.AttachmentType
    },
    createdDate: {
        isDate: true,
    }
};

TypeInfo.TestAuthoringDetails.fields = {
    lastUpdated: {
        isDate: true,
    },
    state: {
        enumType: TypeInfo.TestPointState
    }
};

TypeInfo.TestCaseReference2.fields = {
    creationDate: {
        isDate: true,
    },
    lastRefTestRunDate: {
        isDate: true,
    }
};

TypeInfo.TestCaseResult.fields = {
    completedDate: {
        isDate: true,
    },
    createdDate: {
        isDate: true,
    },
    failingSince: {
        typeInfo: TypeInfo.FailingSince
    },
    iterationDetails: {
        isArray: true,
        typeInfo: TypeInfo.TestIterationDetailsModel
    },
    lastUpdatedDate: {
        isDate: true,
    },
    releaseReference: {
        typeInfo: TypeInfo.ReleaseReference
    },
    resultGroupType: {
        enumType: TypeInfo.ResultGroupType
    },
    startedDate: {
        isDate: true,
    },
    subResults: {
        isArray: true,
        typeInfo: TypeInfo.TestSubResult
    }
};

TypeInfo.TestConfiguration.fields = {
    lastUpdatedDate: {
        isDate: true,
    },
    state: {
        enumType: TypeInfo.TestConfigurationState
    }
};

TypeInfo.TestExecutionReportData.fields = {
    reportData: {
        isArray: true,
        typeInfo: TypeInfo.DatedTestFieldData
    }
};

TypeInfo.TestExtensionField.fields = {
    field: {
        typeInfo: TypeInfo.TestExtensionFieldDetails
    }
};

TypeInfo.TestExtensionFieldDetails.fields = {
    type: {
        enumType: SystemData.TypeInfo.SqlDbType
    }
};

TypeInfo.TestFailuresAnalysis.fields = {
    previousContext: {
        typeInfo: TypeInfo.TestResultsContext
    }
};

TypeInfo.TestHistoryQuery.fields = {
    groupBy: {
        enumType: TypeInfo.TestResultGroupBy
    },
    maxCompleteDate: {
        isDate: true,
    },
    resultsForGroup: {
        isArray: true,
        typeInfo: TypeInfo.TestResultHistoryForGroup
    }
};

TypeInfo.TestIterationDetailsModel.fields = {
    actionResults: {
        isArray: true,
        typeInfo: TypeInfo.TestActionResultModel
    },
    completedDate: {
        isDate: true,
    },
    startedDate: {
        isDate: true,
    }
};

TypeInfo.TestLog.fields = {
    logReference: {
        typeInfo: TypeInfo.TestLogReference
    },
    modifiedOn: {
        isDate: true,
    }
};

TypeInfo.TestLogReference.fields = {
    scope: {
        enumType: TypeInfo.TestLogScope
    },
    type: {
        enumType: TypeInfo.TestLogType
    }
};

TypeInfo.TestLogStatus.fields = {
    status: {
        enumType: TypeInfo.TestLogStatusCode
    }
};

TypeInfo.TestLogStoreEndpointDetails.fields = {
    endpointType: {
        enumType: TypeInfo.TestLogStoreEndpointType
    },
    status: {
        enumType: TypeInfo.TestLogStatusCode
    }
};

TypeInfo.TestMessageLogDetails.fields = {
    dateCreated: {
        isDate: true,
    }
};

TypeInfo.TestMessageLogEntry.fields = {
    dateCreated: {
        isDate: true,
    }
};

TypeInfo.TestMessageLogEntry2.fields = {
    dateCreated: {
        isDate: true,
    }
};

TypeInfo.TestParameter2.fields = {
    creationDate: {
        isDate: true,
    },
    dateModified: {
        isDate: true,
    }
};

TypeInfo.TestPlan.fields = {
    endDate: {
        isDate: true,
    },
    startDate: {
        isDate: true,
    },
    updatedDate: {
        isDate: true,
    }
};

TypeInfo.TestPlanCloneRequest.fields = {
    destinationTestPlan: {
        typeInfo: TypeInfo.TestPlan
    }
};

TypeInfo.TestPlanHubData.fields = {
    testPlan: {
        typeInfo: TypeInfo.TestPlan
    },
    testPoints: {
        isArray: true,
        typeInfo: TypeInfo.TestPoint
    },
    testSuites: {
        isArray: true,
        typeInfo: TypeInfo.TestSuite
    }
};

TypeInfo.TestPlansWithSelection.fields = {
    plans: {
        isArray: true,
        typeInfo: TypeInfo.TestPlan
    }
};

TypeInfo.TestPoint.fields = {
    lastResetToActive: {
        isDate: true,
    },
    lastResultDetails: {
        typeInfo: TypeInfo.LastResultDetails
    },
    lastUpdatedDate: {
        isDate: true,
    }
};

TypeInfo.TestPointReference.fields = {
    state: {
        enumType: TypeInfo.TestPointState
    }
};

TypeInfo.TestPointsEvent.fields = {
    testPoints: {
        isArray: true,
        typeInfo: TypeInfo.TestPointReference
    }
};

TypeInfo.TestPointsQuery.fields = {
    points: {
        isArray: true,
        typeInfo: TypeInfo.TestPoint
    }
};

TypeInfo.TestPointsUpdatedEvent.fields = {
    testPoints: {
        isArray: true,
        typeInfo: TypeInfo.TestPointReference
    }
};

TypeInfo.TestResult2.fields = {
    creationDate: {
        isDate: true,
    },
    dateCompleted: {
        isDate: true,
    },
    dateStarted: {
        isDate: true,
    },
    lastUpdated: {
        isDate: true,
    }
};

TypeInfo.TestResultAcrossProjectResponse.fields = {
    testResult: {
        typeInfo: TypeInfo.LegacyTestCaseResult
    }
};

TypeInfo.TestResultAttachment.fields = {
    attachmentType: {
        enumType: TypeInfo.AttachmentType
    },
    creationDate: {
        isDate: true,
    }
};

TypeInfo.TestResultHistory.fields = {
    resultsForGroup: {
        isArray: true,
        typeInfo: TypeInfo.TestResultHistoryDetailsForGroup
    }
};

TypeInfo.TestResultHistoryDetailsForGroup.fields = {
    latestResult: {
        typeInfo: TypeInfo.TestCaseResult
    }
};

TypeInfo.TestResultHistoryForGroup.fields = {
    results: {
        isArray: true,
        typeInfo: TypeInfo.TestCaseResult
    }
};

TypeInfo.TestResultModelBase.fields = {
    completedDate: {
        isDate: true,
    },
    startedDate: {
        isDate: true,
    }
};

TypeInfo.TestResultReset2.fields = {
    dateModified: {
        isDate: true,
    }
};

TypeInfo.TestResultsContext.fields = {
    contextType: {
        enumType: TypeInfo.TestResultsContextType
    },
    release: {
        typeInfo: TypeInfo.ReleaseReference
    }
};

TypeInfo.TestResultsDetails.fields = {
    resultsForGroup: {
        isArray: true,
        typeInfo: TypeInfo.TestResultsDetailsForGroup
    }
};

TypeInfo.TestResultsDetailsForGroup.fields = {
    results: {
        isArray: true,
        typeInfo: TypeInfo.TestCaseResult
    },
    resultsCountByOutcome: {
        isDictionary: true,
        dictionaryKeyEnumType: TypeInfo.TestOutcome,
        dictionaryValueTypeInfo: TypeInfo.AggregatedResultsByOutcome
    }
};

TypeInfo.TestResultsEx2.fields = {
    creationDate: {
        isDate: true,
    },
    dateTimeValue: {
        isDate: true,
    }
};

TypeInfo.TestResultsQuery.fields = {
    results: {
        isArray: true,
        typeInfo: TypeInfo.TestCaseResult
    },
    resultsFilter: {
        typeInfo: TypeInfo.ResultsFilter
    }
};

TypeInfo.TestResultSummary.fields = {
    aggregatedResultsAnalysis: {
        typeInfo: TypeInfo.AggregatedResultsAnalysis
    },
    teamProject: {
        typeInfo: TfsCoreInterfaces.TypeInfo.TeamProjectReference
    },
    testFailures: {
        typeInfo: TypeInfo.TestFailuresAnalysis
    },
    testResultsContext: {
        typeInfo: TypeInfo.TestResultsContext
    }
};

TypeInfo.TestResultTrendFilter.fields = {
    maxCompleteDate: {
        isDate: true,
    }
};

TypeInfo.TestRun.fields = {
    buildConfiguration: {
        typeInfo: TypeInfo.BuildConfiguration
    },
    completedDate: {
        isDate: true,
    },
    createdDate: {
        isDate: true,
    },
    dueDate: {
        isDate: true,
    },
    lastUpdatedDate: {
        isDate: true,
    },
    release: {
        typeInfo: TypeInfo.ReleaseReference
    },
    startedDate: {
        isDate: true,
    },
    substate: {
        enumType: TypeInfo.TestRunSubstate
    }
};

TypeInfo.TestRun2.fields = {
    completeDate: {
        isDate: true,
    },
    creationDate: {
        isDate: true,
    },
    deletedOn: {
        isDate: true,
    },
    dueDate: {
        isDate: true,
    },
    lastUpdated: {
        isDate: true,
    },
    startDate: {
        isDate: true,
    }
};

TypeInfo.TestRunCanceledEvent.fields = {
    testRun: {
        typeInfo: TypeInfo.TestRun
    }
};

TypeInfo.TestRunCreatedEvent.fields = {
    testRun: {
        typeInfo: TypeInfo.TestRun
    }
};

TypeInfo.TestRunEvent.fields = {
    testRun: {
        typeInfo: TypeInfo.TestRun
    }
};

TypeInfo.TestRunEx2.fields = {
    createdDate: {
        isDate: true,
    },
    dateTimeValue: {
        isDate: true,
    }
};

TypeInfo.TestRunStartedEvent.fields = {
    testRun: {
        typeInfo: TypeInfo.TestRun
    }
};

TypeInfo.TestRunSummary2.fields = {
    testRunCompletedDate: {
        isDate: true,
    }
};

TypeInfo.TestRunWithDtlEnvEvent.fields = {
    testRun: {
        typeInfo: TypeInfo.TestRun
    }
};

TypeInfo.TestSession.fields = {
    endDate: {
        isDate: true,
    },
    lastUpdatedDate: {
        isDate: true,
    },
    source: {
        enumType: TypeInfo.TestSessionSource
    },
    startDate: {
        isDate: true,
    },
    state: {
        enumType: TypeInfo.TestSessionState
    }
};

TypeInfo.TestSessionExploredWorkItemReference.fields = {
    endTime: {
        isDate: true,
    },
    startTime: {
        isDate: true,
    }
};

TypeInfo.TestSettings2.fields = {
    createdDate: {
        isDate: true,
    },
    lastUpdatedDate: {
        isDate: true,
    }
};

TypeInfo.TestSubResult.fields = {
    completedDate: {
        isDate: true,
    },
    lastUpdatedDate: {
        isDate: true,
    },
    resultGroupType: {
        enumType: TypeInfo.ResultGroupType
    },
    startedDate: {
        isDate: true,
    },
    subResults: {
        isArray: true,
        typeInfo: TypeInfo.TestSubResult
    }
};

TypeInfo.TestSuite.fields = {
    children: {
        isArray: true,
        typeInfo: TypeInfo.TestSuite
    },
    lastPopulatedDate: {
        isDate: true,
    },
    lastUpdatedDate: {
        isDate: true,
    }
};

TypeInfo.TestSummaryForWorkItem.fields = {
    summary: {
        typeInfo: TypeInfo.AggregatedDataForResultTrend
    }
};

TypeInfo.UpdatedProperties.fields = {
    lastUpdated: {
        isDate: true,
    }
};

TypeInfo.UpdateTestRunRequest.fields = {
    attachmentsToAdd: {
        isArray: true,
        typeInfo: TypeInfo.TestResultAttachment
    },
    testRun: {
        typeInfo: TypeInfo.LegacyTestRun
    }
};

TypeInfo.UpdateTestRunResponse.fields = {
    updatedProperties: {
        typeInfo: TypeInfo.UpdatedProperties
    }
};

TypeInfo.WorkItemToTestLinks.fields = {
    executedIn: {
        enumType: TypeInfo.Service
    }
};
