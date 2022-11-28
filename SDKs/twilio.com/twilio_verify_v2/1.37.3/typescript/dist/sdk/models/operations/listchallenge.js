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
import * as shared from "../shared";
export var ListChallengeServerList = [
    "https://verify.twilio.com",
];
var ListChallengePathParams = /** @class */ (function (_super) {
    __extends(ListChallengePathParams, _super);
    function ListChallengePathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=Identity" }),
        __metadata("design:type", String)
    ], ListChallengePathParams.prototype, "identity", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=ServiceSid" }),
        __metadata("design:type", String)
    ], ListChallengePathParams.prototype, "serviceSid", void 0);
    return ListChallengePathParams;
}(SpeakeasyBase));
export { ListChallengePathParams };
var ListChallengeQueryParams = /** @class */ (function (_super) {
    __extends(ListChallengeQueryParams, _super);
    function ListChallengeQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=FactorSid" }),
        __metadata("design:type", String)
    ], ListChallengeQueryParams.prototype, "factorSid", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Order" }),
        __metadata("design:type", String)
    ], ListChallengeQueryParams.prototype, "order", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=PageSize" }),
        __metadata("design:type", Number)
    ], ListChallengeQueryParams.prototype, "pageSize", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Status" }),
        __metadata("design:type", String)
    ], ListChallengeQueryParams.prototype, "status", void 0);
    return ListChallengeQueryParams;
}(SpeakeasyBase));
export { ListChallengeQueryParams };
var ListChallengeSecurity = /** @class */ (function (_super) {
    __extends(ListChallengeSecurity, _super);
    function ListChallengeSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=basic" }),
        __metadata("design:type", shared.SchemeAccountSidAuthToken)
    ], ListChallengeSecurity.prototype, "accountSidAuthToken", void 0);
    return ListChallengeSecurity;
}(SpeakeasyBase));
export { ListChallengeSecurity };
var ListChallengeListChallengeResponseMeta = /** @class */ (function (_super) {
    __extends(ListChallengeListChallengeResponseMeta, _super);
    function ListChallengeListChallengeResponseMeta() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=first_page_url" }),
        __metadata("design:type", String)
    ], ListChallengeListChallengeResponseMeta.prototype, "firstPageUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=key" }),
        __metadata("design:type", String)
    ], ListChallengeListChallengeResponseMeta.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=next_page_url" }),
        __metadata("design:type", String)
    ], ListChallengeListChallengeResponseMeta.prototype, "nextPageUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=page" }),
        __metadata("design:type", Number)
    ], ListChallengeListChallengeResponseMeta.prototype, "page", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=page_size" }),
        __metadata("design:type", Number)
    ], ListChallengeListChallengeResponseMeta.prototype, "pageSize", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=previous_page_url" }),
        __metadata("design:type", String)
    ], ListChallengeListChallengeResponseMeta.prototype, "previousPageUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=url" }),
        __metadata("design:type", String)
    ], ListChallengeListChallengeResponseMeta.prototype, "url", void 0);
    return ListChallengeListChallengeResponseMeta;
}(SpeakeasyBase));
export { ListChallengeListChallengeResponseMeta };
var ListChallengeListChallengeResponse = /** @class */ (function (_super) {
    __extends(ListChallengeListChallengeResponse, _super);
    function ListChallengeListChallengeResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=challenges", elemType: shared.VerifyV2ServiceEntityChallenge }),
        __metadata("design:type", Array)
    ], ListChallengeListChallengeResponse.prototype, "challenges", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=meta" }),
        __metadata("design:type", ListChallengeListChallengeResponseMeta)
    ], ListChallengeListChallengeResponse.prototype, "meta", void 0);
    return ListChallengeListChallengeResponse;
}(SpeakeasyBase));
export { ListChallengeListChallengeResponse };
var ListChallengeRequest = /** @class */ (function (_super) {
    __extends(ListChallengeRequest, _super);
    function ListChallengeRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], ListChallengeRequest.prototype, "serverUrl", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ListChallengePathParams)
    ], ListChallengeRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ListChallengeQueryParams)
    ], ListChallengeRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ListChallengeSecurity)
    ], ListChallengeRequest.prototype, "security", void 0);
    return ListChallengeRequest;
}(SpeakeasyBase));
export { ListChallengeRequest };
var ListChallengeResponse = /** @class */ (function (_super) {
    __extends(ListChallengeResponse, _super);
    function ListChallengeResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], ListChallengeResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ListChallengeListChallengeResponse)
    ], ListChallengeResponse.prototype, "listChallengeResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], ListChallengeResponse.prototype, "statusCode", void 0);
    return ListChallengeResponse;
}(SpeakeasyBase));
export { ListChallengeResponse };
