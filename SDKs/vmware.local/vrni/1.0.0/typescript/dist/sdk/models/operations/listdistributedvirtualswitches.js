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
var ListDistributedVirtualSwitchesQueryParams = /** @class */ (function (_super) {
    __extends(ListDistributedVirtualSwitchesQueryParams, _super);
    function ListDistributedVirtualSwitchesQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=cursor" }),
        __metadata("design:type", String)
    ], ListDistributedVirtualSwitchesQueryParams.prototype, "cursor", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=end_time" }),
        __metadata("design:type", Number)
    ], ListDistributedVirtualSwitchesQueryParams.prototype, "endTime", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=size" }),
        __metadata("design:type", Number)
    ], ListDistributedVirtualSwitchesQueryParams.prototype, "size", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=start_time" }),
        __metadata("design:type", Number)
    ], ListDistributedVirtualSwitchesQueryParams.prototype, "startTime", void 0);
    return ListDistributedVirtualSwitchesQueryParams;
}(SpeakeasyBase));
export { ListDistributedVirtualSwitchesQueryParams };
var ListDistributedVirtualSwitchesSecurity = /** @class */ (function (_super) {
    __extends(ListDistributedVirtualSwitchesSecurity, _super);
    function ListDistributedVirtualSwitchesSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=header" }),
        __metadata("design:type", shared.SchemeApiKeyAuth)
    ], ListDistributedVirtualSwitchesSecurity.prototype, "apiKeyAuth", void 0);
    return ListDistributedVirtualSwitchesSecurity;
}(SpeakeasyBase));
export { ListDistributedVirtualSwitchesSecurity };
var ListDistributedVirtualSwitchesRequest = /** @class */ (function (_super) {
    __extends(ListDistributedVirtualSwitchesRequest, _super);
    function ListDistributedVirtualSwitchesRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ListDistributedVirtualSwitchesQueryParams)
    ], ListDistributedVirtualSwitchesRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ListDistributedVirtualSwitchesSecurity)
    ], ListDistributedVirtualSwitchesRequest.prototype, "security", void 0);
    return ListDistributedVirtualSwitchesRequest;
}(SpeakeasyBase));
export { ListDistributedVirtualSwitchesRequest };
var ListDistributedVirtualSwitchesResponse = /** @class */ (function (_super) {
    __extends(ListDistributedVirtualSwitchesResponse, _super);
    function ListDistributedVirtualSwitchesResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.ApiError)
    ], ListDistributedVirtualSwitchesResponse.prototype, "apiError", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], ListDistributedVirtualSwitchesResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.PagedListResponseWithTime)
    ], ListDistributedVirtualSwitchesResponse.prototype, "pagedListResponseWithTime", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], ListDistributedVirtualSwitchesResponse.prototype, "statusCode", void 0);
    return ListDistributedVirtualSwitchesResponse;
}(SpeakeasyBase));
export { ListDistributedVirtualSwitchesResponse };
