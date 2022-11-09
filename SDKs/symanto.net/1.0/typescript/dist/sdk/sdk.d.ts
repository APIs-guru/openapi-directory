import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
import { Security } from "./models/shared";
declare type OptsFunc = (sdk: SDK) => void;
export declare function WithServerURL(serverURL: string, params?: Map<string, string>): OptsFunc;
export declare function WithClient(client: AxiosInstance): OptsFunc;
export declare function WithSecurity(security: Security): OptsFunc;
export declare class SDK {
    defaultClient?: AxiosInstance;
    securityClient?: AxiosInstance;
    security?: any;
    serverURL: string;
    constructor(...opts: OptsFunc[]);
    /**
     * Identify the purpose and writing style of a written text.
     *
     * Supported Languages: [`ar`, `de`, `en`, `es`, `fr`, `it`, `nl`, `pt`, `ru`, `tr`, `zh`]
     *
     * Returned labels:
     * * action-seeking
     * * fact-oriented
     * * information-seeking
     * * self-revealing
    **/
    Communication(req: operations.CommunicationRequest, config?: AxiosRequestConfig): Promise<operations.CommunicationResponse>;
    /**
     * Detect the emotions of the text based on Ekman.
     *
     * Supported Langauges: [`en`, `de`, `es`]
     *
     * Returned labels:
     * * anger
     * * disgust
     * * fear
     * * joy
     * * sadness
     * * surprise
     * * no-emotion
    **/
    EkmanEmotion(req: operations.EkmanEmotionRequest, config?: AxiosRequestConfig): Promise<operations.EkmanEmotionResponse>;
    /**
     * Detect the emotions of the text.
     *
     * Supported Langauges: [`en`, `de`, `es`]
     *
     * Returned labels:
     * * anger
     * * joy
     * * love
     * * sadness
     * * surprise
     * * uncategorized
    **/
    Emotion(req: operations.EmotionRequest, config?: AxiosRequestConfig): Promise<operations.EmotionResponse>;
    /**
     * Identifies what language a text is written in. Only languages that our API supports can be analyzed.
     *
     * Returned labels:
     * * language_code of the detected language
    **/
    LanguageDetection(req: operations.LanguageDetectionRequest, config?: AxiosRequestConfig): Promise<operations.LanguageDetectionResponse>;
    /**
     * Predict the personality trait of author of any written text.
     *
     * Supported Languages: [`ar`, `de`, `en`, `es`, `fr`, `it`, `nl`, `pt`, `ru`, `tr`, `zh`]
     *
     * Returned labels:
     *
     * * emotional
     * * rational
    **/
    Personality(req: operations.PersonalityRequest, config?: AxiosRequestConfig): Promise<operations.PersonalityResponse>;
    /**
     * Evaluate the overall tonality of the text.
     *
     * Supported Languages: [`en`, `de`, `es`]
     *
     * Returned labels:
     * * positive
     * * negative
    **/
    Sentiment(req: operations.SentimentRequest, config?: AxiosRequestConfig): Promise<operations.SentimentResponse>;
    TopicSentiment(req: operations.TopicSentimentRequest, config?: AxiosRequestConfig): Promise<operations.TopicSentimentResponse>;
}
export {};
