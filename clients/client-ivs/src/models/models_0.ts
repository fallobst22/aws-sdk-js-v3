import { SENSITIVE_STRING } from "@aws-sdk/smithy-client";
import { MetadataBearer as $MetadataBearer, SmithyException as __SmithyException } from "@aws-sdk/types";

/**
 * <p/>
 */
export interface AccessDeniedException extends __SmithyException, $MetadataBearer {
  name: "AccessDeniedException";
  $fault: "client";
  /**
   * <p>User does not have sufficient access to perform this action.</p>
   */
  exceptionMessage?: string;
}

export interface BatchGetChannelRequest {
  /**
   * <p>Array of ARNs, one per channel.</p>
   */
  arns: string[] | undefined;
}

export namespace BatchGetChannelRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: BatchGetChannelRequest): any => ({
    ...obj,
  });
}

export enum ChannelLatencyMode {
  LowLatency = "LOW",
  NormalLatency = "NORMAL",
}

export enum ChannelType {
  BasicChannelType = "BASIC",
  StandardChannelType = "STANDARD",
}

/**
 * <p>Object specifying a channel.</p>
 */
export interface Channel {
  /**
   * <p>Channel ARN.</p>
   */
  arn?: string;

  /**
   * <p>Channel name.</p>
   */
  name?: string;

  /**
   * <p>Channel latency mode. Use <code>NORMAL</code> to broadcast and deliver live video up to
   *       Full HD. Use <code>LOW</code> for near-real-time interaction with viewers. Default:
   *         <code>LOW</code>. (Note: In the Amazon IVS console, <code>LOW</code> and <code>NORMAL</code>
   *       correspond to Ultra-low and Standard, respectively.)</p>
   */
  latencyMode?: ChannelLatencyMode | string;

  /**
   * <p>Channel type, which determines the allowable resolution and bitrate. <i>If you
   *         exceed the allowable resolution or bitrate, the stream probably will disconnect
   *         immediately.</i> Default: <code>STANDARD</code>. Valid values:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>STANDARD</code>: Multiple qualities are generated from the original input, to
   *           automatically give viewers the best experience for their devices and network conditions.
   *           Resolution can be up to 1080p and bitrate can be up to 8.5 Mbps. Audio is transcoded only
   *           for renditions 360p and below; above that, audio is passed through.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>BASIC</code>: Amazon IVS delivers the original input to viewers. The viewer’s
   *           video-quality choice is limited to the original input. Resolution can be up to 480p and
   *           bitrate can be up to 1.5 Mbps.</p>
   *             </li>
   *          </ul>
   */
  type?: ChannelType | string;

  /**
   * <p>Recording-configuration ARN. A value other than an empty string indicates that recording
   *       is enabled. Default: "" (empty string, recording is disabled).</p>
   */
  recordingConfigurationArn?: string;

  /**
   * <p>Channel ingest endpoint, part of the definition of an ingest server, used when you set up
   *       streaming software.</p>
   */
  ingestEndpoint?: string;

  /**
   * <p>Channel playback URL.</p>
   */
  playbackUrl?: string;

  /**
   * <p>Whether the channel is private (enabled for playback authorization). Default:
   *         <code>false</code>.</p>
   */
  authorized?: boolean;

  /**
   * <p>Array of 1-50 maps, each of the form <code>string:string (key:value)</code>.</p>
   */
  tags?: { [key: string]: string };
}

export namespace Channel {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: Channel): any => ({
    ...obj,
  });
}

/**
 * <p>Error related to a specific channel, specified by its ARN.</p>
 */
export interface BatchError {
  /**
   * <p>Channel ARN.</p>
   */
  arn?: string;

  /**
   * <p>Error code.</p>
   */
  code?: string;

  /**
   * <p>Error message, determined by the application.</p>
   */
  message?: string;
}

export namespace BatchError {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: BatchError): any => ({
    ...obj,
  });
}

export interface BatchGetChannelResponse {
  /**
   * <p/>
   */
  channels?: Channel[];

  /**
   * <p>Each error object is related to a specific ARN in the request.</p>
   */
  errors?: BatchError[];
}

export namespace BatchGetChannelResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: BatchGetChannelResponse): any => ({
    ...obj,
  });
}

export interface BatchGetStreamKeyRequest {
  /**
   * <p>Array of ARNs, one per channel.</p>
   */
  arns: string[] | undefined;
}

export namespace BatchGetStreamKeyRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: BatchGetStreamKeyRequest): any => ({
    ...obj,
  });
}

/**
 * <p>Object specifying a stream key.</p>
 */
export interface StreamKey {
  /**
   * <p>Stream-key ARN.</p>
   */
  arn?: string;

  /**
   * <p>Stream-key value.</p>
   */
  value?: string;

  /**
   * <p>Channel ARN for the stream.</p>
   */
  channelArn?: string;

  /**
   * <p>Array of 1-50 maps, each of the form <code>string:string (key:value)</code>.</p>
   */
  tags?: { [key: string]: string };
}

export namespace StreamKey {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: StreamKey): any => ({
    ...obj,
    ...(obj.value && { value: SENSITIVE_STRING }),
  });
}

export interface BatchGetStreamKeyResponse {
  /**
   * <p/>
   */
  streamKeys?: StreamKey[];

  /**
   * <p/>
   */
  errors?: BatchError[];
}

export namespace BatchGetStreamKeyResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: BatchGetStreamKeyResponse): any => ({
    ...obj,
    ...(obj.streamKeys && { streamKeys: obj.streamKeys.map((item) => StreamKey.filterSensitiveLog(item)) }),
  });
}

