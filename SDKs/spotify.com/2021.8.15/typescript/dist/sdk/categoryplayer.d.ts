import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class CategoryPlayer {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * endpointAddToQueue - Add an item to queue
     *
     * Add an item to the end of the user's current playback queue.
     *
     * https://developer.spotify.com/documentation/web-api/reference/#endpoint-add-to-queue - Find more info on the official Spotify Web API Reference
    **/
    endpointAddToQueue(req: operations.EndpointAddToQueueRequest, config?: AxiosRequestConfig): Promise<operations.EndpointAddToQueueResponse>;
    /**
     * endpointGetAUsersAvailableDevices - Get a User's Available Devices
     *
     * Get information about a user's available devices.
     *
     * https://developer.spotify.com/documentation/web-api/reference/#endpoint-get-a-users-available-devices - Find more info on the official Spotify Web API Reference
    **/
    endpointGetAUsersAvailableDevices(req: operations.EndpointGetAUsersAvailableDevicesRequest, config?: AxiosRequestConfig): Promise<operations.EndpointGetAUsersAvailableDevicesResponse>;
    /**
     * endpointGetInformationAboutTheUsersCurrentPlayback - Get Information About The User's Current Playback
     *
     * Get information about the user's current playback state, including track or episode, progress, and active device.
     *
     * https://developer.spotify.com/documentation/web-api/reference/#endpoint-get-information-about-the-users-current-playback - Find more info on the official Spotify Web API Reference
    **/
    endpointGetInformationAboutTheUsersCurrentPlayback(req: operations.EndpointGetInformationAboutTheUsersCurrentPlaybackRequest, config?: AxiosRequestConfig): Promise<operations.EndpointGetInformationAboutTheUsersCurrentPlaybackResponse>;
    /**
     * endpointGetRecentlyPlayed - Get Current User's Recently Played Tracks
     *
     * Get tracks from the current user's recently played tracks.
     * *Note: Currently doesn't support podcast episodes.*
     *
     * https://developer.spotify.com/documentation/web-api/reference/#endpoint-get-recently-played - Find more info on the official Spotify Web API Reference
    **/
    endpointGetRecentlyPlayed(req: operations.EndpointGetRecentlyPlayedRequest, config?: AxiosRequestConfig): Promise<operations.EndpointGetRecentlyPlayedResponse>;
    /**
     * endpointGetTheUsersCurrentlyPlayingTrack - Get the User's Currently Playing Track
     *
     * Get the object currently being played on the user's Spotify account.
     *
     * https://developer.spotify.com/documentation/web-api/reference/#endpoint-get-the-users-currently-playing-track - Find more info on the official Spotify Web API Reference
    **/
    endpointGetTheUsersCurrentlyPlayingTrack(req: operations.EndpointGetTheUsersCurrentlyPlayingTrackRequest, config?: AxiosRequestConfig): Promise<operations.EndpointGetTheUsersCurrentlyPlayingTrackResponse>;
    /**
     * endpointPauseAUsersPlayback - Pause a User's Playback
     *
     * Pause playback on the user's account.
     *
     * https://developer.spotify.com/documentation/web-api/reference/#endpoint-pause-a-users-playback - Find more info on the official Spotify Web API Reference
    **/
    endpointPauseAUsersPlayback(req: operations.EndpointPauseAUsersPlaybackRequest, config?: AxiosRequestConfig): Promise<operations.EndpointPauseAUsersPlaybackResponse>;
    /**
     * endpointSeekToPositionInCurrentlyPlayingTrack - Seek To Position In Currently Playing Track
     *
     * Seeks to the given position in the user's currently playing track.
     *
     * https://developer.spotify.com/documentation/web-api/reference/#endpoint-seek-to-position-in-currently-playing-track - Find more info on the official Spotify Web API Reference
    **/
    endpointSeekToPositionInCurrentlyPlayingTrack(req: operations.EndpointSeekToPositionInCurrentlyPlayingTrackRequest, config?: AxiosRequestConfig): Promise<operations.EndpointSeekToPositionInCurrentlyPlayingTrackResponse>;
    /**
     * endpointSetRepeatModeOnUsersPlayback - Set Repeat Mode On User’s Playback
     *
     * Set the repeat mode for the user's playback. Options are repeat-track,
     * repeat-context, and off.
     *
     * https://developer.spotify.com/documentation/web-api/reference/#endpoint-set-repeat-mode-on-users-playback - Find more info on the official Spotify Web API Reference
    **/
    endpointSetRepeatModeOnUsersPlayback(req: operations.EndpointSetRepeatModeOnUsersPlaybackRequest, config?: AxiosRequestConfig): Promise<operations.EndpointSetRepeatModeOnUsersPlaybackResponse>;
    /**
     * endpointSetVolumeForUsersPlayback - Set Volume For User's Playback
     *
     * Set the volume for the user's current playback device.
     *
     * https://developer.spotify.com/documentation/web-api/reference/#endpoint-set-volume-for-users-playback - Find more info on the official Spotify Web API Reference
    **/
    endpointSetVolumeForUsersPlayback(req: operations.EndpointSetVolumeForUsersPlaybackRequest, config?: AxiosRequestConfig): Promise<operations.EndpointSetVolumeForUsersPlaybackResponse>;
    /**
     * endpointSkipUsersPlaybackToNextTrack - Skip User’s Playback To Next Track
     *
     * Skips to next track in the user's queue.
     *
     * https://developer.spotify.com/documentation/web-api/reference/#endpoint-skip-users-playback-to-next-track - Find more info on the official Spotify Web API Reference
    **/
    endpointSkipUsersPlaybackToNextTrack(req: operations.EndpointSkipUsersPlaybackToNextTrackRequest, config?: AxiosRequestConfig): Promise<operations.EndpointSkipUsersPlaybackToNextTrackResponse>;
    /**
     * endpointSkipUsersPlaybackToPreviousTrack - Skip User’s Playback To Previous Track
     *
     * Skips to previous track in the user's queue.
     *
     * https://developer.spotify.com/documentation/web-api/reference/#endpoint-skip-users-playback-to-previous-track - Find more info on the official Spotify Web API Reference
    **/
    endpointSkipUsersPlaybackToPreviousTrack(req: operations.EndpointSkipUsersPlaybackToPreviousTrackRequest, config?: AxiosRequestConfig): Promise<operations.EndpointSkipUsersPlaybackToPreviousTrackResponse>;
    /**
     * endpointStartAUsersPlayback - Start/Resume a User's Playback
     *
     * Start a new context or resume current playback on the user's active device.
     *
     * https://developer.spotify.com/documentation/web-api/reference/#endpoint-start-a-users-playback - Find more info on the official Spotify Web API Reference
    **/
    endpointStartAUsersPlayback(req: operations.EndpointStartAUsersPlaybackRequest, config?: AxiosRequestConfig): Promise<operations.EndpointStartAUsersPlaybackResponse>;
    /**
     * endpointToggleShuffleForUsersPlayback - Toggle Shuffle For User’s Playback
     *
     * Toggle shuffle on or off for user's playback.
     *
     * https://developer.spotify.com/documentation/web-api/reference/#endpoint-toggle-shuffle-for-users-playback - Find more info on the official Spotify Web API Reference
    **/
    endpointToggleShuffleForUsersPlayback(req: operations.EndpointToggleShuffleForUsersPlaybackRequest, config?: AxiosRequestConfig): Promise<operations.EndpointToggleShuffleForUsersPlaybackResponse>;
    /**
     * endpointTransferAUsersPlayback - Transfer a User's Playback
     *
     * Transfer playback to a new device and determine if it should start playing.
     *
     * https://developer.spotify.com/documentation/web-api/reference/#endpoint-transfer-a-users-playback - Find more info on the official Spotify Web API Reference
    **/
    endpointTransferAUsersPlayback(req: operations.EndpointTransferAUsersPlaybackRequest, config?: AxiosRequestConfig): Promise<operations.EndpointTransferAUsersPlaybackResponse>;
}
