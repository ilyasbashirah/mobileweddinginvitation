import { useState, useEffect } from "react";
import style from "./style.module.scss";
import Modal from "@/src/components/Modal";
import Typography from "@/src/components/Typography";

export interface PaymentAccountModalProps {}

export default function PaymentAccountModal({
  open = false,
  language = "ID",
  handleBatalKirimHadiah,
}: {
  open?: boolean;
  language?: string;
  handleBatalKirimHadiah?: (condition: boolean) => void;
}) {
  const [state, setState] = useState({
    modal: true,
    lang: "ID",
  });
  useEffect(() => {
    setState({ ...state, lang: language });
  }, [state.lang, language]);
  const textDatas = {
    title: {
      id: "Choose one of the option below",
      en: "Silakan pilih salah satu",
    },
    payment_method_options: {
      bank_account: {
        title: "Bank Account",
        datas: [
          {
            id: "BRI",
            name: "Moh. Ilyas Bashirah Putra Arya",
            rekening: "020601175973508",
            icon: "/desktop/weddinggift/bank_account/bri.svg",
          },
          {
            id: "BCA",
            name: "Yasmin Meidiana Syarif",
            rekening: "7660476011",
            icon: "/desktop/weddinggift/bank_account/bca.svg",
          },
          {
            id: "BNI",
            name: "Yasmin Meidiana Syarif",
            rekening: "0267939105",
            icon: "/desktop/weddinggift/bank_account/bni.svg",
          },
        ],
      },
    },
  };

  useEffect(() => {
    setState({ ...state, modal: open });
  }, [open]);

  const handleCloseModal = () => {
    setState({ ...state, modal: false });
    handleBatalKirimHadiah(false);
  };

  const handleCopyText = (text: string) => {
    if (typeof window !== undefined) {
      window.navigator.clipboard.writeText(text);
    }
  };
  return (
    <Modal open={state.modal} handleOutside={handleCloseModal}>
      <div className={style["container-close-button-and-payment-modal"]}>
        <div className={style["container-close-button"]}>
          <div className={style["close-button"]} onClick={handleCloseModal}>
            <img src={"/desktop/weddinggift/icons/close_icon.svg"} />
          </div>
        </div>

        <div className={style["container-payment-account-modal"]}>
          <div className={style["container-header-modal"]}>
            <Typography
              family={"montserrat"}
              variant={"body-1-bold"}
              color={"onyx"}
              align={"center"}
            >
              {textDatas.title[state.lang.toLowerCase()]}
            </Typography>
          </div>

          {/* <hr className={style["divider-payment-account"]} /> */}

          <div className={style["payment-method-options"]}>
            <div className={style["bank-account-payment-method"]}>
              <Typography
                family={"montserrat"}
                variant={"body-1-bold"}
                color={"onyx"}
              >
                {textDatas.payment_method_options.bank_account.title}
              </Typography>

              <div className={style["container-bank-account-list"]}>
                {textDatas.payment_method_options.bank_account.datas.map(
                  (item: any, index: number) => (
                    <div
                      key={`box-copy-bank-account-list-${index}`}
                      className={style["box-copy-bank-account-list"]}
                    >
                      <div
                        key={`box-bank-account-list-${index}`}
                        className={style["box-bank-account-list"]}
                      >
                        <div className={style["box-icon-bank-account"]}>
                          <img src={item.icon} alt={"icon-bank-account"} />
                        </div>

                        <div className={style["box-description-bank-account"]}>
                          <Typography
                            family={"montserrat"}
                            variant={"body-2-semibold"}
                            color={"dark-liver"}
                          >
                            {item.name}
                          </Typography>

                          <Typography
                            family={"montserrat"}
                            variant={"body-2-medium"}
                            color={"gray"}
                          >
                            {item.rekening}
                          </Typography>
                        </div>
                      </div>

                      {/* button copy */}
                      <div onClick={() => handleCopyText(item.rekening)}>
                        <Typography
                          family={"montserrat"}
                          variant={"body-2-bold"}
                          color={"cooper"}
                        >
                          {"Copy"}
                        </Typography>
                      </div>
                      {/* end button copy */}
                    </div>
                  )
                )}
              </div>

              {/* copy wallet another */}
              <div className={style["container-e-wallet-account-list"]}>
                <div className={style["bank-account-payment-method"]}>
                  <Typography
                    family={"montserrat"}
                    variant={"body-1-bold"}
                    color={"onyx"}
                  >
                    {"E-wallet"}
                  </Typography>

                  <div className={style["box-copy-e-wallet-account-list"]}>
                    <div className={style["box-e-wallet-account-list"]}>
                      <div className={style["box-icon-e-wallet-account"]}>
                        <img
                          src={"/desktop/weddinggift/e_wallet/e_wallet.svg"}
                          alt={"icon-bank-account"}
                        />
                      </div>

                      <div
                        className={style["box-description-e-wallet-account"]}
                      >
                        <Typography
                          family={"montserrat"}
                          variant={"body-2-semibold"}
                          color={"dark-liver"}
                        >
                          {"E-Wallet"}
                        </Typography>

                        <Typography
                          family={"montserrat"}
                          variant={"body-2-medium"}
                          color={"gray"}
                        >
                          {"082218342044"}
                        </Typography>
                      </div>
                    </div>

                    {/* button copy */}
                    <div onClick={() => handleCopyText("082218342044")}>
                      <Typography
                        family={"montserrat"}
                        variant={"body-2-bold"}
                        color={"cooper"}
                      >
                        {"Copy"}
                      </Typography>
                    </div>

                    {/* end button copy */}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Modal>
  );
}