export interface CreateChannelRequest {
  /**
   * <p>Channel name.</p>
   */
  name?: string;

  /**
   * <p>Channel latency mode. Use <code>NORMAL</code> to broadcast and deliver live video up to
   *       Full HD. Use <code>LOW</code> for near-real-time interaction with viewers. (Note: In the
   *       Amazon IVS console, <code>LOW</code> and <code>NORMAL</code> correspond to Ultra-low and
   *       Standard, respectively.) Default: <code>LOW</code>.</p>
   */
  latencyMode?: ChannelLatencyMode | string;

  /**
   * <p>Channel type, which determines the allowable resolution and bitrate. <i>If you
   *         exceed the allowable resolution or bitrate, the stream probably will disconnect
   *         immediately.</i> Default: <code>STANDARD</code>. Valid values:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>STANDARD</code>: Multiple qualities are generated from the original input, to
   *           automatically give viewers the best experience for their devices and network conditions.
   *           Resolution can be up to 1080p and bitrate can be up to 8.5 Mbps. Audio is transcoded only
   *           for renditions 360p and below; above that, audio is passed through.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>BASIC</code>: Amazon IVS delivers the original input to viewers. The viewer’s
   *           video-quality choice is limited to the original input. Resolution can be up to 480p and
   *           bitrate can be up to 1.5 Mbps.</p>
   *             </li>
   *          </ul>
   */
  type?: ChannelType | string;

  /**
   * <p>Whether the channel is private (enabled for playback authorization). Default:
   *         <code>false</code>.</p>
   */
  authorized?: boolean;

  /**
   * <p>Recording-configuration ARN. Default: "" (empty string, recording is disabled).</p>
   */
  recordingConfigurationArn?: string;

  /**
   * <p>Array of 1-50 maps, each of the form <code>string:string (key:value)</code>.</p>
   */
  tags?: { [key: string]: string };
}

export namespace CreateChannelRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CreateChannelRequest): any => ({
    ...obj,
  });
}

export interface CreateChannelResponse {
  /**
   * <p/>
   */
  channel?: Channel;

  /**
   * <p/>
   */
  streamKey?: StreamKey;
}

export namespace CreateChannelResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CreateChannelResponse): any => ({
    ...obj,
    ...(obj.streamKey && { streamKey: StreamKey.filterSensitiveLog(obj.streamKey) }),
  });
}

/**
 * <p/>
 */
export interface PendingVerification extends __SmithyException, $MetadataBearer {
  name: "PendingVerification";
  $fault: "client";
  /**
   * <p> Your account is pending verification. </p>
   */
  exceptionMessage?: string;
}

/**
 * <p/>
 */
export interface ResourceNotFoundException extends __SmithyException, $MetadataBearer {
  name: "ResourceNotFoundException";
  $fault: "client";
  /**
   * <p>Request references a resource which does not exist.</p>
   */
  exceptionMessage?: string;
}

/**
 * <p/>
 */
export interface ServiceQuotaExceededException extends __SmithyException, $MetadataBearer {
  name: "ServiceQuotaExceededException";
  $fault: "client";
  /**
   * <p>Request would cause a service quota to be exceeded.</p>
   */
  exceptionMessage?: string;
}

/**
 * <p/>
 */
export interface ValidationException extends __SmithyException, $MetadataBearer {
  name: "ValidationException";
  $fault: "client";
  /**
   * <p>The input fails to satisfy the constraints specified by an Amazon Web Services service.</p>
   */
  exceptionMessage?: string;
}

/**
 * <p/>
 */
export interface ConflictException extends __SmithyException, $MetadataBearer {
  name: "ConflictException";
  $fault: "client";
  /**
   * <p>Updating or deleting a resource can cause an inconsistent state.</p>
   */
  exceptionMessage?: string;
}

/**
 * <p>A complex type that describes an S3 location where recorded videos will be stored.</p>
 */
export interface S3DestinationConfiguration {
  /**
   * <p>Location (S3 bucket name) where recorded videos will be stored.</p>
   */
  bucketName: string | undefined;
}

export namespace S3DestinationConfiguration {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: S3DestinationConfiguration): any => ({
    ...obj,
  });
}

/**
 * <p>A complex type that describes a location where recorded videos will be stored. Each member
 *       represents a type of destination configuration. For recording, you define one and only one
 *       type of destination configuration.</p>
 */
export interface DestinationConfiguration {
  /**
   * <p>An S3 destination configuration where recorded videos will be stored.</p>
   */
  s3?: S3DestinationConfiguration;
}

export namespace DestinationConfiguration {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DestinationConfiguration): any => ({
    ...obj,
  });
}

export enum RecordingMode {
  Disabled = "DISABLED",
  Interval = "INTERVAL",
}

/**
 * <p>An object representing a configuration of thumbnails for recorded video.</p>
 */
export interface ThumbnailConfiguration {
  /**
   * <p>Thumbnail recording mode. Default: <code>INTERVAL</code>.</p>
   */
  recordingMode?: RecordingMode | string;

