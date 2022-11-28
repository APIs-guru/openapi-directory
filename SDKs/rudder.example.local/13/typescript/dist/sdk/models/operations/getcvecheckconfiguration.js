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
export var GetCveCheckConfiguration200ApplicationJsonActionEnum;
(function (GetCveCheckConfiguration200ApplicationJsonActionEnum) {
    GetCveCheckConfiguration200ApplicationJsonActionEnum["GetCveCheckConfiguration"] = "getCVECheckConfiguration";
})(GetCveCheckConfiguration200ApplicationJsonActionEnum || (GetCveCheckConfiguration200ApplicationJsonActionEnum = {}));
var GetCveCheckConfiguration200ApplicationJsonData = /** @class */ (function (_super) {
    __extends(GetCveCheckConfiguration200ApplicationJsonData, _super);
    function GetCveCheckConfiguration200ApplicationJsonData() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=apiKey" }),
        __metadata("design:type", String)
    ], GetCveCheckConfiguration200ApplicationJsonData.prototype, "apiKey", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=url" }),
        __metadata("design:type", String)
    ], GetCveCheckConfiguration200ApplicationJsonData.prototype, "url", void 0);
    return GetCveCheckConfiguration200ApplicationJsonData;
}(SpeakeasyBase));
export { GetCveCheckConfiguration200ApplicationJsonData };
export var GetCveCheckConfiguration200ApplicationJsonResultEnum;
(function (GetCveCheckConfiguration200ApplicationJsonResultEnum) {
    GetCveCheckConfiguration200ApplicationJsonResultEnum["Success"] = "success";
    GetCveCheckConfiguration200ApplicationJsonResultEnum["Error"] = "error";
})(GetCveCheckConfiguration200ApplicationJsonResultEnum || (GetCveCheckConfiguration200ApplicationJsonResultEnum = {}));
var GetCveCheckConfiguration200ApplicationJson = /** @class */ (function (_super) {
    __extends(GetCveCheckConfiguration200ApplicationJson, _super);
    function GetCveCheckConfiguration200ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=action" }),
        __metadata("design:type", String)
    ], GetCveCheckConfiguration200ApplicationJson.prototype, "action", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=data" }),
        __metadata("design:type", GetCveCheckConfiguration200ApplicationJsonData)
    ], GetCveCheckConfiguration200ApplicationJson.prototype, "data", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=result" }),
        __metadata("design:type", String)
    ], GetCveCheckConfiguration200ApplicationJson.prototype, "result", void 0);
    return GetCveCheckConfiguration200ApplicationJson;
}(SpeakeasyBase));
export { GetCveCheckConfiguration200ApplicationJson };
var GetCveCheckConfigurationResponse = /** @class */ (function (_super) {
    __extends(GetCveCheckConfigurationResponse, _super);
    function GetCveCheckConfigurationResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], GetCveCheckConfigurationResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], GetCveCheckConfigurationResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetCveCheckConfiguration200ApplicationJson)
    ], GetCveCheckConfigurationResponse.prototype, "getCveCheckConfiguration200ApplicationJsonObject", void 0);
    return GetCveCheckConfigurationResponse;
}(SpeakeasyBase));
export { GetCveCheckConfigurationResponse };
