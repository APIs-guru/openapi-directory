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
var GroupsAddOwnerPathParams = /** @class */ (function (_super) {
    __extends(GroupsAddOwnerPathParams, _super);
    function GroupsAddOwnerPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=objectId" }),
        __metadata("design:type", String)
    ], GroupsAddOwnerPathParams.prototype, "objectId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=tenantID" }),
        __metadata("design:type", String)
    ], GroupsAddOwnerPathParams.prototype, "tenantId", void 0);
    return GroupsAddOwnerPathParams;
}(SpeakeasyBase));
export { GroupsAddOwnerPathParams };
var GroupsAddOwnerQueryParams = /** @class */ (function (_super) {
    __extends(GroupsAddOwnerQueryParams, _super);
    function GroupsAddOwnerQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=api-version" }),
        __metadata("design:type", String)
    ], GroupsAddOwnerQueryParams.prototype, "apiVersion", void 0);
    return GroupsAddOwnerQueryParams;
}(SpeakeasyBase));
export { GroupsAddOwnerQueryParams };
var GroupsAddOwnerRequests = /** @class */ (function (_super) {
    __extends(GroupsAddOwnerRequests, _super);
    function GroupsAddOwnerRequests() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", Map)
    ], GroupsAddOwnerRequests.prototype, "addOwnerParameters", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=text/json" }),
        __metadata("design:type", Map)
    ], GroupsAddOwnerRequests.prototype, "addOwnerParameters1", void 0);
    return GroupsAddOwnerRequests;
}(SpeakeasyBase));
export { GroupsAddOwnerRequests };
var GroupsAddOwnerRequest = /** @class */ (function (_super) {
    __extends(GroupsAddOwnerRequest, _super);
    function GroupsAddOwnerRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GroupsAddOwnerPathParams)
    ], GroupsAddOwnerRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GroupsAddOwnerQueryParams)
    ], GroupsAddOwnerRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GroupsAddOwnerRequests)
    ], GroupsAddOwnerRequest.prototype, "request", void 0);
    return GroupsAddOwnerRequest;
}(SpeakeasyBase));
export { GroupsAddOwnerRequest };
var GroupsAddOwnerResponse = /** @class */ (function (_super) {
    __extends(GroupsAddOwnerResponse, _super);
    function GroupsAddOwnerResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], GroupsAddOwnerResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.GraphError)
    ], GroupsAddOwnerResponse.prototype, "graphError", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], GroupsAddOwnerResponse.prototype, "statusCode", void 0);
    return GroupsAddOwnerResponse;
}(SpeakeasyBase));
export { GroupsAddOwnerResponse };