  /**
   * <p>The targeted thumbnail-generation interval in seconds. This is configurable (and required)
   *       only if <code>recordingMode</code> is <code>INTERVAL</code>. Default: 60.</p>
   *          <p>
   *             <b>Important:</b> Setting a value for <code>targetIntervalSeconds</code> does not guarantee that thumbnails
   *       are generated at the specified interval. For thumbnails to be generated at the
   *       <code>targetIntervalSeconds</code> interval, the <code>IDR/Keyframe</code> value for the input video must be less than
   *       the <code>targetIntervalSeconds</code> value. See <a href="https://docs.aws.amazon.com/ivs/latest/userguide/streaming-config.html"> Amazon IVS Streaming Configuration</a> for information on
   *       setting <code>IDR/Keyframe</code> to the recommended value in video-encoder settings.</p>
   */
  targetIntervalSeconds?: number;
}

export namespace ThumbnailConfiguration {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ThumbnailConfiguration): any => ({
    ...obj,
  });
}

export interface CreateRecordingConfigurationRequest {
  /**
   * <p>Recording-configuration name. The value does not need to be unique.</p>
   */
  name?: string;

  /**
   * <p>A complex type that contains a destination configuration for where recorded video will be
   *       stored.</p>
   */
  destinationConfiguration: DestinationConfiguration | undefined;

  /**
   * <p>Array of 1-50 maps, each of the form <code>string:string (key:value)</code>.</p>
   */
  tags?: { [key: string]: string };

  /**
   * <p>A complex type that allows you to enable/disable the recording of thumbnails for a live
   *       session and modify the interval at which thumbnails are generated for the live session.</p>
   */
  thumbnailConfiguration?: ThumbnailConfiguration;
}

export namespace CreateRecordingConfigurationRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CreateRecordingConfigurationRequest): any => ({
    ...obj,
  });
}

export enum RecordingConfigurationState {
  Active = "ACTIVE",
  CreateFailed = "CREATE_FAILED",
  Creating = "CREATING",
}

/**
 * <p>An object representing a configuration to record a channel stream.</p>
 */
export interface RecordingConfiguration {
  /**
   * <p>Recording-configuration ARN.</p>
   */
  arn: string | undefined;

  /**
   * <p>Recording-configuration name. The value does not need to be unique.</p>
   */
  name?: string;

  /**
   * <p>A complex type that contains information about where recorded video will be stored.</p>
   */
  destinationConfiguration: DestinationConfiguration | undefined;

  /**
   * <p>Indicates the current state of the recording configuration. When the state is
   *         <code>ACTIVE</code>, the configuration is ready for recording a channel stream.</p>
   */
  state: RecordingConfigurationState | string | undefined;

  /**
   * <p>Array of 1-50 maps, each of the form <code>string:string (key:value)</code>.</p>
   */
  tags?: { [key: string]: string };

  /**
   * <p>A complex type that allows you to enable/disable the recording of thumbnails for a live
   *       session and modify the interval at which thumbnails are generated for the live session.</p>
   */
  thumbnailConfiguration?: ThumbnailConfiguration;
}

export namespace RecordingConfiguration {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: RecordingConfiguration): any => ({
    ...obj,
  });
}

export interface CreateRecordingConfigurationResponse {
  /**
   *
   */
  recordingConfiguration?: RecordingConfiguration;
}

export namespace CreateRecordingConfigurationResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CreateRecordingConfigurationResponse): any => ({
    ...obj,
  });
}

/**
 * <p/>
 */
export interface InternalServerException extends __SmithyException, $MetadataBearer {
  name: "InternalServerException";
  $fault: "server";
  /**
   * <p>Unexpected error during processing of request.</p>
   */
  exceptionMessage?: string;
}

export interface CreateStreamKeyRequest {
  /**
   * <p>ARN of the channel for which to create the stream key.</p>
   */
  channelArn: string | undefined;

  /**
   * <p>Array of 1-50 maps, each of the form <code>string:string (key:value)</code>.</p>
   */
  tags?: { [key: string]: string };
}

export namespace CreateStreamKeyRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CreateStreamKeyRequest): any => ({
    ...obj,
  });
}

export interface CreateStreamKeyResponse {
  /**
   * <p>Stream key used to authenticate an RTMPS stream for ingestion.</p>
   */
  streamKey?: StreamKey;
}

export namespace CreateStreamKeyResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CreateStreamKeyResponse): any => ({
    ...obj,
    ...(obj.streamKey && { streamKey: StreamKey.filterSensitiveLog(obj.streamKey) }),
  });
}

export interface DeleteChannelRequest {
  /**
   * <p>ARN of the channel to be deleted.</p>
   */
  arn: string | undefined;
}

export namespace DeleteChannelRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DeleteChannelRequest): any => ({
    ...obj,
  });
}

export interface DeletePlaybackKeyPairRequest {
  /**
   * <p>ARN of the key pair to be deleted.</p>
   */
  arn: string | undefined;
}

export namespace DeletePlaybackKeyPairRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DeletePlaybackKeyPairRequest): any => ({
    ...obj,
  });
}

export interface DeletePlaybackKeyPairResponse {}

export namespace DeletePlaybackKeyPairResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DeletePlaybackKeyPairResponse): any => ({
    ...obj,
  });
}

export interface DeleteRecordingConfigurationRequest {
  /**
   * <p>ARN of the recording configuration to be deleted.</p>
   */
  arn: string | undefined;
}

export namespace DeleteRecordingConfigurationRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DeleteRecordingConfigurationRequest): any => ({
    ...obj,
  });
}

export interface DeleteStreamKeyRequest {
  /**
   * <p>ARN of the stream key to be deleted.</p>
   */
  arn: string | undefined;
}

export namespace DeleteStreamKeyRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DeleteStreamKeyRequest): any => ({
    ...obj,
  });
}

