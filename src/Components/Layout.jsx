import React from "react"
import Footer from "./Footer"
import {Link,NavLink, Outlet} from "react-router-dom"

export function Layout(){
    return(
        <div className="flex flex-col">
        <header className="p-4 bg-coolGray-100 text-coolGray-800 w-full ">
        <div className="container flex justify-between h-16 mx-auto">
          <Link
            to="/"
            aria-label="Back to homepage"
            className="flex items-center p-2"
          >
            
            <svg className="max-w-xs" xmlns="http://www.w3.org/2000/svg" xml:space="preserve" width="1500" height="1500" viewBox="0 0 1500 1500" data-version="1" data-id="lg_8BKezSynSpDD3ZF8al" x="0" y="0"><rect width="1500" height="1500" id="background" stroke="transparent" fill="#ffffff"></rect><g id="outer-wrapper" data-padding="20" transform="matrix(1.7857142857142858,0,0,1.7857142857142858,-589.2857142857144,-589.2857142857144)"><g id="inner-wrapper" transform="matrix(0.9642857142857143,0,0,0.9642857142857143,10,1.6607142857142847)"><rect width="343.277" height="92.66" x="195.2679074074074" y="329.2255555555557" fill="none" rx="0" ry="0" transform="translate(292.14 400.5)"></rect><path fill="#001f3f" d="M507.27590740740743 802.1355555555556Q501.8659074074074 802.1355555555556 497.51590740740744 800.2455555555557Q493.1759074074074 798.3555555555556 490.3059074074074 794.6655555555557L496.0459074074074 789.7455555555557Q498.50590740740745 792.6155555555556 501.4159074074074 793.8955555555556Q504.3259074074074 795.1655555555556 508.01590740740744 795.1655555555556Q509.4859074074074 795.1655555555556 510.76590740740744 794.7955555555557Q512.0359074074074 794.4255555555555 512.9759074074075 793.6855555555555T514.4059074074074 791.9255555555555Q514.9059074074074 790.8955555555556 514.9059074074074 789.6655555555556Q514.9059074074074 787.5355555555557 513.3459074074074 786.2255555555556Q512.5259074074074 785.6455555555556 510.76590740740744 784.9555555555556Q508.9959074074074 784.2555555555557 506.2059074074074 783.5155555555557Q501.4559074074074 782.2855555555557 498.4159074074074 780.7255555555556Q495.38590740740744 779.1755555555555 493.7459074074074 777.2055555555556Q492.51590740740744 775.6455555555556 491.9459074074074 773.8055555555557Q491.3659074074074 771.9555555555556 491.3659074074074 769.7455555555557Q491.3659074074074 766.1355555555556 493.4159074074074 763.3455555555556T498.9559074074074 758.9555555555557Q502.4359074074074 757.3555555555556 506.7859074074074 757.3555555555556Q509.8159074074074 757.3555555555556 512.8159074074074 758.1755555555557Q515.8059074074074 758.9955555555557 518.3459074074074 760.5555555555557T522.6059074074074 764.2455555555557L517.7759074074074 769.5755555555556Q516.2159074074074 768.0155555555557 514.3659074074073 766.8355555555556Q512.5259074074074 765.6455555555556 510.63590740740744 764.9855555555556Q508.75590740740745 764.3255555555556 507.1959074074074 764.3255555555556Q505.4759074074074 764.3255555555556 504.0759074074074 764.6555555555556Q502.6859074074074 764.9855555555555 501.7459074074074 765.6455555555556Q500.7959074074074 766.2955555555556 500.3059074074074 767.2855555555556Q499.8159074074074 768.2655555555556 499.8159074074074 769.4955555555555Q499.89590740740744 770.5655555555555 500.34590740740737 771.5055555555555T501.6159074074074 773.1055555555556Q502.51590740740744 773.7555555555555 504.3259074074074 774.4955555555555Q506.12590740740745 775.2355555555555 508.9159074074074 775.8955555555556Q513.0159074074074 776.9555555555555 515.6859074074074 778.2255555555555Q518.3459074074074 779.4955555555555 519.9059074074074 781.1355555555556Q521.5459074074074 782.6955555555555 522.1959074074074 784.7455555555555Q522.8559074074074 786.7955555555556 522.8559074074074 789.3355555555555Q522.8559074074074 793.0255555555555 520.7659074074074 795.9455555555555Q518.6759074074074 798.8555555555556 515.1459074074074 800.4955555555555Q511.6259074074074 802.1355555555556 507.27590740740743 802.1355555555556M529.7359074074075 801.3155555555555V740.6355555555556H538.1759074074074V767.1155555555556L536.7059074074074 768.1055555555556Q537.5259074074074 765.2355555555555 539.9059074074074 762.8155555555555Q542.2759074074074 760.3955555555556 545.5559074074074 758.8755555555556T552.2859074074074 757.3555555555556Q557.2059074074074 757.3555555555556 560.4859074074074 759.2855555555556T565.4059074074073 765.1455555555556Q567.0459074074074 769.0855555555556 567.0459074074074 775.0755555555556V801.3155555555556H558.5959074074074V775.6455555555556Q558.5959074074074 771.9555555555555 557.6159074074073 769.5355555555556Q556.6259074074073 767.1155555555556 554.5759074074074 766.0155555555556Q552.5259074074074 764.9055555555556 549.4959074074073 765.0655555555556Q547.0359074074074 765.0655555555556 544.9859074074074 765.8455555555556T541.4159074074074 768.0155555555556Q539.9059074074074 769.4155555555556 539.0459074074074 771.2555555555556Q538.1759074074074 773.1055555555556 538.1759074074074 775.2355555555556V801.3155555555556ZM595.4159074074074 802.1355555555556Q589.1059074074074 802.1355555555556 584.1459074074074 799.2255555555555Q579.1759074074074 796.3055555555554 576.3059074074074 791.2655555555555T573.4359074074074 779.7455555555555T576.3059074074074 768.2255555555555T584.1459074074074 760.2755555555556Q589.1059074074074 757.3555555555556 595.4159074074074 757.3555555555556Q601.6459074074074 757.3555555555556 606.6059074074074 760.2755555555556Q611.5659074074074 763.1855555555555 614.4359074074074 768.2255555555555T617.3059074074074 779.7455555555555T614.4359074074074 791.2655555555555T606.6059074074074 799.2255555555555Q601.6459074074074 802.1355555555556 595.4159074074074 802.1355555555556M595.4159074074074 794.4255555555555Q599.2659074074074 794.4255555555555 602.3059074074074 792.4955555555555Q605.3359074074074 790.5655555555555 607.0559074074074 787.2455555555555Q608.7859074074074 783.9255555555555 608.6959074074074 779.7455555555555Q608.7859074074074 775.4855555555555 607.0559074074074 772.1655555555556Q605.3359074074074 768.8355555555556 602.3059074074074 766.9555555555555Q599.2659074074074 765.0655555555556 595.4159074074074 765.0655555555556T588.4859074074075 766.9955555555556Q585.4159074074074 768.9255555555555 583.6859074074074 772.2455555555556Q581.9659074074074 775.5655555555556 582.0459074074074 779.7455555555556Q581.9659074074074 783.9255555555555 583.6859074074074 787.2455555555556Q585.4159074074074 790.5655555555556 588.4859074074075 792.4955555555556Q591.5659074074074 794.4255555555555 595.4159074074074 794.4255555555555M632.5659074074074 819.3655555555556H624.0359074074074V758.2755555555556H632.5659074074074V768.1155555555556L631.2459074074075 767.3755555555556Q631.7459074074075 764.9155555555556 634.0359074074074 762.6555555555556Q636.3359074074075 760.4055555555556 639.6559074074074 758.9655555555555Q642.9759074074075 757.5355555555554 646.5059074074074 757.5355555555554Q652.3259074074075 757.5355555555554 656.8359074074075 760.4055555555556T663.9659074074075 768.2755555555555Q666.5959074074075 773.2755555555555 666.5959074074075 779.7555555555555Q666.5959074074075 786.1555555555556 664.0059074074074 791.1955555555555Q661.4259074074075 796.2355555555555 656.9159074074075 799.1455555555556T646.7459074074075 802.0555555555555Q642.9759074074075 802.0555555555555 639.4459074074075 800.5455555555556Q635.9259074074075 799.0255555555556 633.4659074074075 796.6455555555556T630.4259074074074 791.7255555555555L632.5659074074074 790.5755555555556ZM645.3559074074075 794.2655555555556Q649.1259074074075 794.2655555555556 652.0759074074075 792.3855555555556Q655.0259074074074 790.4955555555556 656.7559074074074 787.2155555555555Q658.4759074074075 783.9355555555555 658.4759074074075 779.7555555555556T656.7959074074075 772.3355555555556T652.1559074074075 767.2055555555555Q649.2059074074075 765.3255555555556 645.3559074074075 765.3255555555556Q641.4959074074075 765.3255555555556 638.5459074074075 767.1655555555556Q635.5959074074075 769.0155555555556 633.8759074074075 772.2955555555556T632.1559074074074 779.7555555555555T633.8759074074075 787.2155555555555T638.5459074074075 792.3855555555556Q641.4959074074075 794.2655555555555 645.3559074074075 794.2655555555555M712.5959074074075 758.2655555555555L681.0259074074075 787.8655555555556L680.6159074074075 778.6755555555555L701.1959074074075 758.2655555555555ZM681.7659074074076 801.3155555555555H673.3159074074075V740.6355555555556H681.7659074074076ZM713.1659074074075 801.3155555555555H702.3459074074075L686.1059074074075 782.3655555555556L692.0959074074075 776.8755555555556ZM750.5559074074075 801.3155555555555H742.9359074074075V773.2655555555555Q742.9359074074075 769.6555555555556 740.3559074074075 767.4055555555556Q737.7659074074076 765.1455555555556 733.8359074074075 765.1455555555556Q730.2259074074075 765.1455555555556 727.3159074074075 766.6255555555556T722.0259074074075 771.1355555555556L716.5259074074075 765.6455555555556Q720.3859074074076 761.4555555555555 724.8559074074075 759.4055555555556T734.4859074074075 757.3555555555555Q739.4059074074075 757.3555555555555 743.0159074074074 758.9955555555555T748.5959074074075 763.7955555555554Q750.5559074074074 766.9555555555555 750.5559074074074 771.4655555555555ZM730.0559074074075 802.1355555555556Q725.8759074074075 802.1355555555556 722.5959074074075 800.4955555555555T717.3959074074075 795.9455555555555Q715.4659074074075 793.0255555555555 715.4659074074075 789.0955555555555Q715.4659074074075 785.6455555555556 716.6959074074075 783.0255555555555T720.3459074074075 778.6755555555555Q722.7659074074076 776.9555555555555 726.4159074074075 776.0555555555554Q730.0559074074075 775.1555555555556 734.8159074074075 775.1555555555556H746.7859074074075L746.0459074074075 781.8755555555556H733.7459074074075Q731.2859074074075 781.8755555555556 729.3659074074075 782.3255555555555Q727.4359074074075 782.7755555555555 726.0859074074075 783.7255555555555Q724.7259074074075 784.6655555555556 724.0759074074075 785.9355555555555Q723.4159074074075 787.2055555555555 723.4159074074075 788.9255555555555Q723.4159074074075 790.7355555555555 724.3159074074075 792.0855555555555Q725.2259074074075 793.4355555555555 726.7759074074074 794.1755555555555Q728.3359074074075 794.9155555555556 730.3859074074074 794.9155555555556Q733.3359074074075 794.9155555555556 736.0059074074074 793.8955555555556Q738.6659074074075 792.8655555555556 740.7659074074074 791.0655555555555Q742.8559074074075 789.2555555555555 743.9959074074075 787.0455555555556L745.9659074074075 792.5355555555556Q744.2459074074075 795.4055555555556 741.7059074074075 797.5355555555556Q739.1659074074075 799.6755555555555 736.2059074074075 800.9055555555556Q733.2559074074076 802.1355555555556 730.0559074074075 802.1355555555556M767.2959074074075 801.3155555555556H758.7659074074076V758.2655555555556H767.2959074074075V771.7955555555556L766.4759074074076 768.5155555555556Q767.3759074074076 765.3955555555556 769.5559074074075 762.8555555555556Q771.7259074074076 760.3155555555555 774.5559074074075 758.8355555555556T780.4159074074075 757.3555555555556Q781.8159074074075 757.3555555555556 783.0859074074076 757.6055555555556T785.0959074074076 758.1755555555555L782.8759074074076 767.3655555555556Q781.8959074074075 766.9555555555555 780.7059074074075 766.6655555555556T778.3659074074076 766.3755555555556Q776.1559074074075 766.3755555555556 774.1459074074075 767.2455555555555Q772.1359074074076 768.1055555555556 770.6159074074076 769.6155555555556Q769.1059074074076 771.1355555555556 768.1959074074075 773.1455555555556Q767.2959074074075 775.1555555555556 767.2959074074075 777.5355555555554ZM808.7059074074076 802.1355555555556Q802.3959074074075 802.1355555555556 797.4359074074076 799.2255555555555Q792.4759074074076 796.3055555555555 789.6059074074076 791.2655555555556T786.7359074074076 779.7455555555556T789.6059074074076 768.2255555555556T797.4359074074076 760.2755555555557Q802.3959074074075 757.3555555555556 808.7059074074076 757.3555555555556Q814.9359074074076 757.3555555555556 819.9059074074075 760.2755555555557Q824.8659074074076 763.1855555555557 827.7359074074076 768.2255555555556T830.6059074074076 779.7455555555556T827.7359074074076 791.2655555555556T819.9059074074075 799.2255555555555Q814.9359074074075 802.1355555555556 808.7059074074076 802.1355555555556M808.7059074074076 794.4255555555555Q812.5659074074076 794.4255555555555 815.5959074074076 792.4955555555556T820.3559074074076 787.2455555555556Q822.0759074074076 783.9255555555555 821.9959074074076 779.7455555555556Q822.0759074074075 775.4855555555556 820.3559074074076 772.1655555555556Q818.6259074074076 768.8355555555556 815.5959074074076 766.9555555555556Q812.5659074074076 765.0655555555556 808.7059074074076 765.0655555555556Q804.8559074074076 765.0655555555556 801.7759074074075 766.9955555555557Q798.7059074074076 768.9255555555557 796.9859074074076 772.2455555555557Q795.2559074074076 775.5655555555556 795.3459074074076 779.7455555555557Q795.2559074074076 783.9255555555557 796.9859074074076 787.2455555555557Q798.7059074074076 790.5655555555556 801.7759074074075 792.4955555555557Q804.8559074074076 794.4255555555557 808.7059074074076 794.4255555555557 "></path><path fill="#194d80" fill-rule="evenodd" d="M886.8609074074075 809.2255555555557C886.5209074074074 808.8855555555557 886.5209074074074 808.3755555555556 886.5209074074074 808.0355555555557L887.8809074074074 800.5555555555557H860.1709074074074L858.8109074074075 808.5455555555557C858.6409074074074 809.2255555555557 858.1309074074074 809.7355555555557 857.2809074074075 809.7355555555557H848.9509074074075C847.9309074074075 809.7355555555557 847.2509074074076 808.8855555555556 847.4209074074075 807.8655555555556L848.7809074074075 800.3855555555556H841.1309074074076C840.1109074074076 800.3855555555556 839.4309074074076 799.5355555555557 839.6009074074076 798.5155555555557L841.1309074074076 790.1855555555557C841.3009074074075 789.5055555555557 841.8109074074075 788.9955555555557 842.6609074074075 788.9955555555557H850.8209074074075L855.5809074074075 761.7955555555557H847.9309074074076C846.9109074074076 761.7955555555557 846.2309074074076 760.9455555555556 846.4009074074077 759.9255555555557L847.9309074074076 751.5955555555556C848.1009074074076 750.9155555555557 848.6109074074076 750.4055555555557 849.4609074074076 750.4055555555557H857.6209074074076L858.9809074074076 742.4155555555557C859.1509074074077 741.7355555555557 859.6609074074076 741.2255555555557 860.5109074074076 741.2255555555557H868.8409074074075C869.8609074074075 741.2255555555557 870.5409074074075 742.0755555555556 870.3709074074075 743.0955555555556L869.0109074074076 750.5755555555556H896.7209074074075L898.0809074074075 742.5855555555556C898.2509074074075 741.9055555555557 898.7609074074074 741.3955555555557 899.6109074074075 741.3955555555557H907.9409074074075C908.9609074074075 741.3955555555557 909.6409074074076 742.2455555555557 909.4709074074075 743.2655555555557L908.1109074074075 750.7455555555557H915.7609074074074C916.7809074074074 750.7455555555557 917.4609074074075 751.5955555555557 917.2909074074074 752.6155555555557L915.7609074074074 760.9455555555558C915.5909074074075 761.6255555555557 915.0809074074075 762.1355555555557 914.2309074074075 762.1355555555557H906.0709074074075L901.3109074074075 789.3355555555556H908.9609074074075C909.9809074074075 789.3355555555556 910.6609074074075 790.1855555555558 910.4909074074075 791.2055555555557L908.9609074074075 799.5355555555557C908.7909074074075 800.2155555555557 908.2809074074075 800.7255555555557 907.4309074074075 800.7255555555557H899.2709074074075L897.9109074074075 808.7155555555557C897.7409074074076 809.3955555555557 897.2309074074076 809.9055555555557 896.3809074074076 809.9055555555557H888.0509074074075M866.9709074074076 761.9655555555557L862.2109074074076 789.1655555555557H889.9209074074075L894.6809074074075 761.9655555555557Z "></path><rect width="117.542" height="59.89" x="308.1349074074074" y="345.61055555555566" fill="none" rx="0" ry="0" transform="translate(621.73 402.53)"></rect><path fill="#001f3f" d="M955.7059074074074 794.2255555555557H932.1159074074073V792.0555555555557Q932.1159074074073 789.4555555555556 933.5559074074074 787.3155555555556Q934.9859074074074 785.1655555555557 937.2059074074074 783.3055555555557Q939.4359074074074 781.4555555555556 941.9759074074074 779.7355555555557Q944.5259074074073 778.0055555555557 946.7459074074073 776.3655555555556Q948.9759074074074 774.7255555555557 950.4059074074073 772.9455555555556Q951.8359074074073 771.1755555555557 951.8359074074073 769.1555555555556Q951.8359074074073 766.0855555555556 949.7959074074073 764.3355555555556T943.9359074074073 762.5855555555556Q940.4459074074073 762.5855555555556 938.2459074074072 764.1455555555556Q936.0459074074072 765.7155555555556 935.6159074074072 768.6855555555557H931.6459074074072Q931.9659074074073 765.6655555555557 933.6259074074072 763.4055555555557Q935.2959074074072 761.1555555555557 937.9459074074073 759.9355555555557T943.8359074074073 758.7155555555556Q947.6459074074072 758.7155555555556 950.3259074074073 760.0955555555556T954.4059074074073 763.8055555555557Q955.8159074074073 766.1355555555556 955.8159074074073 769.0555555555557Q955.8159074074073 771.4955555555556 954.4859074074072 773.6155555555556Q953.1659074074072 775.7355555555556 951.0459074074072 777.5855555555556Q948.9259074074072 779.4455555555556 946.5659074074072 781.0855555555556T942.0359074074072 784.2855555555557Q939.8559074074072 785.8555555555556 938.4259074074072 787.3655555555556T936.8359074074071 790.4155555555556H955.7059074074072ZM973.0959074074074 794.6655555555557Q966.8959074074073 794.6655555555557 963.8459074074074 790.0755555555556Q960.8059074074074 785.4955555555557 960.8059074074074 776.6955555555558T963.8459074074074 763.3155555555556Q966.8959074074073 758.7255555555557 973.0959074074074 758.7255555555557Q976.7059074074074 758.7855555555557 979.0859074074074 760.2955555555557Q981.4759074074074 761.8055555555557 982.8559074074074 764.3455555555557Q984.2259074074074 766.8855555555558 984.8159074074074 770.0655555555558Q985.3959074074074 773.2455555555557 985.3959074074074 776.6955555555558Q985.3959074074074 785.4955555555557 982.3459074074075 790.0755555555558Q979.2959074074075 794.6655555555558 973.0959074074075 794.6655555555558M973.0959074074075 790.7955555555557Q975.8059074074075 790.7355555555557 977.4459074074075 789.4655555555557T979.9659074074075 786.1255555555558Q980.8359074074075 784.0655555555558 981.1259074074075 781.5955555555558Q981.4159074074074 779.1355555555558 981.4159074074074 776.6955555555558Q981.4159074074074 769.6455555555558 979.4559074074074 766.1255555555558Q977.4959074074073 762.5955555555558 973.0959074074074 762.5955555555558Q968.7559074074073 762.5955555555558 966.7659074074073 766.1255555555558Q964.7759074074073 769.6455555555558 964.7759074074073 776.6955555555558T966.7659074074073 787.2655555555558Q968.7559074074073 790.7955555555558 973.0959074074074 790.7955555555558M1014.0059074074073 794.2255555555557H990.4159074074073V792.0555555555558Q990.4159074074073 789.4555555555557 991.8559074074074 787.3155555555558Q993.2859074074073 785.1655555555558 995.5059074074073 783.3055555555558Q997.7359074074074 781.4555555555557 1000.2759074074073 779.7355555555557Q1002.8259074074073 778.0055555555557 1005.0459074074073 776.3655555555558Q1007.2759074074073 774.7255555555557 1008.7059074074073 772.9455555555558Q1010.1359074074072 771.1755555555558 1010.1359074074072 769.1555555555558Q1010.1359074074072 766.0855555555557 1008.0959074074073 764.3355555555557T1002.2359074074072 762.5855555555557Q998.7459074074072 762.5855555555557 996.5459074074072 764.1455555555558Q994.3459074074071 765.7155555555557 993.9159074074072 768.6855555555558H989.9459074074072Q990.2659074074072 765.6655555555558 991.9259074074072 763.4055555555558Q993.5959074074071 761.1555555555558 996.2459074074072 759.9355555555558T1002.1359074074072 758.7155555555557Q1005.9459074074072 758.7155555555557 1008.6259074074072 760.0955555555557T1012.7059074074073 763.8055555555557Q1014.1159074074072 766.1355555555557 1014.1159074074072 769.0555555555557Q1014.1159074074072 771.4955555555557 1012.7859074074072 773.6155555555557Q1011.4659074074071 775.7355555555557 1009.3459074074071 777.5855555555557Q1007.2259074074071 779.4455555555558 1004.8659074074071 781.0855555555557T1000.3359074074071 784.2855555555557Q998.1559074074072 785.8555555555557 996.7259074074071 787.3655555555557T995.1359074074071 790.4155555555558H1014.0059074074071ZM1039.1759074074073 794.2355555555557H1035.2059074074073V785.2855555555558H1018.4559074074073V781.4155555555558L1033.1959074074073 759.1555555555558H1039.1759074074073V781.7255555555557H1043.8959074074073V785.2855555555558H1039.1759074074073ZM1035.2059074074073 762.5455555555558L1022.1659074074073 781.7255555555557H1035.2059074074073Z "></path></g><rect width="560" height="93" x="470" y="703.5" id="space-saver" fill="transparent" stroke="transparent"></rect></g></svg>
          </Link>
          <ul className="items-stretch hidden space-x-3 lg:flex">
            <li className="flex">
              <NavLink 
                to=""
                className={({isActive})=>
                `flex items-center px-4 -mb-1 border-b-2 border-transparent ${isActive ?'text-orange-600':'text-gray-600'}`}
            >
                Home
              </NavLink>
            </li>
            <li className="flex">
              <NavLink
                to="/shop"
                className={({isActive})=>
                    `flex items-center px-4 -mb-1 border-b-2 border-transparent ${isActive ?'text-orange-600':'text-gray-600'}`}
              >
                Shop
              </NavLink>
            </li>
            <li className="flex">
              <NavLink
                to="/dashboard"
                className={({isActive})=>
                    `flex items-center px-4 -mb-1 border-b-2 border-transparent ${isActive ?'text-orange-600':'text-gray-600'}`}
              >
                Dashboard
              </NavLink>
            </li>
            <li className="flex">
              <NavLink
                to="/contact-us"
                className={({isActive})=>
                    `flex items-center px-4 -mb-1 border-b-2 border-transparent ${isActive ?'text-orange-600':'text-gray-600'}`}
              >
                Contact Us
              </NavLink>
            </li>
          </ul>
          <div className="items-center flex-shrink-0 hidden lg:flex">
            <button className="self-center px-8 py-3 rounded">Sign in</button>
            <button className="self-center px-8 py-3 font-semibold rounded bg-blue-600 text-white">
              Sign up
            </button>
          </div>
  
          <button className="p-4 lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              className="w-6 h-6 text-coolGray-800"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              ></path>
            </svg>
          </button>
  
  
        </div>
      </header>
      <Outlet />
      <Footer/>
      </div>
    )
}