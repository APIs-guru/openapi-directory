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
var DisruptionsGetDisruptionsByRoutePathParams = /** @class */ (function (_super) {
    __extends(DisruptionsGetDisruptionsByRoutePathParams, _super);
    function DisruptionsGetDisruptionsByRoutePathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=route_id" }),
        __metadata("design:type", Number)
    ], DisruptionsGetDisruptionsByRoutePathParams.prototype, "routeId", void 0);
    return DisruptionsGetDisruptionsByRoutePathParams;
}(SpeakeasyBase));
export { DisruptionsGetDisruptionsByRoutePathParams };
export var DisruptionsGetDisruptionsByRouteDisruptionStatusEnum;
(function (DisruptionsGetDisruptionsByRouteDisruptionStatusEnum) {
    DisruptionsGetDisruptionsByRouteDisruptionStatusEnum["Current"] = "current";
    DisruptionsGetDisruptionsByRouteDisruptionStatusEnum["Planned"] = "planned";
})(DisruptionsGetDisruptionsByRouteDisruptionStatusEnum || (DisruptionsGetDisruptionsByRouteDisruptionStatusEnum = {}));
var DisruptionsGetDisruptionsByRouteQueryParams = /** @class */ (function (_super) {
    __extends(DisruptionsGetDisruptionsByRouteQueryParams, _super);
    function DisruptionsGetDisruptionsByRouteQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=devid" }),
        __metadata("design:type", String)
    ], DisruptionsGetDisruptionsByRouteQueryParams.prototype, "devid", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=disruption_status" }),
        __metadata("design:type", String)
    ], DisruptionsGetDisruptionsByRouteQueryParams.prototype, "disruptionStatus", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=signature" }),
        __metadata("design:type", String)
    ], DisruptionsGetDisruptionsByRouteQueryParams.prototype, "signature", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=token" }),
        __metadata("design:type", String)
    ], DisruptionsGetDisruptionsByRouteQueryParams.prototype, "token", void 0);
    return DisruptionsGetDisruptionsByRouteQueryParams;
}(SpeakeasyBase));
export { DisruptionsGetDisruptionsByRouteQueryParams };
var DisruptionsGetDisruptionsByRouteRequest = /** @class */ (function (_super) {
    __extends(DisruptionsGetDisruptionsByRouteRequest, _super);
    function DisruptionsGetDisruptionsByRouteRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DisruptionsGetDisruptionsByRoutePathParams)
    ], DisruptionsGetDisruptionsByRouteRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DisruptionsGetDisruptionsByRouteQueryParams)
    ], DisruptionsGetDisruptionsByRouteRequest.prototype, "queryParams", void 0);
    return DisruptionsGetDisruptionsByRouteRequest;
}(SpeakeasyBase));
export { DisruptionsGetDisruptionsByRouteRequest };
var DisruptionsGetDisruptionsByRouteResponse = /** @class */ (function (_super) {
    __extends(DisruptionsGetDisruptionsByRouteResponse, _super);
    function DisruptionsGetDisruptionsByRouteResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Uint8Array)
    ], DisruptionsGetDisruptionsByRouteResponse.prototype, "body", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], DisruptionsGetDisruptionsByRouteResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], DisruptionsGetDisruptionsByRouteResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.V3DisruptionsResponse)
    ], DisruptionsGetDisruptionsByRouteResponse.prototype, "v3DisruptionsResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.V3ErrorResponse)
    ], DisruptionsGetDisruptionsByRouteResponse.prototype, "v3ErrorResponse", void 0);
    return DisruptionsGetDisruptionsByRouteResponse;
}(SpeakeasyBase));
export { DisruptionsGetDisruptionsByRouteResponse };