export interface GetChannelRequest {
  /**
   * <p>ARN of the channel for which the configuration is to be retrieved.</p>
   */
  arn: string | undefined;
}

export namespace GetChannelRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GetChannelRequest): any => ({
    ...obj,
  });
}

export interface GetChannelResponse {
  /**
   * <p/>
   */
  channel?: Channel;
}

export namespace GetChannelResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GetChannelResponse): any => ({
    ...obj,
  });
}

export interface GetPlaybackKeyPairRequest {
  /**
   * <p>ARN of the key pair to be returned.</p>
   */
  arn: string | undefined;
}

export namespace GetPlaybackKeyPairRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GetPlaybackKeyPairRequest): any => ({
    ...obj,
  });
}

/**
 * <p>A key pair used to sign and validate a playback authorization token.</p>
 */
export interface PlaybackKeyPair {
  /**
   * <p>Key-pair ARN.</p>
   */
  arn?: string;

  /**
   * <p>Playback-key-pair name. The value does not need to be unique.</p>
   */
  name?: string;

  /**
   * <p>Key-pair identifier.</p>
   */
  fingerprint?: string;

  /**
   * <p>Array of 1-50 maps, each of the form <code>string:string (key:value)</code>.</p>
   */
  tags?: { [key: string]: string };
}

export namespace PlaybackKeyPair {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: PlaybackKeyPair): any => ({
    ...obj,
  });
}

export interface GetPlaybackKeyPairResponse {
  /**
   *
   */
  keyPair?: PlaybackKeyPair;
}

export namespace GetPlaybackKeyPairResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GetPlaybackKeyPairResponse): any => ({
    ...obj,
  });
}

export interface GetRecordingConfigurationRequest {
  /**
   * <p>ARN of the recording configuration to be retrieved.</p>
   */
  arn: string | undefined;
}

export namespace GetRecordingConfigurationRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GetRecordingConfigurationRequest): any => ({
    ...obj,
  });
}

export interface GetRecordingConfigurationResponse {
  /**
   *
   */
  recordingConfiguration?: RecordingConfiguration;
}

export namespace GetRecordingConfigurationResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GetRecordingConfigurationResponse): any => ({
    ...obj,
  });
}

/**
 * <p/>
 */
export interface ChannelNotBroadcasting extends __SmithyException, $MetadataBearer {
  name: "ChannelNotBroadcasting";
  $fault: "client";
  /**
   * <p>The stream is offline for the given channel ARN.</p>
   */
  exceptionMessage?: string;
}

export interface GetStreamRequest {
  /**
   * <p>Channel ARN for stream to be accessed.</p>
   */
  channelArn: string | undefined;
}

export namespace GetStreamRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GetStreamRequest): any => ({
    ...obj,
  });
}

export enum StreamHealth {
  Starving = "STARVING",
  StreamHealthy = "HEALTHY",
  Unknown = "UNKNOWN",
}

export enum StreamState {
  StreamLive = "LIVE",
  StreamOffline = "OFFLINE",
}

/**
 * <p>Specifies a live video stream that has been ingested and distributed.</p>
 */
export interface _Stream {
  /**
   * <p>Channel ARN for the stream.</p>
   */
  channelArn?: string;

  /**
   * <p>Unique identifier for a live or previously live stream in the specified channel.</p>
   */
  streamId?: string;

  /**
   * <p>URL of the master playlist, required by the video player to play the HLS stream.</p>
   */
  playbackUrl?: string;

  /**
   * <p>Time of the stream’s start. This is an ISO 8601 timestamp returned as a string.</p>
   */
  startTime?: Date;

  /**
   * <p>The stream’s state.</p>
   */
  state?: StreamState | string;

  /**
   * <p>The stream’s health.</p>
   */
  health?: StreamHealth | string;

  /**
   * <p>A count of concurrent views of the stream. Typically, a new view appears in
   *         <code>viewerCount</code> within 15 seconds of when video playback starts and a view is
   *       removed from <code>viewerCount</code> within 1 minute of when video playback ends. A value of
   *       -1 indicates that the request timed out; in this case, retry.</p>
   */
  viewerCount?: number;
}

export namespace _Stream {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: _Stream): any => ({
    ...obj,
  });
}

export interface GetStreamResponse {
  /**
   * <p/>
   */
  stream?: _Stream;
}

export namespace GetStreamResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GetStreamResponse): any => ({
    ...obj,
  });
}

export interface GetStreamKeyRequest {
  /**
   * <p>ARN for the stream key to be retrieved.</p>
   */
  arn: string | undefined;
}

export namespace GetStreamKeyRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GetStreamKeyRequest): any => ({
    ...obj,
  });
}

export interface GetStreamKeyResponse {
  /**
   *
   */
  streamKey?: StreamKey;
}

export namespace GetStreamKeyResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GetStreamKeyResponse): any => ({
    ...obj,
    ...(obj.streamKey && { streamKey: StreamKey.filterSensitiveLog(obj.streamKey) }),
  });
}

export interface GetStreamSessionRequest {
  /**
   * <p>ARN of the channel resource</p>
   */
  channelArn: string | undefined;

  /**
   * <p>Unique identifier for a live or previously live stream in the specified channel. If no
   *         <code>streamId</code> is provided, this returns the most recent stream session for the
   *       channel, if it exists.</p>
   */
  streamId?: string;
}

export namespace GetStreamSessionRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GetStreamSessionRequest): any => ({
    ...obj,
  });
}

/**
 * <p>Object specifying a stream’s audio configuration.</p>
 */
