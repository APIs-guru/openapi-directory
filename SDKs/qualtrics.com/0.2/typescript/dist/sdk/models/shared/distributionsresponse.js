var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
var DistributionsResponseMeta = /** @class */ (function (_super) {
    __extends(DistributionsResponseMeta, _super);
    function DistributionsResponseMeta() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=httpStatus" }),
        __metadata("design:type", String)
    ], DistributionsResponseMeta.prototype, "httpStatus", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=requestId" }),
        __metadata("design:type", String)
    ], DistributionsResponseMeta.prototype, "requestId", void 0);
    return DistributionsResponseMeta;
}(SpeakeasyBase));
export { DistributionsResponseMeta };
var DistributionsResponseResultElementsHeaders = /** @class */ (function (_super) {
    __extends(DistributionsResponseResultElementsHeaders, _super);
    function DistributionsResponseResultElementsHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=fromEmail" }),
        __metadata("design:type", Object)
    ], DistributionsResponseResultElementsHeaders.prototype, "fromEmail", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=fromName" }),
        __metadata("design:type", Object)
    ], DistributionsResponseResultElementsHeaders.prototype, "fromName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=replyToEmail" }),
        __metadata("design:type", Object)
    ], DistributionsResponseResultElementsHeaders.prototype, "replyToEmail", void 0);
    return DistributionsResponseResultElementsHeaders;
}(SpeakeasyBase));
export { DistributionsResponseResultElementsHeaders };
var DistributionsResponseResultElementsMessage = /** @class */ (function (_super) {
    __extends(DistributionsResponseResultElementsMessage, _super);
    function DistributionsResponseResultElementsMessage() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=libraryId" }),
        __metadata("design:type", Object)
    ], DistributionsResponseResultElementsMessage.prototype, "libraryId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=messageId" }),
        __metadata("design:type", Object)
    ], DistributionsResponseResultElementsMessage.prototype, "messageId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=messageText" }),
        __metadata("design:type", Object)
    ], DistributionsResponseResultElementsMessage.prototype, "messageText", void 0);
    return DistributionsResponseResultElementsMessage;
}(SpeakeasyBase));
export { DistributionsResponseResultElementsMessage };
var DistributionsResponseResultElementsRecipients = /** @class */ (function (_super) {
    __extends(DistributionsResponseResultElementsRecipients, _super);
    function DistributionsResponseResultElementsRecipients() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=contactId" }),
        __metadata("design:type", Object)
    ], DistributionsResponseResultElementsRecipients.prototype, "contactId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=libraryId" }),
        __metadata("design:type", String)
    ], DistributionsResponseResultElementsRecipients.prototype, "libraryId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=mailingListId" }),
        __metadata("design:type", String)
    ], DistributionsResponseResultElementsRecipients.prototype, "mailingListId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=sampleId" }),
        __metadata("design:type", Object)
    ], DistributionsResponseResultElementsRecipients.prototype, "sampleId", void 0);
    return DistributionsResponseResultElementsRecipients;
}(SpeakeasyBase));
export { DistributionsResponseResultElementsRecipients };
var DistributionsResponseResultElementsStats = /** @class */ (function (_super) {
    __extends(DistributionsResponseResultElementsStats, _super);
    function DistributionsResponseResultElementsStats() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=blocked" }),
        __metadata("design:type", Number)
    ], DistributionsResponseResultElementsStats.prototype, "blocked", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=bounced" }),
        __metadata("design:type", Number)
    ], DistributionsResponseResultElementsStats.prototype, "bounced", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=complaints" }),
        __metadata("design:type", Number)
    ], DistributionsResponseResultElementsStats.prototype, "complaints", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=failed" }),
        __metadata("design:type", Number)
    ], DistributionsResponseResultElementsStats.prototype, "failed", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=finished" }),
        __metadata("design:type", Number)
    ], DistributionsResponseResultElementsStats.prototype, "finished", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=opened" }),
        __metadata("design:type", Number)
    ], DistributionsResponseResultElementsStats.prototype, "opened", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=sent" }),
        __metadata("design:type", Number)
    ], DistributionsResponseResultElementsStats.prototype, "sent", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=skipped" }),
        __metadata("design:type", Number)
    ], DistributionsResponseResultElementsStats.prototype, "skipped", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=started" }),
        __metadata("design:type", Number)
    ], DistributionsResponseResultElementsStats.prototype, "started", void 0);
    return DistributionsResponseResultElementsStats;
}(SpeakeasyBase));
export { DistributionsResponseResultElementsStats };
var DistributionsResponseResultElementsSurveyLink = /** @class */ (function (_super) {
    __extends(DistributionsResponseResultElementsSurveyLink, _super);
    function DistributionsResponseResultElementsSurveyLink() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=expirationDate" }),
        __metadata("design:type", String)
    ], DistributionsResponseResultElementsSurveyLink.prototype, "expirationDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=linkType" }),
        __metadata("design:type", String)
    ], DistributionsResponseResultElementsSurveyLink.prototype, "linkType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=surveyId" }),
        __metadata("design:type", String)
    ], DistributionsResponseResultElementsSurveyLink.prototype, "surveyId", void 0);
    return DistributionsResponseResultElementsSurveyLink;
}(SpeakeasyBase));
export { DistributionsResponseResultElementsSurveyLink };
var DistributionsResponseResultElements = /** @class */ (function (_super) {
    __extends(DistributionsResponseResultElements, _super);
    function DistributionsResponseResultElements() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=createdDate" }),
        __metadata("design:type", String)
    ], DistributionsResponseResultElements.prototype, "createdDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=customHeaders" }),
        __metadata("design:type", Map)
    ], DistributionsResponseResultElements.prototype, "customHeaders", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=embeddedData" }),
        __metadata("design:type", Object)
    ], DistributionsResponseResultElements.prototype, "embeddedData", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=headers" }),
        __metadata("design:type", DistributionsResponseResultElementsHeaders)
    ], DistributionsResponseResultElements.prototype, "headers", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=id" }),
        __metadata("design:type", String)
    ], DistributionsResponseResultElements.prototype, "id", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=message" }),
        __metadata("design:type", DistributionsResponseResultElementsMessage)
    ], DistributionsResponseResultElements.prototype, "message", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=modifiedDate" }),
        __metadata("design:type", String)
    ], DistributionsResponseResultElements.prototype, "modifiedDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=organizationId" }),
        __metadata("design:type", String)
    ], DistributionsResponseResultElements.prototype, "organizationId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ownerId" }),
        __metadata("design:type", String)
    ], DistributionsResponseResultElements.prototype, "ownerId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=parentDistributionId" }),
        __metadata("design:type", Object)
    ], DistributionsResponseResultElements.prototype, "parentDistributionId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=recipients" }),
        __metadata("design:type", DistributionsResponseResultElementsRecipients)
    ], DistributionsResponseResultElements.prototype, "recipients", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=requestStatus" }),
        __metadata("design:type", String)
    ], DistributionsResponseResultElements.prototype, "requestStatus", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=requestType" }),
        __metadata("design:type", String)
    ], DistributionsResponseResultElements.prototype, "requestType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=sendDate" }),
        __metadata("design:type", String)
    ], DistributionsResponseResultElements.prototype, "sendDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=stats" }),
        __metadata("design:type", DistributionsResponseResultElementsStats)
    ], DistributionsResponseResultElements.prototype, "stats", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=surveyLink" }),
        __metadata("design:type", DistributionsResponseResultElementsSurveyLink)
    ], DistributionsResponseResultElements.prototype, "surveyLink", void 0);
    return DistributionsResponseResultElements;
}(SpeakeasyBase));
export { DistributionsResponseResultElements };
var DistributionsResponseResult = /** @class */ (function (_super) {
    __extends(DistributionsResponseResult, _super);
    function DistributionsResponseResult() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=elements", elemType: DistributionsResponseResultElements }),
        __metadata("design:type", Array)
    ], DistributionsResponseResult.prototype, "elements", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=nextPage" }),
        __metadata("design:type", Object)
    ], DistributionsResponseResult.prototype, "nextPage", void 0);
    return DistributionsResponseResult;
}(SpeakeasyBase));
export { DistributionsResponseResult };
var DistributionsResponse = /** @class */ (function (_super) {
    __extends(DistributionsResponse, _super);
    function DistributionsResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=meta" }),
        __metadata("design:type", DistributionsResponseMeta)
    ], DistributionsResponse.prototype, "meta", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=result" }),
        __metadata("design:type", DistributionsResponseResult)
    ], DistributionsResponse.prototype, "result", void 0);
    return DistributionsResponse;
}(SpeakeasyBase));
export { DistributionsResponse };
