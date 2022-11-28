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
export var DisruptionsGetAllDisruptionsDisruptionStatusEnum;
(function (DisruptionsGetAllDisruptionsDisruptionStatusEnum) {
    DisruptionsGetAllDisruptionsDisruptionStatusEnum["Current"] = "current";
    DisruptionsGetAllDisruptionsDisruptionStatusEnum["Planned"] = "planned";
})(DisruptionsGetAllDisruptionsDisruptionStatusEnum || (DisruptionsGetAllDisruptionsDisruptionStatusEnum = {}));
var DisruptionsGetAllDisruptionsQueryParams = /** @class */ (function (_super) {
    __extends(DisruptionsGetAllDisruptionsQueryParams, _super);
    function DisruptionsGetAllDisruptionsQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=devid" }),
        __metadata("design:type", String)
    ], DisruptionsGetAllDisruptionsQueryParams.prototype, "devid", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=disruption_modes" }),
        __metadata("design:type", Array)
    ], DisruptionsGetAllDisruptionsQueryParams.prototype, "disruptionModes", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=disruption_status" }),
        __metadata("design:type", String)
    ], DisruptionsGetAllDisruptionsQueryParams.prototype, "disruptionStatus", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=route_types" }),
        __metadata("design:type", Array)
    ], DisruptionsGetAllDisruptionsQueryParams.prototype, "routeTypes", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=signature" }),
        __metadata("design:type", String)
    ], DisruptionsGetAllDisruptionsQueryParams.prototype, "signature", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=token" }),
        __metadata("design:type", String)
    ], DisruptionsGetAllDisruptionsQueryParams.prototype, "token", void 0);
    return DisruptionsGetAllDisruptionsQueryParams;
}(SpeakeasyBase));
export { DisruptionsGetAllDisruptionsQueryParams };
var DisruptionsGetAllDisruptionsRequest = /** @class */ (function (_super) {
    __extends(DisruptionsGetAllDisruptionsRequest, _super);
    function DisruptionsGetAllDisruptionsRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DisruptionsGetAllDisruptionsQueryParams)
    ], DisruptionsGetAllDisruptionsRequest.prototype, "queryParams", void 0);
    return DisruptionsGetAllDisruptionsRequest;
}(SpeakeasyBase));
export { DisruptionsGetAllDisruptionsRequest };
var DisruptionsGetAllDisruptionsResponse = /** @class */ (function (_super) {
    __extends(DisruptionsGetAllDisruptionsResponse, _super);
    function DisruptionsGetAllDisruptionsResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Uint8Array)
    ], DisruptionsGetAllDisruptionsResponse.prototype, "body", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], DisruptionsGetAllDisruptionsResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], DisruptionsGetAllDisruptionsResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.V3DisruptionsResponse)
    ], DisruptionsGetAllDisruptionsResponse.prototype, "v3DisruptionsResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.V3ErrorResponse)
    ], DisruptionsGetAllDisruptionsResponse.prototype, "v3ErrorResponse", void 0);
    return DisruptionsGetAllDisruptionsResponse;
}(SpeakeasyBase));
export { DisruptionsGetAllDisruptionsResponse };