export interface AudioConfiguration {
  /**
   * <p>Codec used for the audio encoding.</p>
   */
  codec?: string;

  /**
   * <p>The expected ingest bitrate (bits per second). This is configured in the encoder.</p>
   */
  targetBitrate?: number;

  /**
   * <p>Number of audio samples recorded per second.</p>
   */
  sampleRate?: number;

  /**
   * <p>Number of audio channels.</p>
   */
  channels?: number;
}

export namespace AudioConfiguration {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: AudioConfiguration): any => ({
    ...obj,
  });
}

/**
 * <p>Object specifying a stream’s video configuration.</p>
 */
export interface VideoConfiguration {
  /**
   * <p>Indicates to the decoder the requirements for decoding the stream. For definitions of the
   *       valid values, see the H.264 specification.</p>
   */
  avcProfile?: string;

  /**
   * <p>Indicates the degree of required decoder performance for a profile. Normally this is set
   *       automatically by the encoder. For details, see the H.264 specification.</p>
   */
  avcLevel?: string;

  /**
   * <p>Codec used for the video encoding.</p>
   */
  codec?: string;

  /**
   * <p>Software or hardware used to encode the video.</p>
   */
  encoder?: string;

  /**
   * <p>The expected ingest bitrate (bits per second). This is configured in the encoder.</p>
   */
  targetBitrate?: number;

  /**
   * <p>The expected ingest framerate. This is configured in the encoder.</p>
   */
  targetFramerate?: number;

  /**
   * <p>Video-resolution height in pixels.</p>
   */
  videoHeight?: number;

  /**
   * <p>Video-resolution width in pixels.</p>
   */
  videoWidth?: number;
}

export namespace VideoConfiguration {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: VideoConfiguration): any => ({
    ...obj,
  });
}

/**
 * <p>Object specifying the ingest configuration set up by the broadcaster, usually in an
 *       encoder.</p>
 */
export interface IngestConfiguration {
  /**
   * <p>Encoder settings for video.</p>
   */
  video?: VideoConfiguration;

  /**
   * <p>Encoder settings for audio.</p>
   */
  audio?: AudioConfiguration;
}

export namespace IngestConfiguration {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: IngestConfiguration): any => ({
    ...obj,
  });
}

/**
 * <p>Object specifying a stream’s events. For a list of events, see <a href="https://docs.aws.amazon.com/ivs/latest/userguide/eventbridge.html">Using Amazon EventBridge with Amazon
 *       IVS</a>.</p>
 */
export interface StreamEvent {
  /**
   * <p>Name that identifies the stream event within a <code>type</code>.</p>
   */
  name?: string;

  /**
   * <p>Logical group for certain events.</p>
   */
  type?: string;

  /**
   * <p>UTC ISO-8601 formatted timestamp of when the event occurred.</p>
   */
  eventTime?: Date;
}

export namespace StreamEvent {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: StreamEvent): any => ({
    ...obj,
  });
}

/**
 * <p>Object that captures the Amazon IVS configuration that the customer provisioned, the
 *       ingest configurations that the broadcaster used, and the most recent Amazon IVS stream events
 *       it encountered.</p>
 */
export interface StreamSession {
  /**
   * <p>Unique identifier for a live or previously live stream in the specified channel.</p>
   */
  streamId?: string;

  /**
   * <p>UTC ISO-8601 formatted timestamp of when the channel went live.</p>
   */
  startTime?: Date;

  /**
   * <p>UTC ISO-8601 formatted timestamp of when the channel went offline. For live streams, this
   *       is <code>NULL</code>.</p>
   */
  endTime?: Date;

  /**
   * <p>The properties of the channel at the time of going live.</p>
   */
  channel?: Channel;

  /**
   * <p>The properties of the incoming RTMP stream for the stream.</p>
   */
  ingestConfiguration?: IngestConfiguration;

  /**
   * <p>The properties of recording the live stream.</p>
   */
  recordingConfiguration?: RecordingConfiguration;

  /**
   * <p>List of Amazon IVS events that the stream encountered. The list is sorted by most recent
   *       events and contains up to 500 events. For Amazon IVS events, see <a href="https://docs.aws.amazon.com/ivs/latest/userguide/eventbridge.html">Using Amazon EventBridge with Amazon
   *       IVS</a>.</p>
   */
  truncatedEvents?: StreamEvent[];
}

export namespace StreamSession {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: StreamSession): any => ({
    ...obj,
  });
}

export interface GetStreamSessionResponse {
  /**
   * <p>List of stream details.</p>
   */
  streamSession?: StreamSession;
}

export namespace GetStreamSessionResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GetStreamSessionResponse): any => ({
    ...obj,
  });
}

export interface ImportPlaybackKeyPairRequest {
  /**
   * <p>The public portion of a customer-generated key pair.</p>
   */
  publicKeyMaterial: string | undefined;

  /**
   * <p>Playback-key-pair name. The value does not need to be unique.</p>
   */
  name?: string;

  /**
   * <p>Any tags provided with the request are added to the playback key pair tags.</p>
   */
  tags?: { [key: string]: string };
}

export namespace ImportPlaybackKeyPairRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ImportPlaybackKeyPairRequest): any => ({
    ...obj,
  });
}

export interface ImportPlaybackKeyPairResponse {
  /**
   * <p/>
   */
  keyPair?: PlaybackKeyPair;
}

export namespace ImportPlaybackKeyPairResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ImportPlaybackKeyPairResponse): any => ({
    ...obj,
  });
}

