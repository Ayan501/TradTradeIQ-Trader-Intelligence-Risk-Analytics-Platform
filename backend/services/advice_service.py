"""Advice service helpers."""
def get_advice(prediction):

    advice = {
        "big_win": "Strong opportunity. Consider increasing exposure while managing risk.",
        "small_win": "Favorable conditions. Trade with normal position sizing.",
        "small_loss": "Proceed cautiously. Reduce risk and monitor sentiment.",
        "big_loss": "High risk environment. Protect capital and avoid oversized trades."
    }

    return advice.get(prediction)