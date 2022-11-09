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
import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export var LISTPARTICIPANT_SERVERS = [
    "https://api.twilio.com",
];
var ListParticipantPathParams = /** @class */ (function (_super) {
    __extends(ListParticipantPathParams, _super);
    function ListParticipantPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "pathParam, style=simple;explode=false;name=AccountSid" }),
        __metadata("design:type", String)
    ], ListParticipantPathParams.prototype, "accountSid", void 0);
    __decorate([
        Metadata({ data: "pathParam, style=simple;explode=false;name=ConferenceSid" }),
        __metadata("design:type", String)
    ], ListParticipantPathParams.prototype, "conferenceSid", void 0);
    return ListParticipantPathParams;
}(SpeakeasyBase));
export { ListParticipantPathParams };
var ListParticipantQueryParams = /** @class */ (function (_super) {
    __extends(ListParticipantQueryParams, _super);
    function ListParticipantQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=Coaching" }),
        __metadata("design:type", Boolean)
    ], ListParticipantQueryParams.prototype, "coaching", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=Hold" }),
        __metadata("design:type", Boolean)
    ], ListParticipantQueryParams.prototype, "hold", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=Muted" }),
        __metadata("design:type", Boolean)
    ], ListParticipantQueryParams.prototype, "muted", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=PageSize" }),
        __metadata("design:type", Number)
    ], ListParticipantQueryParams.prototype, "pageSize", void 0);
    return ListParticipantQueryParams;
}(SpeakeasyBase));
export { ListParticipantQueryParams };
var ListParticipantSecurity = /** @class */ (function (_super) {
    __extends(ListParticipantSecurity, _super);
    function ListParticipantSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "security, scheme=true;type=http;subtype=basic" }),
        __metadata("design:type", shared.SchemeAccountSidAuthToken)
    ], ListParticipantSecurity.prototype, "accountSidAuthToken", void 0);
    return ListParticipantSecurity;
}(SpeakeasyBase));
export { ListParticipantSecurity };
var ListParticipantRequest = /** @class */ (function (_super) {
    __extends(ListParticipantRequest, _super);
    function ListParticipantRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], ListParticipantRequest.prototype, "serverUrl", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", ListParticipantPathParams)
    ], ListParticipantRequest.prototype, "pathParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", ListParticipantQueryParams)
    ], ListParticipantRequest.prototype, "queryParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", ListParticipantSecurity)
    ], ListParticipantRequest.prototype, "security", void 0);
    return ListParticipantRequest;
}(SpeakeasyBase));
export { ListParticipantRequest };
var ListParticipantListParticipantResponse = /** @class */ (function (_super) {
    __extends(ListParticipantListParticipantResponse, _super);
    function ListParticipantListParticipantResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=end" }),
        __metadata("design:type", Number)
    ], ListParticipantListParticipantResponse.prototype, "end", void 0);
    __decorate([
        Metadata({ data: "json, name=first_page_uri" }),
        __metadata("design:type", String)
    ], ListParticipantListParticipantResponse.prototype, "firstPageUri", void 0);
    __decorate([
        Metadata({ data: "json, name=next_page_uri" }),
        __metadata("design:type", String)
    ], ListParticipantListParticipantResponse.prototype, "nextPageUri", void 0);
    __decorate([
        Metadata({ data: "json, name=page" }),
        __metadata("design:type", Number)
    ], ListParticipantListParticipantResponse.prototype, "page", void 0);
    __decorate([
        Metadata({ data: "json, name=page_size" }),
        __metadata("design:type", Number)
    ], ListParticipantListParticipantResponse.prototype, "pageSize", void 0);
    __decorate([
        Metadata({ data: "json, name=participants", elemType: shared.ApiV2010AccountConferenceParticipant }),
        __metadata("design:type", Array)
    ], ListParticipantListParticipantResponse.prototype, "participants", void 0);
    __decorate([
        Metadata({ data: "json, name=previous_page_uri" }),
        __metadata("design:type", String)
    ], ListParticipantListParticipantResponse.prototype, "previousPageUri", void 0);
    __decorate([
        Metadata({ data: "json, name=start" }),
        __metadata("design:type", Number)
    ], ListParticipantListParticipantResponse.prototype, "start", void 0);
    __decorate([
        Metadata({ data: "json, name=uri" }),
        __metadata("design:type", String)
    ], ListParticipantListParticipantResponse.prototype, "uri", void 0);
    return ListParticipantListParticipantResponse;
}(SpeakeasyBase));
export { ListParticipantListParticipantResponse };
var ListParticipantResponse = /** @class */ (function (_super) {
    __extends(ListParticipantResponse, _super);
    function ListParticipantResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], ListParticipantResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", ListParticipantListParticipantResponse)
    ], ListParticipantResponse.prototype, "listParticipantResponse", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], ListParticipantResponse.prototype, "statusCode", void 0);
    return ListParticipantResponse;
}(SpeakeasyBase));
export { ListParticipantResponse };