export interface ListChannelsRequest {
  /**
   * <p>Filters the channel list to match the specified name.</p>
   */
  filterByName?: string;

  /**
   * <p>Filters the channel list to match the specified recording-configuration ARN.</p>
   */
  filterByRecordingConfigurationArn?: string;

  /**
   * <p>The first channel to retrieve. This is used for pagination; see the <code>nextToken</code>
   *       response field.</p>
   */
  nextToken?: string;

  /**
   * <p>Maximum number of channels to return. Default: 50.</p>
   */
  maxResults?: number;
}

export namespace ListChannelsRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ListChannelsRequest): any => ({
    ...obj,
  });
}

/**
 * <p>Summary information about a channel.</p>
 */
export interface ChannelSummary {
  /**
   * <p>Channel ARN.</p>
   */
  arn?: string;

  /**
   * <p>Channel name.</p>
   */
  name?: string;

  /**
   * <p>Channel latency mode. Use <code>NORMAL</code> to broadcast and deliver live video up to
   *       Full HD. Use <code>LOW</code> for near-real-time interaction with viewers. Default:
   *         <code>LOW</code>. (Note: In the Amazon IVS console, <code>LOW</code> and <code>NORMAL</code>
   *       correspond to Ultra-low and Standard, respectively.)</p>
   */
  latencyMode?: ChannelLatencyMode | string;

  /**
   * <p>Whether the channel is private (enabled for playback authorization). Default:
   *         <code>false</code>.</p>
   */
  authorized?: boolean;

  /**
   * <p>Recording-configuration ARN. A value other than an empty string indicates that recording
   *       is enabled. Default: "" (empty string, recording is disabled).</p>
   */
  recordingConfigurationArn?: string;

  /**
   * <p>Array of 1-50 maps, each of the form <code>string:string (key:value)</code>.</p>
   */
  tags?: { [key: string]: string };
}

export namespace ChannelSummary {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ChannelSummary): any => ({
    ...obj,
  });
}

export interface ListChannelsResponse {
  /**
   * <p>List of the matching channels.</p>
   */
  channels: ChannelSummary[] | undefined;

  /**
   * <p>If there are more channels than <code>maxResults</code>, use <code>nextToken</code> in the
   *       request to get the next set.</p>
   */
  nextToken?: string;
}

export namespace ListChannelsResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ListChannelsResponse): any => ({
    ...obj,
  });
}

export interface ListPlaybackKeyPairsRequest {
  /**
   * <p>Maximum number of key pairs to return.</p>
   */
  nextToken?: string;

  /**
   * <p>The first key pair to retrieve. This is used for pagination; see the
   *         <code>nextToken</code> response field. Default: 50.</p>
   */
  maxResults?: number;
}

export namespace ListPlaybackKeyPairsRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ListPlaybackKeyPairsRequest): any => ({
    ...obj,
  });
}

/**
 * <p>Summary information about a playback key pair.</p>
 */
export interface PlaybackKeyPairSummary {
  /**
   * <p>Key-pair ARN.</p>
   */
  arn?: string;

  /**
   * <p>Playback-key-pair name. The value does not need to be unique.</p>
   */
  name?: string;

  /**
   * <p>Array of 1-50 maps, each of the form <code>string:string (key:value)</code>.</p>
   */
  tags?: { [key: string]: string };
}

export namespace PlaybackKeyPairSummary {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: PlaybackKeyPairSummary): any => ({
    ...obj,
  });
}

export interface ListPlaybackKeyPairsResponse {
  /**
   * <p>List of key pairs.</p>
   */
  keyPairs: PlaybackKeyPairSummary[] | undefined;

  /**
   * <p>If there are more key pairs than <code>maxResults</code>, use <code>nextToken</code> in
   *       the request to get the next set.</p>
   */
  nextToken?: string;
}

export namespace ListPlaybackKeyPairsResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ListPlaybackKeyPairsResponse): any => ({
    ...obj,
  });
}

export interface ListRecordingConfigurationsRequest {
  /**
   * <p>The first recording configuration to retrieve. This is used for pagination; see the
   *         <code>nextToken</code> response field.</p>
   */
  nextToken?: string;

  /**
   * <p>Maximum number of recording configurations to return. Default: 50. </p>
   */
  maxResults?: number;
}

export namespace ListRecordingConfigurationsRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ListRecordingConfigurationsRequest): any => ({
    ...obj,
  });
}

/**
 * <p>Summary information about a RecordingConfiguration.</p>
 */
export interface RecordingConfigurationSummary {
  /**
   * <p>Recording-configuration ARN.</p>
   */
  arn: string | undefined;

  /**
   * <p>Recording-configuration name. The value does not need to be unique.</p>
   */
  name?: string;

  /**
   * <p>A complex type that contains information about where recorded video will be stored.</p>
   */
  destinationConfiguration: DestinationConfiguration | undefined;

  /**
   * <p>Indicates the current state of the recording configuration. When the state is
   *         <code>ACTIVE</code>, the configuration is ready for recording a channel stream.</p>
   */
  state: RecordingConfigurationState | string | undefined;

  /**
   * <p>Array of 1-50 maps, each of the form <code>string:string (key:value)</code>.</p>
   */
  tags?: { [key: string]: string };
}

export namespace RecordingConfigurationSummary {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: RecordingConfigurationSummary): any => ({
    ...obj,
  });
}

export interface ListRecordingConfigurationsResponse {
  /**
   * <p>List of the matching recording configurations.</p>
   */
  recordingConfigurations: RecordingConfigurationSummary[] | undefined;

