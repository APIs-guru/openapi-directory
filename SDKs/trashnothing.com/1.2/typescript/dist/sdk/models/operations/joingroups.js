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
var JoinGroupsRequestBody = /** @class */ (function (_super) {
    __extends(JoinGroupsRequestBody, _super);
    function JoinGroupsRequestBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "multipart_form, name=group_ids" }),
        __metadata("design:type", String)
    ], JoinGroupsRequestBody.prototype, "groupIds", void 0);
    return JoinGroupsRequestBody;
}(SpeakeasyBase));
export { JoinGroupsRequestBody };
var JoinGroups200ApplicationJson = /** @class */ (function (_super) {
    __extends(JoinGroups200ApplicationJson, _super);
    function JoinGroups200ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=groups", elemType: shared.Group }),
        __metadata("design:type", Array)
    ], JoinGroups200ApplicationJson.prototype, "groups", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=over_group_limit" }),
        __metadata("design:type", Boolean)
    ], JoinGroups200ApplicationJson.prototype, "overGroupLimit", void 0);
    return JoinGroups200ApplicationJson;
}(SpeakeasyBase));
export { JoinGroups200ApplicationJson };
var JoinGroupsRequest = /** @class */ (function (_super) {
    __extends(JoinGroupsRequest, _super);
    function JoinGroupsRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=multipart/form-data" }),
        __metadata("design:type", JoinGroupsRequestBody)
    ], JoinGroupsRequest.prototype, "request", void 0);
    return JoinGroupsRequest;
}(SpeakeasyBase));
export { JoinGroupsRequest };
var JoinGroupsResponse = /** @class */ (function (_super) {
    __extends(JoinGroupsResponse, _super);
    function JoinGroupsResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], JoinGroupsResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], JoinGroupsResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", JoinGroups200ApplicationJson)
    ], JoinGroupsResponse.prototype, "joinGroups200ApplicationJsonObject", void 0);
    return JoinGroupsResponse;
}(SpeakeasyBase));
export { JoinGroupsResponse };
