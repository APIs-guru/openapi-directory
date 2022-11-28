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
export var FolderSettingsFolderTypeEnum;
(function (FolderSettingsFolderTypeEnum) {
    FolderSettingsFolderTypeEnum["Folder"] = "Folder";
    FolderSettingsFolderTypeEnum["Location"] = "Location";
    FolderSettingsFolderTypeEnum["Factory"] = "Factory";
    FolderSettingsFolderTypeEnum["House"] = "House";
    FolderSettingsFolderTypeEnum["Office"] = "Office";
    FolderSettingsFolderTypeEnum["Machine"] = "Machine";
    FolderSettingsFolderTypeEnum["VirtualMeter"] = "VirtualMeter";
    FolderSettingsFolderTypeEnum["ElecticityFolder"] = "ElecticityFolder";
    FolderSettingsFolderTypeEnum["WaterFolder"] = "WaterFolder";
    FolderSettingsFolderTypeEnum["HeatFolder"] = "HeatFolder";
    FolderSettingsFolderTypeEnum["GasFolder"] = "GasFolder";
    FolderSettingsFolderTypeEnum["TemperatureFolder"] = "TemperatureFolder";
    FolderSettingsFolderTypeEnum["Sun"] = "Sun";
    FolderSettingsFolderTypeEnum["Light"] = "Light";
    FolderSettingsFolderTypeEnum["Ice"] = "Ice";
    FolderSettingsFolderTypeEnum["Sofa"] = "Sofa";
    FolderSettingsFolderTypeEnum["Food"] = "Food";
    FolderSettingsFolderTypeEnum["Coffee"] = "Coffee";
    FolderSettingsFolderTypeEnum["Car"] = "Car";
    FolderSettingsFolderTypeEnum["ChargingStation"] = "ChargingStation";
    FolderSettingsFolderTypeEnum["Meter"] = "Meter";
    FolderSettingsFolderTypeEnum["User"] = "User";
    FolderSettingsFolderTypeEnum["Trash"] = "Trash";
    FolderSettingsFolderTypeEnum["GridPhotovoltaicPowerSystem"] = "GridPhotovoltaicPowerSystem";
})(FolderSettingsFolderTypeEnum || (FolderSettingsFolderTypeEnum = {}));
// FolderSettings
/**
 * Container for the folder settings
**/
var FolderSettings = /** @class */ (function (_super) {
    __extends(FolderSettings, _super);
    function FolderSettings() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Description, form, name=Description;" }),
        __metadata("design:type", String)
    ], FolderSettings.prototype, "description", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Enable, form, name=Enable;" }),
        __metadata("design:type", Boolean)
    ], FolderSettings.prototype, "enable", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=FolderType, form, name=FolderType;" }),
        __metadata("design:type", String)
    ], FolderSettings.prototype, "folderType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Name, form, name=Name;" }),
        __metadata("design:type", String)
    ], FolderSettings.prototype, "name", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ParentFolderId, form, name=ParentFolderId;" }),
        __metadata("design:type", String)
    ], FolderSettings.prototype, "parentFolderId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=SerialNumber, form, name=SerialNumber;" }),
        __metadata("design:type", Number)
    ], FolderSettings.prototype, "serialNumber", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=UseableForVirtualBillingMeters, form, name=UseableForVirtualBillingMeters;" }),
        __metadata("design:type", Boolean)
    ], FolderSettings.prototype, "useableForVirtualBillingMeters", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ValueCorrection, form, name=ValueCorrection;" }),
        __metadata("design:type", Number)
    ], FolderSettings.prototype, "valueCorrection", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ValueCorrectionParentFolder, form, name=ValueCorrectionParentFolder;" }),
        __metadata("design:type", Number)
    ], FolderSettings.prototype, "valueCorrectionParentFolder", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=VisualizationName, form, name=VisualizationName;" }),
        __metadata("design:type", String)
    ], FolderSettings.prototype, "visualizationName", void 0);
    return FolderSettings;
}(SpeakeasyBase));
export { FolderSettings };