  /**
   * <p>If there are more recording configurations than <code>maxResults</code>, use
   *         <code>nextToken</code> in the request to get the next set.</p>
   */
  nextToken?: string;
}

export namespace ListRecordingConfigurationsResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ListRecordingConfigurationsResponse): any => ({
    ...obj,
  });
}

export interface ListStreamKeysRequest {
  /**
   * <p>Channel ARN used to filter the list.</p>
   */
  channelArn: string | undefined;

  /**
   * <p>The first stream key to retrieve. This is used for pagination; see the
   *         <code>nextToken</code> response field.</p>
   */
  nextToken?: string;

  /**
   * <p>Maximum number of streamKeys to return. Default: 50.</p>
   */
  maxResults?: number;
}

export namespace ListStreamKeysRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ListStreamKeysRequest): any => ({
    ...obj,
  });
}

/**
 * <p>Summary information about a stream key.</p>
 */
export interface StreamKeySummary {
  /**
   * <p>Stream-key ARN.</p>
   */
  arn?: string;

  /**
   * <p>Channel ARN for the stream.</p>
   */
  channelArn?: string;

  /**
   * <p>Array of 1-50 maps, each of the form <code>string:string (key:value)</code>.</p>
   */
  tags?: { [key: string]: string };
}

export namespace StreamKeySummary {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: StreamKeySummary): any => ({
    ...obj,
  });
}

export interface ListStreamKeysResponse {
  /**
   * <p>List of stream keys.</p>
   */
  streamKeys: StreamKeySummary[] | undefined;

  /**
   * <p>If there are more stream keys than <code>maxResults</code>, use <code>nextToken</code> in
   *       the request to get the next set.</p>
   */
  nextToken?: string;
}

export namespace ListStreamKeysResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ListStreamKeysResponse): any => ({
    ...obj,
  });
}

/**
 * <p>Object specifying the stream attribute on which to filter.</p>
 */
export interface StreamFilters {
  /**
   * <p>The stream’s health.</p>
   */
  health?: StreamHealth | string;
}

export namespace StreamFilters {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: StreamFilters): any => ({
    ...obj,
  });
}

export interface ListStreamsRequest {
  /**
   * <p>Filters the stream list to match the specified criterion.</p>
   */
  filterBy?: StreamFilters;

  /**
   * <p>The first stream to retrieve. This is used for pagination; see the <code>nextToken</code>
   *       response field.</p>
   */
  nextToken?: string;

  /**
   * <p>Maximum number of streams to return. Default: 50.</p>
   */
  maxResults?: number;
}

export namespace ListStreamsRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ListStreamsRequest): any => ({
    ...obj,
  });
}

/**
 * <p>Summary information about a stream.</p>
 */
export interface StreamSummary {
  /**
   * <p>Channel ARN for the stream.</p>
   */
  channelArn?: string;

  /**
   * <p>Unique identifier for a live or previously live stream in the specified channel.</p>
   */
  streamId?: string;

  /**
   * <p>The stream’s state.</p>
   */
  state?: StreamState | string;

  /**
   * <p>The stream’s health.</p>
   */
  health?: StreamHealth | string;

  /**
   * <p>A count of concurrent views of the stream. Typically, a new view appears in
   *         <code>viewerCount</code> within 15 seconds of when video playback starts and a view is
   *       removed from <code>viewerCount</code> within 1 minute of when video playback ends. A value of
   *       -1 indicates that the request timed out; in this case, retry.</p>
   */
  viewerCount?: number;

  /**
   * <p>Time of the stream’s start. This is an ISO 8601 timestamp returned as a string.</p>
   */
  startTime?: Date;
}

export namespace StreamSummary {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: StreamSummary): any => ({
    ...obj,
  });
}

export interface ListStreamsResponse {
  /**
   * <p>List of streams.</p>
   */
  streams: StreamSummary[] | undefined;

  /**
   * <p>If there are more streams than <code>maxResults</code>, use <code>nextToken</code> in the
   *       request to get the next set.</p>
   */
  nextToken?: string;
}

export namespace ListStreamsResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ListStreamsResponse): any => ({
    ...obj,
  });
}

export interface ListStreamSessionsRequest {
  /**
   * <p>Channel ARN used to filter the list.</p>
   */
  channelArn: string | undefined;

  /**
   * <p>The first stream to retrieve. This is used for pagination; see the <code>nextToken</code>
   *       response field.</p>
   */
  nextToken?: string;

  /**
   * <p>Maximum number of streams to return. Default: 50.</p>
   */
  maxResults?: number;
}

export namespace ListStreamSessionsRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ListStreamSessionsRequest): any => ({
    ...obj,
  });
}

/**
 * <p>Summary information about a stream session.</p>
 */
export interface StreamSessionSummary {
  /**
   * <p>Unique identifier for a live or previously live stream in the specified channel.</p>
   */
  streamId?: string;

  /**
   * <p>UTC ISO-8601 formatted timestamp of when the channel went live.</p>
   */
  startTime?: Date;

  /**
   * <p>UTC ISO-8601 formatted timestamp of when the channel went offline. For live streams, this
   *       is <code>NULL</code>.</p>
   */
  endTime?: Date;

  /**
   * <p>If <code>true</code>, this stream encountered a quota breach or failure.</p>
   */
  hasErrorEvent?: boolean;
}

export namespace StreamSessionSummary {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: StreamSessionSummary): any => ({
    ...obj,
  });
}

