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
var GroupsCreatePathParams = /** @class */ (function (_super) {
    __extends(GroupsCreatePathParams, _super);
    function GroupsCreatePathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=tenantID" }),
        __metadata("design:type", String)
    ], GroupsCreatePathParams.prototype, "tenantId", void 0);
    return GroupsCreatePathParams;
}(SpeakeasyBase));
export { GroupsCreatePathParams };
var GroupsCreateQueryParams = /** @class */ (function (_super) {
    __extends(GroupsCreateQueryParams, _super);
    function GroupsCreateQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=api-version" }),
        __metadata("design:type", String)
    ], GroupsCreateQueryParams.prototype, "apiVersion", void 0);
    return GroupsCreateQueryParams;
}(SpeakeasyBase));
export { GroupsCreateQueryParams };
var GroupsCreateRequests = /** @class */ (function (_super) {
    __extends(GroupsCreateRequests, _super);
    function GroupsCreateRequests() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", Map)
    ], GroupsCreateRequests.prototype, "groupCreateParameters", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=text/json" }),
        __metadata("design:type", Map)
    ], GroupsCreateRequests.prototype, "groupCreateParameters1", void 0);
    return GroupsCreateRequests;
}(SpeakeasyBase));
export { GroupsCreateRequests };
var GroupsCreateRequest = /** @class */ (function (_super) {
    __extends(GroupsCreateRequest, _super);
    function GroupsCreateRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GroupsCreatePathParams)
    ], GroupsCreateRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GroupsCreateQueryParams)
    ], GroupsCreateRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GroupsCreateRequests)
    ], GroupsCreateRequest.prototype, "request", void 0);
    return GroupsCreateRequest;
}(SpeakeasyBase));
export { GroupsCreateRequest };
var GroupsCreateResponse = /** @class */ (function (_super) {
    __extends(GroupsCreateResponse, _super);
    function GroupsCreateResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Map)
    ], GroupsCreateResponse.prototype, "adGroup", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], GroupsCreateResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.GraphError)
    ], GroupsCreateResponse.prototype, "graphError", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], GroupsCreateResponse.prototype, "statusCode", void 0);
    return GroupsCreateResponse;
}(SpeakeasyBase));
export { GroupsCreateResponse };
