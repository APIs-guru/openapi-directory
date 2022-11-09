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
export var LISTMEMBER_SERVERS = [
    "https://api.twilio.com",
];
var ListMemberPathParams = /** @class */ (function (_super) {
    __extends(ListMemberPathParams, _super);
    function ListMemberPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "pathParam, style=simple;explode=false;name=AccountSid" }),
        __metadata("design:type", String)
    ], ListMemberPathParams.prototype, "accountSid", void 0);
    __decorate([
        Metadata({ data: "pathParam, style=simple;explode=false;name=QueueSid" }),
        __metadata("design:type", String)
    ], ListMemberPathParams.prototype, "queueSid", void 0);
    return ListMemberPathParams;
}(SpeakeasyBase));
export { ListMemberPathParams };
var ListMemberQueryParams = /** @class */ (function (_super) {
    __extends(ListMemberQueryParams, _super);
    function ListMemberQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=PageSize" }),
        __metadata("design:type", Number)
    ], ListMemberQueryParams.prototype, "pageSize", void 0);
    return ListMemberQueryParams;
}(SpeakeasyBase));
export { ListMemberQueryParams };
var ListMemberSecurity = /** @class */ (function (_super) {
    __extends(ListMemberSecurity, _super);
    function ListMemberSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "security, scheme=true;type=http;subtype=basic" }),
        __metadata("design:type", shared.SchemeAccountSidAuthToken)
    ], ListMemberSecurity.prototype, "accountSidAuthToken", void 0);
    return ListMemberSecurity;
}(SpeakeasyBase));
export { ListMemberSecurity };
var ListMemberRequest = /** @class */ (function (_super) {
    __extends(ListMemberRequest, _super);
    function ListMemberRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], ListMemberRequest.prototype, "serverUrl", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", ListMemberPathParams)
    ], ListMemberRequest.prototype, "pathParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", ListMemberQueryParams)
    ], ListMemberRequest.prototype, "queryParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", ListMemberSecurity)
    ], ListMemberRequest.prototype, "security", void 0);
    return ListMemberRequest;
}(SpeakeasyBase));
export { ListMemberRequest };
var ListMemberListMemberResponse = /** @class */ (function (_super) {
    __extends(ListMemberListMemberResponse, _super);
    function ListMemberListMemberResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=end" }),
        __metadata("design:type", Number)
    ], ListMemberListMemberResponse.prototype, "end", void 0);
    __decorate([
        Metadata({ data: "json, name=first_page_uri" }),
        __metadata("design:type", String)
    ], ListMemberListMemberResponse.prototype, "firstPageUri", void 0);
    __decorate([
        Metadata({ data: "json, name=next_page_uri" }),
        __metadata("design:type", String)
    ], ListMemberListMemberResponse.prototype, "nextPageUri", void 0);
    __decorate([
        Metadata({ data: "json, name=page" }),
        __metadata("design:type", Number)
    ], ListMemberListMemberResponse.prototype, "page", void 0);
    __decorate([
        Metadata({ data: "json, name=page_size" }),
        __metadata("design:type", Number)
    ], ListMemberListMemberResponse.prototype, "pageSize", void 0);
    __decorate([
        Metadata({ data: "json, name=previous_page_uri" }),
        __metadata("design:type", String)
    ], ListMemberListMemberResponse.prototype, "previousPageUri", void 0);
    __decorate([
        Metadata({ data: "json, name=queue_members", elemType: shared.ApiV2010AccountQueueMember }),
        __metadata("design:type", Array)
    ], ListMemberListMemberResponse.prototype, "queueMembers", void 0);
    __decorate([
        Metadata({ data: "json, name=start" }),
        __metadata("design:type", Number)
    ], ListMemberListMemberResponse.prototype, "start", void 0);
    __decorate([
        Metadata({ data: "json, name=uri" }),
        __metadata("design:type", String)
    ], ListMemberListMemberResponse.prototype, "uri", void 0);
    return ListMemberListMemberResponse;
}(SpeakeasyBase));
export { ListMemberListMemberResponse };
var ListMemberResponse = /** @class */ (function (_super) {
    __extends(ListMemberResponse, _super);
    function ListMemberResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], ListMemberResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", ListMemberListMemberResponse)
    ], ListMemberResponse.prototype, "listMemberResponse", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], ListMemberResponse.prototype, "statusCode", void 0);
    return ListMemberResponse;
}(SpeakeasyBase));
export { ListMemberResponse };