export interface ListStreamSessionsResponse {
  /**
   * <p>List of stream sessions.</p>
   */
  streamSessions: StreamSessionSummary[] | undefined;

  /**
   * <p>If there are more streams than <code>maxResults</code>, use <code>nextToken</code> in the
   *       request to get the next set.</p>
   */
  nextToken?: string;
}

export namespace ListStreamSessionsResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ListStreamSessionsResponse): any => ({
    ...obj,
  });
}

export interface ListTagsForResourceRequest {
  /**
   * <p>The ARN of the resource to be retrieved.</p>
   */
  resourceArn: string | undefined;
}

export namespace ListTagsForResourceRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ListTagsForResourceRequest): any => ({
    ...obj,
  });
}

export interface ListTagsForResourceResponse {
  /**
   * <p/>
   */
  tags: { [key: string]: string } | undefined;
}

export namespace ListTagsForResourceResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ListTagsForResourceResponse): any => ({
    ...obj,
  });
}

export interface PutMetadataRequest {
  /**
   * <p>ARN of the channel into which metadata is inserted. This channel must have an active
   *       stream.</p>
   */
  channelArn: string | undefined;

  /**
   * <p>Metadata to insert into the stream. Maximum: 1 KB per request.</p>
   */
  metadata: string | undefined;
}

export namespace PutMetadataRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: PutMetadataRequest): any => ({
    ...obj,
    ...(obj.metadata && { metadata: SENSITIVE_STRING }),
  });
}

/**
 * <p/>
 */
export interface ThrottlingException extends __SmithyException, $MetadataBearer {
  name: "ThrottlingException";
  $fault: "client";
  /**
   * <p>Request was denied due to request throttling.</p>
   */
  exceptionMessage?: string;
}

export interface StopStreamRequest {
  /**
   * <p>ARN of the channel for which the stream is to be stopped.</p>
   */
  channelArn: string | undefined;
}

export namespace StopStreamRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: StopStreamRequest): any => ({
    ...obj,
  });
}

export interface StopStreamResponse {}

export namespace StopStreamResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: StopStreamResponse): any => ({
    ...obj,
  });
}

/**
 * <p/>
 */
export interface StreamUnavailable extends __SmithyException, $MetadataBearer {
  name: "StreamUnavailable";
  $fault: "server";
  /**
   * <p>The stream is temporarily unavailable.</p>
   */
  exceptionMessage?: string;
}

export interface TagResourceRequest {
  /**
   * <p>ARN of the resource for which tags are to be added or updated.</p>
   */
  resourceArn: string | undefined;

  /**
   * <p>Array of tags to be added or updated.</p>
   */
  tags: { [key: string]: string } | undefined;
}

export namespace TagResourceRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: TagResourceRequest): any => ({
    ...obj,
  });
}

export interface TagResourceResponse {}

export namespace TagResourceResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: TagResourceResponse): any => ({
    ...obj,
  });
}

export interface UntagResourceRequest {
  /**
   * <p>ARN of the resource for which tags are to be removed.</p>
   */
  resourceArn: string | undefined;

  /**
   * <p>Array of tags to be removed.</p>
   */
  tagKeys: string[] | undefined;
}

export namespace UntagResourceRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: UntagResourceRequest): any => ({
    ...obj,
  });
}

export interface UntagResourceResponse {}

export namespace UntagResourceResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: UntagResourceResponse): any => ({
    ...obj,
  });
}

export interface UpdateChannelRequest {
  /**
   * <p>ARN of the channel to be updated.</p>
   */
  arn: string | undefined;

  /**
   * <p>Channel name.</p>
   */
  name?: string;

  /**
   * <p>Channel latency mode. Use <code>NORMAL</code> to broadcast and deliver live video up to
   *       Full HD. Use <code>LOW</code> for near-real-time interaction with viewers. (Note: In the
   *       Amazon IVS console, <code>LOW</code> and <code>NORMAL</code> correspond to Ultra-low and
   *       Standard, respectively.)</p>
   */
  latencyMode?: ChannelLatencyMode | string;

  /**
   * <p>Channel type, which determines the allowable resolution and bitrate. <i>If you
   *         exceed the allowable resolution or bitrate, the stream probably will disconnect
   *         immediately</i>. Valid values:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>STANDARD</code>: Multiple qualities are generated from the original input, to
   *           automatically give viewers the best experience for their devices and network conditions.
   *           Resolution can be up to 1080p and bitrate can be up to 8.5 Mbps. Audio is transcoded only
   *           for renditions 360p and below; above that, audio is passed through.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>BASIC</code>: Amazon IVS delivers the original input to viewers. The viewer’s
   *           video-quality choice is limited to the original input. Resolution can be up to 480p and
   *           bitrate can be up to 1.5 Mbps.</p>
   *             </li>
   *          </ul>
   */
  type?: ChannelType | string;

  /**
   * <p>Whether the channel is private (enabled for playback authorization).</p>
   */
  authorized?: boolean;

  /**
   * <p>Recording-configuration ARN. If this is set to an empty string, recording is disabled. A
   *       value other than an empty string indicates that recording is enabled</p>
   */
  recordingConfigurationArn?: string;
}

export namespace UpdateChannelRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: UpdateChannelRequest): any => ({
    ...obj,
  });
}

export interface UpdateChannelResponse {
  /**
   * <p>Object specifying a channel.</p>
   */
  channel?: Channel;
}

export namespace UpdateChannelResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: UpdateChannelResponse): any => ({
    ...obj,
  });
}
