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
export var ListParameters200ApplicationJsonActionEnum;
(function (ListParameters200ApplicationJsonActionEnum) {
    ListParameters200ApplicationJsonActionEnum["ListParameters"] = "listParameters";
})(ListParameters200ApplicationJsonActionEnum || (ListParameters200ApplicationJsonActionEnum = {}));
// ListParameters200ApplicationJsonData
/**
 * Parameters
**/
var ListParameters200ApplicationJsonData = /** @class */ (function (_super) {
    __extends(ListParameters200ApplicationJsonData, _super);
    function ListParameters200ApplicationJsonData() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=parameters", elemType: shared.Parameter }),
        __metadata("design:type", Array)
    ], ListParameters200ApplicationJsonData.prototype, "parameters", void 0);
    return ListParameters200ApplicationJsonData;
}(SpeakeasyBase));
export { ListParameters200ApplicationJsonData };
export var ListParameters200ApplicationJsonResultEnum;
(function (ListParameters200ApplicationJsonResultEnum) {
    ListParameters200ApplicationJsonResultEnum["Success"] = "success";
    ListParameters200ApplicationJsonResultEnum["Error"] = "error";
})(ListParameters200ApplicationJsonResultEnum || (ListParameters200ApplicationJsonResultEnum = {}));
var ListParameters200ApplicationJson = /** @class */ (function (_super) {
    __extends(ListParameters200ApplicationJson, _super);
    function ListParameters200ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=action" }),
        __metadata("design:type", String)
    ], ListParameters200ApplicationJson.prototype, "action", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=data" }),
        __metadata("design:type", ListParameters200ApplicationJsonData)
    ], ListParameters200ApplicationJson.prototype, "data", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=result" }),
        __metadata("design:type", String)
    ], ListParameters200ApplicationJson.prototype, "result", void 0);
    return ListParameters200ApplicationJson;
}(SpeakeasyBase));
export { ListParameters200ApplicationJson };
var ListParametersResponse = /** @class */ (function (_super) {
    __extends(ListParametersResponse, _super);
    function ListParametersResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], ListParametersResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], ListParametersResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ListParameters200ApplicationJson)
    ], ListParametersResponse.prototype, "listParameters200ApplicationJsonObject", void 0);
    return ListParametersResponse;
}(SpeakeasyBase));
export { ListParametersResponse };
